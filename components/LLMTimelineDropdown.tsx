import { useState, useRef, useEffect } from 'react'
import { useLanguageContext } from '@/app/LanguageProvider'
import { ClockIcon } from '@heroicons/react/24/outline'
import { LLMTimeline } from './LLMTimeline'

export function LLMTimelineDropdown() {
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
        title={language === 'zh' ? '模型时刻' : 'LLM Timeline'}
      >
        <ClockIcon className="h-4 w-4" />
      </button>

      {isOpen && <LLMTimeline />}
    </div>
  )
}
