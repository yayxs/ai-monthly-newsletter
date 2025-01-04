'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { tools } from '@/data/tools'
import { AnalyticsSummary } from '@/types/analytics'
import { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function AdminPage() {
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
    // 每5分钟刷新一次数据
    const interval = setInterval(fetchData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <>
        <Logo />
        <Header />
        <main className='container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center px-4'>
          <div className='text-lg'>加载中...</div>
        </main>
        <Footer />
      </>
    )
  }

  const popularToolsData = data?.popular_tools.map((item) => ({
    name: tools.find((t) => t.id === item.tool_id)?.name || `Tool ${item.tool_id}`,
    clicks: item.clicks,
  }))

  return (
    <>
      <Logo />
      <Header />
      <main className='container mx-auto min-h-[calc(100vh-200px)] px-4 py-8'>
        <div className='mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3'>
          <div className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'>
            <h3 className='text-lg font-medium text-gray-900 dark:text-white'>总访问量</h3>
            <p className='text-primary mt-2 text-3xl font-bold'>
              {data?.total_views.toLocaleString()}
            </p>
          </div>
          <div className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'>
            <h3 className='text-lg font-medium text-gray-900 dark:text-white'>今日访问</h3>
            <p className='text-primary mt-2 text-3xl font-bold'>
              {data?.today_views.toLocaleString()}
            </p>
          </div>
          <div className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'>
            <h3 className='text-lg font-medium text-gray-900 dark:text-white'>独立访客</h3>
            <p className='text-primary mt-2 text-3xl font-bold'>
              {data?.unique_visitors.toLocaleString()}
            </p>
          </div>
        </div>

        {popularToolsData && popularToolsData.length > 0 && (
          <div className='rounded-lg border border-gray-200 p-6 dark:border-gray-700'>
            <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>热门工具</h2>
            <div className='h-[400px] w-full'>
              <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={popularToolsData}>
                  <CartesianGrid strokeDasharray='3 3' className='opacity-50' />
                  <XAxis
                    dataKey='name'
                    className='text-xs'
                    tick={{ fill: 'currentColor' }}
                    tickLine={{ stroke: 'currentColor' }}
                  />
                  <YAxis
                    className='text-xs'
                    tick={{ fill: 'currentColor' }}
                    tickLine={{ stroke: 'currentColor' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Bar
                    dataKey='clicks'
                    fill='currentColor'
                    className='fill-primary dark:fill-primary/80'
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
