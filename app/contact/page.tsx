'use client'

import { ChatBubbleLeftIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-2xl'>
        <h1 className='mb-8 text-center text-3xl font-bold'>Advertising Cooperation</h1>
        <div className='space-y-8 rounded-lg border border-gray-200 bg-white p-8 shadow-sm'>
          <div>
            <h2 className='mb-4 text-xl font-semibold'>Why Choose Us?</h2>
            <ul className='list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300'>
              <li>Focused on AI tools navigation with growing traffic</li>
              <li>Precise target audience with high conversion rates</li>
              <li>Flexible advertising placement options</li>
              <li>Transparent data statistics and performance analysis</li>
            </ul>
          </div>
          <div>
            <h2 className='mb-4 text-xl font-semibold'>Ad Placements</h2>
            <ul className='list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300'>
              <li>Homepage tool card advertising spots</li>
              <li>Page footer banner ads</li>
              <li>Tool detail page advertising</li>
              <li>Customized advertising solutions</li>
            </ul>
          </div>
          <div>
            <h2 className='mb-4 text-xl font-semibold'>Contact Information</h2>
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <EnvelopeIcon className='h-5 w-5' />
                <span>Email: ing</span>
              </div>
              <div className='flex items-center gap-2'>
                <ChatBubbleLeftIcon className='h-5 w-5' />
                <span>WeChat: ing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
