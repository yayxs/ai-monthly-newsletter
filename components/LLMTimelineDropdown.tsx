import { useLanguageContext } from '@/app/LanguageProvider'
import { ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function LLMTimelineDropdown() {
  const { language } = useLanguageContext()

  return (
    <Link
      href="/timeline"
      className="rounded-lg p-1.5 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      title={language === 'zh' ? '大语言模型时刻' : 'LLM Timeline'}
    >
      <ClockIcon className="h-4 w-4" />
    </Link>
  )
}
