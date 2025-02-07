import { GlobeAltIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function ExternalLinksDropdown() {
  return (
    <Link
      href='/resources'
      className='rounded-lg p-1.5 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
      title='更多资源'
    >
      <GlobeAltIcon className='h-4 w-4' />
    </Link>
  )
}
