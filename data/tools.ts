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
  {
    id: 4,
    name: 'Monica',
    officialWebsiteLink: 'https://monica.im/',
    company: '北京红色蝴蝶科技有限公司',
    isDomestic: true,
    logo: '/images/monica.png',
    description: {
      en: 'All-in-one AI assistant. Personalized, fast and free.',
      zh: '一站式 AI 助手，个性化、快速且免费。',
    },
    category: {
      key: 'ai-assistant',
      name: {
        en: 'AI Assistant',
        zh: 'AI 助手',
      },
    },
    companyInfo: {
      foundedDate: '2023-07-03',
      location: {
        en: 'Beijing, China',
        zh: '中国北京',
      },
      type: {
        en: 'Tech Company',
        zh: '科技公司',
      },
    },
    releaseDate: '2023-07-03',
  },
  {
    id: 5,
    name: 'MarsCode',
    officialWebsiteLink: 'https://www.marscode.com/',
    company: '北京引力弹弓科技有限公司',
    isDomestic: true,
    description: {
      en: 'AI-first IDE that offers all-in-one development capabilities with built-in AI programming assistant.',
      zh: '内置 AI 编程助手的一体化开发环境，提供代码补全、生成、解释和调试等功能。',
    },
    logo: '/images/marscode.png',
    category: {
      key: 'code-editor',
      name: {
        en: 'AI Code Editor',
        zh: 'AI代码编辑器',
      },
    },
    companyInfo: {
      foundedDate: '2024-03-26',
      location: {
        en: 'Beijing, China',
        zh: '中国北京',
      },
      type: {
        en: 'Tech Company',
        zh: '科技公司',
      },
    },
    releaseDate: '2023-01-01',
  },
  {
    id: 6,
    name: 'Cline',
    officialWebsiteLink:
      'https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev',
    company: 'Cline Bot Inc.',
    companyLink: 'https://cline.bot',
    logo: '/images/Cline.png',
    isDomestic: false,
    description: {
      en: 'Autonomous coding agent right in your IDE, capable of creating/editing files, executing commands, using the browser, and more with your permission every step of the way.',
      zh: '一款强大的 IDE 自主编码助手，能够在您的许可下创建/编辑文件、执行命令、使用浏览器等。',
    },
    category: {
      key: 'code-editor',
      name: {
        en: 'AI Code Editor',
        zh: 'AI代码编辑器',
      },
    },
    companyInfo: {
      foundedDate: '2024-01-01',
      location: {
        en: 'San Francisco, USA',
        zh: '美国旧金山',
      },
      type: {
        en: 'Tech Company',
        zh: '科技公司',
      },
    },
    releaseDate: '2024-01-01',
  },
]
