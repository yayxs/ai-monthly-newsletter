'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import { Tool } from '@/types/tool'
import { Cursor, DeepSeek, Perplexity } from '@lobehub/icons'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  const { language } = useLanguageContext()

  const handleCompanyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (tool.companyLink) {
      window.open(tool.companyLink, '_blank', 'noopener,noreferrer')
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getToolStyles = () => {
    switch (tool.name.toLowerCase()) {
      case 'cursor':
        return {
          hover: 'hover:border-cursor hover:shadow-cursor',
          groupHover: 'group-hover:text-cursor group-hover:border-cursor',
          dark: 'dark:hover:border-cursor/30 dark:group-hover:text-cursor dark:group-hover:border-cursor/30',
        }
      case 'perplexity':
        return {
          hover: 'hover:border-perplexity hover:shadow-perplexity',
          groupHover: 'group-hover:text-perplexity group-hover:border-perplexity',
          dark: 'dark:hover:border-perplexity/30 dark:group-hover:text-perplexity dark:group-hover:border-perplexity/30',
        }
      case 'deepseek':
        return {
          hover: 'hover:border-deepseek hover:shadow-deepseek',
          groupHover: 'group-hover:text-deepseek group-hover:border-deepseek',
          dark: 'dark:hover:border-deepseek/30 dark:group-hover:text-deepseek dark:group-hover:border-deepseek/30',
        }
      default:
        return {
          hover: 'hover:border-gray-200 hover:shadow-lg',
          groupHover: 'group-hover:text-gray-900 group-hover:border-gray-200',
          dark: 'dark:hover:border-gray-700 dark:group-hover:text-gray-100 dark:group-hover:border-gray-700',
        }
    }
  }

  const getLogo = () => {
    switch (tool.name.toLowerCase()) {
      case 'cursor':
        return <Cursor size={64} />
      case 'perplexity':
        return <Perplexity.Color size={64} />
      case 'deepseek':
        return <DeepSeek.Color size={64} />
      default:
        return null
    }
  }

  const styles = getToolStyles()

  return (
    <a
      href={tool.officialWebsiteLink}
      target='_blank'
      rel='noopener noreferrer'
      className={`group block rounded-lg border border-gray-100 bg-white p-4 transition-all ${styles.hover} ${styles.dark} dark:border-white/10 dark:bg-gray-900/50`}
      title={tool.officialWebsiteLink}
    >
      <div className='flex items-start gap-4'>
        <div
          className={`relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white p-2 transition-colors ${styles.groupHover} ${styles.dark} dark:border-white/10 dark:bg-gray-900`}
        >
          {getLogo()}
        </div>
        <div className='min-w-0 flex-1'>
          <div className='flex items-center justify-between'>
            <div className='min-w-0'>
              <div className='flex items-center gap-2'>
                <h3
                  className={`text-lg font-medium text-gray-900 ${styles.groupHover} dark:text-gray-100 ${styles.dark}`}
                >
                  {tool.name}
                </h3>
                <span className='truncate text-sm text-gray-500 dark:text-gray-400'>
                  {tool.description[language]}
                </span>
                {tool.releaseDate && (
                  <span className='shrink-0 text-xs text-gray-400 dark:text-gray-500'>
                    {language === 'zh' ? '发布于 ' : 'Released '}
                    {formatDate(tool.releaseDate)}
                  </span>
                )}
              </div>
              <div className='mt-1 flex min-w-0 items-center gap-2'>
                <button
                  onClick={handleCompanyClick}
                  className={`text-sm text-gray-500 ${styles.groupHover} dark:text-gray-400 ${styles.dark} truncate`}
                  title={tool.company}
                >
                  {tool.company}
                </button>
                {tool.companyInfo?.type && (
                  <span className='shrink-0 text-xs text-gray-400 dark:text-gray-500'>
                    {tool.companyInfo.type[language]}
                  </span>
                )}
                <span className='shrink-0 text-xs text-gray-400 dark:text-gray-500'>
                  {tool.isDomestic
                    ? language === 'zh'
                      ? '国内'
                      : 'Domestic'
                    : language === 'zh'
                      ? '国外'
                      : 'Foreign'}
                </span>
              </div>
            </div>
            <svg
              className={`h-5 w-5 text-gray-400 transition-transform ${styles.groupHover} group-hover:translate-x-1 dark:text-gray-500 ${styles.dark} shrink-0`}
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
            </div>
          )}
        </div>
      </div>
    </a>
  )
}
