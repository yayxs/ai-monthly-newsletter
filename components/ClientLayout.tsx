'use client'

import { SearchProvider } from '@/contexts/SearchContext'
import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname()
  const showSidebar = pathname === '/'

  return (
    <SearchProvider>
      <div className='min-h-screen bg-gray-50'>
        <Header />
        <div className='relative'>
          {showSidebar && <Sidebar />}
          <div
            className={`${showSidebar ? 'md:pl-64' : ''} min-h-[calc(100vh-64px)] transition-all duration-200`}
          >
            {children}
          </div>
        </div>
      </div>
    </SearchProvider>
  )
}
