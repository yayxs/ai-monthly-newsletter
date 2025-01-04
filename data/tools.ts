import { Tool } from '@/types/tool'

export const tools: Tool[] = [
  {
    id: 1,
    name: 'Cursor',
    // cursor 的网址是 https://www.cursor.com/
    officialWebsiteLink: 'https://www.cursor.com/',
    company: 'Anysphere',
    companyLink: 'https://anysphere.inc',
    isDomestic: false,
    logo: 'https://www.cursor.com/assets/videos/logo/placeholder-logo.webp',
    description: {
      en: 'The AI Code Editor',
      zh: 'AI代码编辑器',
    },
    companyInfo: {
      foundedDate: '2022-01-06',
      location: {
        en: 'Buffalo, New York, USA',
        zh: '美国纽约州布法罗',
      },
      type: {
        en: 'Tech Startup',
        zh: '科技初创公司',
      },
    },
    releaseDate: '2023-01-05',
  },
  {
    id: 2,
    name: 'Perplexity',
    officialWebsiteLink: 'https://www.perplexity.ai/',
    company: 'Perplexity AI',
    companyLink: 'https://www.perplexity.ai/about',
    isDomestic: false,
    logo: 'https://raw.githubusercontent.com/lobehub/lobe-icons/master/icons/perplexity.webp',
    description: {
      en: 'AI Search Engine',
      zh: 'AI搜索引擎',
    },
    companyInfo: {
      foundedDate: '2022-08-03',
      location: {
        en: 'San Francisco, USA',
        zh: '美国旧金山',
      },
      type: {
        en: 'Tech Startup',
        zh: '科技初创公司',
      },
    },
    releaseDate: '2022-12-07',
  },
]
