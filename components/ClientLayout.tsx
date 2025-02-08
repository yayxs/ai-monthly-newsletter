'use client'

import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { usePathname } from 'next/navigation'

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname()
  const showSidebar = pathname === '/'

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header onSearch={pathname === '/' ? () => {} : undefined} />
      <div className='relative'>
        {showSidebar && <Sidebar />}
        <div
          className={`${
            showSidebar ? 'pl-64' : ''
          } min-h-[calc(100vh-64px)] transition-all duration-200`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
