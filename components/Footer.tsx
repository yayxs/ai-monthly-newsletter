'use client'

export function Footer() {
  return (
    <footer className='mt-8 border-t border-gray-100 bg-white py-8 dark:border-white/10 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
          <div className='text-sm text-gray-500 dark:text-gray-400'>
            © 2024 AI Navigation. 保留所有权利
          </div>
          <div className='flex items-center gap-4'>
            <a
              href='/admin'
              className='text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            >
              管理
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
