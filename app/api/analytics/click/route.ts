import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { toolId } = await request.json()

    // 获取最近的页面访问记录
    const { data: latestPageView } = await supabase
      .from('page_views')
      .select('id')
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    // 记录工具点击
    const { error } = await supabase.from('tool_clicks').insert({
      tool_id: toolId,
      page_view_id: latestPageView?.id,
    })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error recording tool click:', error)
    return NextResponse.json({ error: 'Failed to record tool click' }, { status: 500 })
  }
}
