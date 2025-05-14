import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI 新闻 - 线框风格网站',
  description: '一个线框风格的网站示例，展示基本布局和结构',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`${inter.className} min-h-screen`}>
        <div className="max-w-screen-2xl mx-auto w-full">
          {children}
        </div>
      </body>
    </html>
  )
}