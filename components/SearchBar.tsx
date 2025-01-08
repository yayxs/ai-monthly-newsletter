import { useState } from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface SearchBarProps {
  onSearch: (searchTerm: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const handleClear = () => {
    setSearchTerm('')
    onSearch('')
  }

  return (
    <div className="relative w-44">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="搜索一下..."
        className="w-full pl-7 pr-7 py-1 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      />
      <MagnifyingGlassIcon 
        className="absolute left-2 top-1.5 h-3.5 w-3.5 text-gray-400 dark:text-gray-500" 
      />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute right-2 top-1.5 h-3.5 w-3.5 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        >
          <XMarkIcon />
        </button>
      )}
    </div>
  )
}
