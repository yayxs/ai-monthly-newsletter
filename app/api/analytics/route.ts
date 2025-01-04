import { supabase } from '@/lib/supabase'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const headersList = headers()
    const ip = headersList.get('x-real-ip') || headersList.get('x-forwarded-for')
    const userAgent = headersList.get('user-agent')
    const referer = headersList.get('referer')
    const { searchParams } = new URL(request.url)
    const path = searchParams.get('path') || '/'

    // 记录页面访问
    const { data: pageView, error: pageViewError } = await supabase
      .from('page_views')
      .insert({
        page_path: path,
        user_agent: userAgent,
        ip_address: ip,
        referrer: referer,
      })
      .select()
      .single()

    if (pageViewError) throw pageViewError

    // 更新每日统计
    const today = new Date().toISOString().split('T')[0]
    const { error: statsError } = await supabase.rpc('increment_daily_stats', {
      view_date: today,
      visitor_ip: ip,
    })

    if (statsError) throw statsError

    return NextResponse.json({ success: true, pageView })
  } catch (error) {
    console.error('Error recording analytics:', error)
    return NextResponse.json({ error: 'Failed to record analytics' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const today = new Date().toISOString().split('T')[0]

    // 获取总访问量和今日统计
    const [{ count: totalViews }, { data: todayData }] = await Promise.all([
      supabase.from('page_views').select('*', { count: 'exact', head: true }),
      supabase
        .from('daily_stats')
        .select('total_views, unique_visitors')
        .eq('date', today)
        .single(),
    ])

    // 获取热门工具
    const { data: toolStats } = await supabase.rpc('get_tool_stats', {
      limit_count: 5,
    })

    return NextResponse.json({
      total_views: totalViews || 0,
      today_views: todayData?.total_views || 0,
      unique_visitors: todayData?.unique_visitors || 0,
      popular_tools: toolStats || [],
    })
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
  }
}
