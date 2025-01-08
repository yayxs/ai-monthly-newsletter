import { useState, useRef, useEffect } from 'react'
import { useLanguageContext } from '@/app/LanguageProvider'
import { externalLinks } from '@/data/external-links'
import { ArrowTopRightOnSquareIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export function ExternalLinksDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguageContext()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg p-1.5 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        title={language === 'zh' ? '更多资源' : 'Resources'}
      >
        <GlobeAltIcon className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 rounded-lg border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
          <div className="space-y-1">
            {externalLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 rounded-md p-2 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {link.name}
                    </span>
                    <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {link.description[language]}
                  </p>
                </div>
                <span className="mt-1 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  {link.category.name[language]}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
