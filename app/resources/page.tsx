'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function ResourcesPage() {
  return (
    <>
      <Header onSearch={() => {}} />
      <main className="container mx-auto flex min-h-[calc(100vh-9rem)] items-center justify-center px-4">
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://openrouter.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg px-4 py-3 text-xl font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800/50"
          >
            openrouter.ai
            <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-primary" />
          </a>
          <a
            href="https://devv.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg px-4 py-3 text-xl font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800/50"
          >
            devv.ai
            <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-primary" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
