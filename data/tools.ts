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
    category: {
      key: 'code-editor',
      name: {
        en: 'AI Code Editor',
        zh: 'AI代码编辑器',
      },
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
    category: {
      key: 'search-engine',
      name: {
        en: 'AI Search Engine',
        zh: 'AI搜索引擎',
      },
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
  {
    id: 3,
    name: 'DeepSeek',
    officialWebsiteLink: 'https://deepseek.com/',
    company: '杭州深度求索人工智能基础技术研究有限公司',
    companyLink: 'https://deepseek.com/about',
    isDomestic: true,
    logo: 'https://raw.githubusercontent.com/lobehub/lobe-icons/master/icons/deepseek.webp',
    description: {
      en: 'Large Language Model',
      zh: '大语言模型',
    },
    category: {
      key: 'llm',
      name: {
        en: 'Large Language Model',
        zh: '大语言模型',
      },
    },
    companyInfo: {
      foundedDate: '2023-07-17',
      location: {
        en: 'Hangzhou, China',
        zh: '中国杭州',
      },
      type: {
        en: 'AI Research Company',
        zh: '人工智能研究公司',
      },
    },
    releaseDate: '2023-11-02',
  },
]
