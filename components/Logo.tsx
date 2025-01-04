'use client'

export function Logo() {
  const handleClick = () => {
    window.location.reload()
  }

  return (
    <button
      onClick={handleClick}
      className='hover:text-cursor dark:hover:text-cursor-dark fixed left-4 top-4 z-50 flex items-center gap-1 rounded-full bg-white/80 px-4 py-2 text-lg font-bold text-gray-900 backdrop-blur-sm transition-all duration-200 hover:bg-white dark:bg-gray-900/80 dark:text-gray-100 dark:hover:bg-gray-900'
    >
      <span className='text-primary dark:text-primary'>AI</span>
      <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-primary' />
    </button>
  )
}
