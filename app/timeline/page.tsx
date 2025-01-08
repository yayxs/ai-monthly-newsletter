'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { llmEvents } from '@/data/llm-timeline'

export default function TimelinePage() {
  const event = llmEvents[0]

  return (
    <>
      <Header onSearch={() => {}} />
      <main className="container mx-auto flex min-h-[calc(100vh-9rem)] items-center px-4">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-white/10">
            <div className="px-6 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                    {event.model}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {event.company}
                  </p>
                </div>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {event.date}
                </time>
              </div>
              <div className="mt-4 flex gap-3">
                <div className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {event.parameters}
                </div>
                <div className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {event.tokens}
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
