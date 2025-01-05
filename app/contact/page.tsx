'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ChatBubbleLeftIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  const { language } = useLanguageContext()

  return (
    <>
      <Header />
      <main className='container mx-auto min-h-[calc(100vh-200px)] px-4 py-8'>
        <div className='mx-auto max-w-2xl'>
          <h1 className='mb-8 text-center text-3xl font-bold'>
            {language === 'zh' ? '广告合作' : 'Advertising'}
          </h1>
          <div className='space-y-8 rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800'>
            <div>
              <h2 className='mb-4 text-xl font-semibold'>
                {language === 'zh' ? '为什么选择我们？' : 'Why Choose Us?'}
              </h2>
              <ul className='list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300'>
                {language === 'zh' ? (
                  <>
                    <li>专注AI工具导航，访问量持续增长</li>
                    <li>目标用户精准，转化率高</li>
                    <li>灵活的广告位置选择</li>
                    <li>透明的数据统计和效果分析</li>
                  </>
                ) : (
                  <>
                    <li>Focused on AI tools navigation with growing traffic</li>
                    <li>Precise target audience with high conversion rates</li>
                    <li>Flexible advertising placement options</li>
                    <li>Transparent statistics and performance analysis</li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h2 className='mb-4 text-xl font-semibold'>
                {language === 'zh' ? '广告位置' : 'Ad Placements'}
              </h2>
              <ul className='list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300'>
                {language === 'zh' ? (
                  <>
                    <li>首页工具卡片间广告位</li>
                    <li>页面底部横幅广告</li>
                    <li>工具详情页广告</li>
                    <li>定制化广告解决方案</li>
                  </>
                ) : (
                  <>
                    <li>Between tool cards on homepage</li>
                    <li>Footer banner ads</li>
                    <li>Tool detail page ads</li>
                    <li>Customized advertising solutions</li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h2 className='mb-4 text-xl font-semibold'>
                {language === 'zh' ? '联系方式' : 'Contact Information'}
              </h2>
              <div className='space-y-4'>
                <div className='flex items-center gap-2'>
                  <EnvelopeIcon className='h-5 w-5' />
                  <span>Email: contact@example.com</span>
                </div>
                <div className='flex items-center gap-2'>
                  <ChatBubbleLeftIcon className='h-5 w-5' />
                  <span>WeChat: your_wechat_id</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
