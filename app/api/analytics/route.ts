import { supabase } from '@/lib/supabase'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// 不统计的路径列表
const EXCLUDED_PATHS = ['/admin']

export async function POST(request: NextRequest) {
  try {
    const headersList = headers()
    const ip = headersList.get('x-real-ip') || headersList.get('x-forwarded-for')
    const userAgent = headersList.get('user-agent')
    const referer = headersList.get('referer')
    const { searchParams } = new URL(request.url)
    const path = searchParams.get('path') || '/'

    // 如果是管理页面，不记录访问
    if (EXCLUDED_PATHS.includes(path)) {
      return NextResponse.json({ success: true })
    }

    console.log('Recording page view:', { path, ip, userAgent, referer })

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

    if (pageViewError) {
      console.error('Error recording page view:', pageViewError)
      throw pageViewError
    }

    // 更新每日统计
    const today = new Date().toISOString().split('T')[0]
    const { error: statsError } = await supabase.rpc('increment_daily_stats', {
      view_date: today,
      visitor_ip: ip,
    })

    if (statsError) {
      console.error('Error updating daily stats:', statsError)
      throw statsError
    }

    return NextResponse.json({ success: true, pageView })
  } catch (error) {
    console.error('Error recording analytics:', error)
    return NextResponse.json(
      {
        error: 'Failed to record analytics',
        details: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    console.log('Fetching analytics data')

    const today = new Date().toISOString().split('T')[0]
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    const thirtyDaysAgoStr = thirtyDaysAgo.toISOString().split('T')[0]

    // 获取总访问量（排除管理页面）
    const { count: totalViews, error: countError } = await supabase
      .from('page_views')
      .select('*', { count: 'exact', head: true })
      .not('page_path', 'in', `(${EXCLUDED_PATHS.join(',')})`)

    if (countError) {
      console.error('Error fetching total views:', countError)
      throw countError
    }

    // 获取今日统计（排除管理页面）
    const { data: todayData, error: todayError } = await supabase
      .from('daily_stats')
      .select('total_views, unique_visitors')
      .eq('date', today)
      .single()

    if (todayError && todayError.code !== 'PGRST116') {
      console.error('Error fetching today stats:', todayError)
      throw todayError
    }

    // 获取最近30天的统计数据（排除管理页面）
    const { data: dailyStats, error: statsError } = await supabase
      .from('daily_stats')
      .select('*')
      .gte('date', thirtyDaysAgoStr)
      .lte('date', today)
      .order('date', { ascending: true })

    if (statsError) {
      console.error('Error fetching daily stats:', statsError)
      throw statsError
    }

    const response = {
      total_views: totalViews || 0,
      today_views: todayData?.total_views || 0,
      daily_stats: dailyStats || [],
    }

    console.log('Analytics data:', response)

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch analytics',
        details: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    )
  }
}
