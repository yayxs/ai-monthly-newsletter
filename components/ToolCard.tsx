'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import { translations } from '@/lib/i18n'
import { Tool } from '@/types/tool'
import { Cursor, Perplexity } from '@lobehub/icons'
import { useMemo } from 'react'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  const { language } = useLanguageContext()
  const t = translations[language]

  const themeColor = useMemo(() => {
    switch (tool.name.toLowerCase()) {
      case 'cursor':
        return 'cursor'
      case 'perplexity':
        return 'perplexity'
      default:
        return 'gray'
    }
  }, [tool.name])

  const Logo = useMemo(() => {
    switch (tool.name.toLowerCase()) {
      case 'cursor':
        return <Cursor size={48} />
      case 'perplexity':
        return <Perplexity size={48} />
      default:
        return null
    }
  }, [tool.name])

  const handleCompanyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(tool.companyLink, '_blank', 'noopener,noreferrer')
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <a
      href={tool.officialWebsiteLink}
      target='_blank'
      rel='noopener noreferrer'
      className={`group relative block rounded-lg border border-gray-100 bg-white p-4 transition-all hover:border-${themeColor} hover:shadow-lg dark:border-white/10 dark:bg-gray-900/50 dark:hover:border-${themeColor}/30`}
      title={tool.officialWebsiteLink}
    >
      <div className='flex items-start gap-4'>
        <div
          className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white p-2 group-hover:border-${themeColor} dark:border-white/10 dark:bg-gray-900 dark:group-hover:border-${themeColor}/30`}
        >
          {Logo}
        </div>
        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <div>
              <div className='flex items-center gap-2'>
                <h3
                  className={`text-lg font-medium text-gray-900 group-hover:text-${themeColor} dark:text-gray-100 dark:group-hover:text-${themeColor}`}
                >
                  {tool.name}
                </h3>
                <span
                  className={`text-sm text-gray-500 group-hover:text-${themeColor}/80 dark:text-gray-400 dark:group-hover:text-${themeColor}/80`}
                >
                  {tool.description[language]}
                </span>
                {tool.releaseDate && (
                  <span className='text-xs text-gray-400 dark:text-gray-500'>
                    {language === 'zh' ? '发布于 ' : 'Released '}
                    {formatDate(tool.releaseDate)}
                  </span>
                )}
              </div>
              <div className='mt-1 flex items-center gap-2'>
                <button
                  onClick={handleCompanyClick}
                  className={`text-sm text-gray-500 hover:text-${themeColor} dark:text-gray-400 dark:hover:text-${themeColor}`}
                >
                  {tool.company}
                </button>
                <span className='text-xs text-gray-400 dark:text-gray-500'>
                  {tool.isDomestic ? t.domestic : t.foreign}
                </span>
              </div>
            </div>
            <svg
              className={`h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-${themeColor} dark:text-gray-500 dark:group-hover:text-${themeColor}/80`}
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
          {tool.companyInfo && (
            <div className='mt-2 text-xs text-gray-500 dark:text-gray-400'>
              <span className='inline-flex items-center gap-1'>
                <svg className='h-3 w-3' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' />
                </svg>
                {language === 'zh' ? '成立于 ' : 'Founded '}
                {formatDate(tool.companyInfo.foundedDate)}
              </span>
              <span className='mx-2'>·</span>
              <span className='inline-flex items-center gap-1'>
                <svg className='h-3 w-3' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
                {tool.companyInfo.location[language]}
              </span>
              <span className='mx-2'>·</span>
              <span>{tool.companyInfo.type[language]}</span>
            </div>
          )}
        </div>
      </div>
    </a>
  )
}
