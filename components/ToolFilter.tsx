'use client'

import { Tool, ToolCategory } from '@/types/tool'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { FunnelIcon } from '@heroicons/react/24/outline'
import { Fragment, useEffect, useState } from 'react'

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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const hasActiveFilters = selectedCategory !== null || sortBy !== null || showDomesticOnly !== null

  const handleReset = () => {
    onCategoryChange(null)
    onSortChange(null)
    onDomesticChange(null)
  }

  const categories = Array.from(new Set(tools.map((tool) => tool.category.key)))

  const getCategoryName = (category: ToolCategory) => {
    const tool = tools.find((t) => t.category.key === category)
    return tool?.category.name || category
  }

  const getSortLabel = (sort: string | null) => {
    switch (sort) {
      case 'releaseDate':
        return '按发布时间排序'
      case 'companyFoundedDate':
        return '按公司成立时间排序'
      default:
        return '默认排序'
    }
  }

  const getDomesticLabel = (domestic: boolean | null) => {
    if (domestic === null) return '所有公司'
    return domestic ? '仅国内公司' : '仅国外公司'
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
          类别
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
                    全部
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
          title='重置筛选'
        >
          <XMarkIcon className='h-4 w-4' />
          重置
        </button>
      )}
    </div>
  )
}
