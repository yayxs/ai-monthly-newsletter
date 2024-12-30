import Image from 'next/image'
import { Tool } from '../types/tool'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl border border-gray-100 bg-surface shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 dark:border-white/10 dark:bg-white/5"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative p-5">
        <div className="flex items-start gap-4">
          {tool.logo && (
            <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-gray-100 bg-white p-2 shadow-sm dark:border-white/20 dark:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50" />
              <Image
                src={tool.logo}
                alt={tool.name}
                fill
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary">
                {tool.name}
              </h3>
              <span className="ml-2 rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-500 dark:bg-white/5 dark:text-gray-400">
                {tool.category}
              </span>
            </div>
            <p className="mt-2 line-clamp-2 text-gray-500 dark:text-gray-400">
              {tool.description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/5 px-2 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
            在线可用
          </span>
          <span className="text-xs text-gray-400">
            {tool.category}
          </span>
        </div>
      </div>
    </a>
  )
}
