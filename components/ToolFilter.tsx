'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import { Tool, ToolCategory } from '@/types/tool'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { FunnelIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

interface ToolFilterProps {
  tools: Tool[]
  selectedCategory: ToolCategory | null
  onCategoryChange: (category: ToolCategory | null) => void
  sortBy: 'releaseDate' | 'companyFoundedDate' | null
  onSortChange: (sort: 'releaseDate' | 'companyFoundedDate' | null) => void
  showDomesticOnly: boolean | null
  onDomesticChange: (domestic: boolean | null) => void
}

export function ToolFilter({
  tools,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  showDomesticOnly,
  onDomesticChange,
}: ToolFilterProps) {
  const { language, mounted } = useLanguageContext()

  const hasActiveFilters = selectedCategory !== null || sortBy !== null || showDomesticOnly !== null

  const handleReset = () => {
    onCategoryChange(null)
    onSortChange(null)
    onDomesticChange(null)
  }

  // 获取所有可用的类别
  const categories = Array.from(new Set(tools.map((tool) => tool.category.key)))

  const getCategoryName = (category: ToolCategory) => {
    const tool = tools.find((t) => t.category.key === category)
    return tool?.category.name[language] || category
  }

  const getSortLabel = (sort: string | null) => {
    if (!mounted) return '加载中...'
    switch (sort) {
      case 'releaseDate':
        return language === 'zh' ? '按发布时间排序' : 'Sort by Release Date'
      case 'companyFoundedDate':
        return language === 'zh' ? '按公司成立时间排序' : 'Sort by Company Founded Date'
      default:
        return language === 'zh' ? '默认排序' : 'Default Sort'
    }
  }

  const getDomesticLabel = (domestic: boolean | null) => {
    if (!mounted) return '加载中...'
    if (domestic === null) return language === 'zh' ? '所有公司' : 'All Companies'
    return domestic
      ? language === 'zh'
        ? '仅国内公司'
        : 'Domestic Only'
      : language === 'zh'
        ? '仅国外公司'
        : 'Foreign Only'
  }

  if (!mounted) {
    return (
      <div className='mb-6 flex flex-wrap items-center gap-4'>
        <div className='inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:text-gray-200'>
          <FunnelIcon className='h-4 w-4' />
          类别
          <ChevronDownIcon className='h-4 w-4' />
        </div>
      </div>
    )
  }

  return (
    <div className='mb-6 flex flex-wrap items-center gap-4'>
      <Menu as='div' className='relative'>
        <Menu.Button className='inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800'>
          <FunnelIcon className='h-4 w-4' />
          {language === 'zh' ? '类别' : 'Category'}
          <ChevronDownIcon className='h-4 w-4' />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800'>
            <div className='p-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => onCategoryChange(null)}
                    className={`${
                      active
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : selectedCategory === null
                          ? 'bg-gray-50 dark:bg-gray-700'
                          : ''
                    } flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200`}
                  >
                    {language === 'zh' ? '全部' : 'All'}
                  </button>
                )}
              </Menu.Item>
              {categories.map((category) => (
                <Menu.Item key={category}>
                  {({ active }) => (
                    <button
                      onClick={() => onCategoryChange(category)}
                      className={`${
                        active
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : selectedCategory === category
                            ? 'bg-gray-50 dark:bg-gray-700'
                            : ''
                      } flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200`}
                    >
                      {getCategoryName(category)}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <Menu as='div' className='relative'>
        <Menu.Button className='inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800'>
          {getSortLabel(sortBy)}
          <ChevronDownIcon className='h-4 w-4' />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800'>
            <div className='p-1'>
              {(['releaseDate', 'companyFoundedDate', null] as const).map((sort) => (
                <Menu.Item key={sort || 'default'}>
                  {({ active }) => (
                    <button
                      onClick={() => onSortChange(sort)}
                      className={`${
                        active
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : sortBy === sort
                            ? 'bg-gray-50 dark:bg-gray-700'
                            : ''
                      } flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200`}
                    >
                      {getSortLabel(sort)}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <Menu as='div' className='relative'>
        <Menu.Button className='inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800'>
          {getDomesticLabel(showDomesticOnly)}
          <ChevronDownIcon className='h-4 w-4' />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800'>
            <div className='p-1'>
              {([null, true, false] as const).map((domestic) => (
                <Menu.Item key={String(domestic)}>
                  {({ active }) => (
                    <button
                      onClick={() => onDomesticChange(domestic)}
                      className={`${
                        active
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : showDomesticOnly === domestic
                            ? 'bg-gray-50 dark:bg-gray-700'
                            : ''
                      } flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200`}
                    >
                      {getDomesticLabel(domestic)}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {hasActiveFilters && (
        <button
          onClick={handleReset}
          className='inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-500 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-red-400'
          title={language === 'zh' ? '重置筛选' : 'Reset Filters'}
        >
          <XMarkIcon className='h-4 w-4' />
          {language === 'zh' ? '重置' : 'Reset'}
        </button>
      )}
    </div>
  )
}
