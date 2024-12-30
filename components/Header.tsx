import { ThemeSwitcher } from './ThemeSwitcher'

export function Header() {
  return (
    <header className="relative border-b border-gray-100 bg-white/50 dark:border-white/10 dark:bg-transparent">
      {/* 背景动画效果 */}
      <div className="absolute inset-0 grid-background opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="relative">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="relative">
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                  AI <span className="text-primary">导航</span>
                  <span className="absolute -right-6 -top-2 h-2 w-2 rounded-full bg-primary animate-ping" />
                </h1>
                <p className="mt-3 max-w-2xl text-base text-gray-500 sm:text-lg">
                  探索 AI 新世界，发现改变未来的工具与资源
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden items-center gap-2 rounded-full bg-gray-50/80 p-1 backdrop-blur-sm dark:bg-white/5 sm:flex">
                <button className="rounded-full px-4 py-2 text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  最新
                </button>
                <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm dark:bg-primary/10">
                  热门
                </button>
              </div>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
