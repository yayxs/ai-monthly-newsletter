import { LanguageSwitch } from './LanguageSwitch'
import { ThemeSwitch } from './ThemeSwitch'

export function Header() {
  return (
    <header className='fixed right-4 top-4 z-50 flex items-center gap-4 rounded-full bg-white/80 p-2 backdrop-blur-sm dark:bg-gray-800/80'>
      <LanguageSwitch />
      <div className='h-4 w-px bg-gray-200 dark:bg-gray-700' />
      <ThemeSwitch />
    </header>
  )
}
