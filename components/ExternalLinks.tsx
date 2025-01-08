import { useLanguageContext } from '@/app/LanguageProvider'
import { externalLinks } from '@/data/external-links'
import { ExternalLinkCard } from './ExternalLinkCard'

export function ExternalLinks() {
  const { language } = useLanguageContext()

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          {language === 'zh' ? 'AI 相关网站' : 'AI Related Websites'}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {externalLinks.map((link) => (
            <ExternalLinkCard key={link.id} link={link} />
          ))}
        </div>
      </div>
    </section>
  )
}
