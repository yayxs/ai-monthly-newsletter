import { ExternalLink } from '@/data/external-links'
import { useLanguageContext } from '@/app/LanguageProvider'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface ExternalLinkCardProps {
  link: ExternalLink
}

export function ExternalLinkCard({ link }: ExternalLinkCardProps) {
  const { language } = useLanguageContext()

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-primary hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900 group-hover:text-primary dark:text-gray-100">
            {link.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {link.description[language]}
          </p>
        </div>
        <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 group-hover:text-primary dark:text-gray-500" />
      </div>
      <div className="mt-auto">
        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          {link.category.name[language]}
        </span>
      </div>
    </a>
  )
}
