'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import { translations } from '@/lib/i18n'
import { Tool } from '@/types/tool'
import Image from 'next/image'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  const { language } = useLanguageContext()
  const t = translations[language]

  const handleCompanyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(tool.companyLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <a
      href={tool.officialWebsiteLink}
      target='_blank'
      rel='noopener noreferrer'
      className='hover:border-cursor hover:shadow-cursor/5 dark:hover:border-cursor-dark/30 group relative block rounded-lg border border-gray-100 bg-white p-4 transition-all hover:shadow-lg dark:border-white/10 dark:bg-gray-900/50'
      title={tool.officialWebsiteLink}
    >
      <div className='flex items-center gap-4'>
        {tool.logo && (
          <div className='group-hover:border-cursor dark:group-hover:border-cursor-dark/30 relative h-12 w-12 overflow-hidden rounded-lg border border-gray-100 bg-white p-2 dark:border-white/10 dark:bg-gray-900'>
            <Image src={tool.logo} alt={`${tool.name} logo`} fill className='object-contain' />
          </div>
        )}
        <div className='flex flex-1 items-center justify-between'>
          <div>
            <div className='flex items-center gap-2'>
              <h3 className='group-hover:text-cursor dark:group-hover:text-cursor-dark text-lg font-medium text-gray-900 dark:text-gray-100'>
                {tool.name}
              </h3>
              <span className='group-hover:text-cursor/80 dark:group-hover:text-cursor-dark/80 text-sm text-gray-500 dark:text-gray-400'>
                {tool.description[language]}
              </span>
            </div>
            <div className='mt-1 flex items-center gap-2'>
              <button
                onClick={handleCompanyClick}
                className='hover:text-cursor dark:hover:text-cursor-dark text-sm text-gray-500 dark:text-gray-400'
              >
                {tool.company}
              </button>
              <span className='text-xs text-gray-400 dark:text-gray-500'>
                {tool.isDomestic ? t.domestic : t.foreign}
              </span>
            </div>
          </div>
          <svg
            className='group-hover:text-cursor dark:group-hover:text-cursor-dark/80 h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 dark:text-gray-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </div>
      </div>
    </a>
  )
}
