import { useLanguageContext } from '@/app/LanguageProvider'
import { llmEvents } from '@/data/llm-timeline'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export function LLMTimeline() {
  const { language } = useLanguageContext()

  return (
    <div className="absolute right-0 top-full mt-2 w-96 rounded-lg border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {language === 'zh' ? '大语言模型时刻' : 'LLM Timeline'}
        </h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {language === 'zh' ? '按时间排序' : 'Sorted by date'}
        </span>
      </div>
      <div className="max-h-[calc(100vh-200px)] space-y-3 overflow-y-auto">
        {llmEvents.map((event) => (
          <div
            key={event.id}
            className="relative rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">{event.model}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{event.company}</p>
              </div>
              <div className="text-right">
                <time className="text-sm font-medium text-primary">{event.date}</time>
                {event.parameters && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">{event.parameters}</p>
                )}
              </div>
            </div>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
              {event.description[language]}
            </p>
            {event.highlights && (
              <ul className="mb-2 space-y-1">
                {event.highlights[language].map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80"
              >
                <span>{language === 'zh' ? '了解更多' : 'Learn more'}</span>
                <ArrowTopRightOnSquareIcon className="h-3 w-3" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
