'use client'

import { Tool } from '@/types/tool'
import Link from 'next/link'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  const handleCompanyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (tool.companyLink) {
      window.open(tool.companyLink, '_blank', 'noopener,noreferrer')
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getToolStyles = () => {
    return {
      groupHover: 'group-hover:text-cursor',
      dark: 'dark:group-hover:text-cursor-dark',
    }
  }

  const styles = getToolStyles()

  return (
    <Link
      href={tool.officialWebsiteLink}
      target='_blank'
      rel='noopener noreferrer'
      className='group'
    >
      <div className='hover:border-cursor dark:hover:border-cursor-dark flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800'>
        <div className='min-w-0'>
          <div className='flex items-center gap-2'>
            <h3
              className={`text-lg font-medium text-gray-900 ${styles.groupHover} dark:text-gray-100 ${styles.dark}`}
            >
              {tool.name}
            </h3>
            <span className='truncate text-sm text-gray-500 dark:text-gray-400'>
              {tool.description}
            </span>
            {tool.releaseDate && (
              <span className='shrink-0 text-xs text-gray-400 dark:text-gray-500'>
                发布于 {formatDate(tool.releaseDate)}
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
                {tool.companyInfo.type}
              </span>
            )}
            <span className='shrink-0 text-xs text-gray-400 dark:text-gray-500'>
              {tool.isDomestic ? '国内' : '国外'}
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
      {tool.companyInfo && tool.companyInfo.foundedDate && (
        <div className='mt-2 text-xs text-gray-500 dark:text-gray-400'>
          <span className='inline-flex items-center gap-1'>
            <svg className='h-3 w-3' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' />
            </svg>
            成立于 {formatDate(tool.companyInfo.foundedDate)}
          </span>
          {tool.companyInfo.location && (
            <>
              <span className='mx-2'>·</span>
              <span className='inline-flex items-center gap-1'>
                <svg className='h-3 w-3' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
                {tool.companyInfo.location}
              </span>
            </>
          )}
        </div>
      )}
    </Link>
  )
}
