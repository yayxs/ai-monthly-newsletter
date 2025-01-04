import { Tool } from '../types/tool'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <a
      href={tool.officialWebsiteLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-gray-100 bg-white p-4 transition-all
        hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5
        dark:border-white/10 dark:bg-white/5"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary dark:text-white">
          {tool.name}
        </h3>
        <svg
          className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {tool.officialWebsiteLink}
      </p>
    </a>
  )
}
