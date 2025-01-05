'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import { AnalyticsSummary } from '@/types/analytics'
import { ArrowLeftIcon, ChartBarIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export default function AdminPage() {
  const { language } = useLanguageContext()
  const [data, setData] = useState<AnalyticsSummary | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/analytics')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching analytics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-gray-500'>{language === 'zh' ? '加载中...' : 'Loading...'}</div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-red-500'>
          {language === 'zh' ? '加载数据失败' : 'Failed to load data'}
        </div>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
          {language === 'zh' ? '数据统计' : 'Analytics'}
        </h1>
        <Link
          href='/'
          className='flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100'
        >
          <ArrowLeftIcon className='h-4 w-4' />
          <span>{language === 'zh' ? '返回首页' : 'Back to Home'}</span>
        </Link>
      </div>

      {/* 统计卡片 */}
      <div className='mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <div className='rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800'>
          <div className='flex items-center gap-2'>
            <ViewfinderCircleIcon className='h-5 w-5 text-blue-500' />
            <h2 className='text-sm font-medium text-gray-500 dark:text-gray-400'>
              {language === 'zh' ? '总访问量' : 'Total Views'}
            </h2>
          </div>
          <p className='mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100'>
            {data.total_views.toLocaleString()}
          </p>
          <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
            {language === 'zh' ? '网站创建以来的总访问次数' : 'Total visits since website creation'}
          </p>
        </div>

        <div className='rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800'>
          <div className='flex items-center gap-2'>
            <ChartBarIcon className='h-5 w-5 text-green-500' />
            <h2 className='text-sm font-medium text-gray-500 dark:text-gray-400'>
              {language === 'zh' ? '今日访问' : "Today's Views"}
            </h2>
          </div>
          <p className='mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100'>
            {data.today_views.toLocaleString()}
          </p>
          <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
            {language === 'zh'
              ? '今天（00:00至现在）的访问次数'
              : 'Number of visits today (00:00 to now)'}
          </p>
        </div>
      </div>

      {/* 访问趋势图表 */}
      <div className='rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800'>
        <h2 className='mb-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
          {language === 'zh' ? '访问趋势' : 'Visit Trends'}
        </h2>
        <div className='h-[400px] w-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart data={data.daily_stats} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#3B82F6' stopOpacity={0.8} />
                  <stop offset='95%' stopColor='#3B82F6' stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey='date'
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
                    month: 'short',
                    day: 'numeric',
                  })
                }
              />
              <YAxis />
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip
                labelFormatter={(value) =>
                  new Date(value).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                }
                formatter={(value: number) => [value, language === 'zh' ? '访问次数' : 'Visits']}
              />
              <Area
                type='monotone'
                dataKey='total_views'
                stroke='#3B82F6'
                fillOpacity={1}
                fill='url(#total)'
                name={language === 'zh' ? '访问次数' : 'Visits'}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
