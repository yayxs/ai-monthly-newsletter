import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

const TABLE_NAME = 'views'
const VIEWS_ID = 'total'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('count')
      .eq('id', VIEWS_ID)
      .single()

    if (error) throw error

    return NextResponse.json({ views: data?.count || 0 })
  } catch (error) {
    console.error('Error fetching views:', error)
    return NextResponse.json({ error: 'Failed to get views' }, { status: 500 })
  }
}

export async function POST() {
  try {
    const { data: existingData, error: selectError } = await supabase
      .from(TABLE_NAME)
      .select('count')
      .eq('id', VIEWS_ID)
      .single()

    if (selectError && selectError.code !== 'PGRST116') throw selectError

    const newCount = (existingData?.count || 0) + 1

    const { error: upsertError } = await supabase
      .from(TABLE_NAME)
      .upsert({ id: VIEWS_ID, count: newCount })

    if (upsertError) throw upsertError

    return NextResponse.json({ views: newCount })
  } catch (error) {
    console.error('Error incrementing views:', error)
    return NextResponse.json({ error: 'Failed to increment views' }, { status: 500 })
  }
}
