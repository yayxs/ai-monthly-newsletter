import { StaticImageData } from 'next/image'

export interface ExternalLink {
  id: number
  name: string
  description: {
    zh: string
    en: string
  }
  url: string
  category: {
    key: string
    name: {
      zh: string
      en: string
    }
  }
  icon?: StaticImageData
}

export const externalLinks: ExternalLink[] = [
  {
    id: 1,
    name: 'OpenAI',
    description: {
      zh: '开发 ChatGPT 和 GPT-4 的 AI 研究公司',
      en: 'AI research company behind ChatGPT and GPT-4'
    },
    url: 'https://openai.com',
    category: {
      key: 'company',
      name: {
        zh: 'AI 公司',
        en: 'AI Company'
      }
    }
  },
  {
    id: 2,
    name: 'Hugging Face',
    description: {
      zh: '最大的开源 AI 模型和数据集社区',
      en: 'Largest open-source AI model and dataset community'
    },
    url: 'https://huggingface.co',
    category: {
      key: 'community',
      name: {
        zh: 'AI 社区',
        en: 'AI Community'
      }
    }
  },
  {
    id: 3,
    name: 'Papers with Code',
    description: {
      zh: 'AI 研究论文和实现代码的免费资源',
      en: 'Free resource of AI research papers with code'
    },
    url: 'https://paperswithcode.com',
    category: {
      key: 'research',
      name: {
        zh: 'AI 研究',
        en: 'AI Research'
      }
    }
  },
  {
    id: 4,
    name: 'Anthropic',
    description: {
      zh: 'Claude AI 助手背后的 AI 研究公司',
      en: 'AI research company behind Claude AI assistant'
    },
    url: 'https://anthropic.com',
    category: {
      key: 'company',
      name: {
        zh: 'AI 公司',
        en: 'AI Company'
      }
    }
  },
  {
    id: 5,
    name: 'AI News',
    description: {
      zh: '人工智能新闻和分析平台',
      en: 'Artificial Intelligence news and analysis'
    },
    url: 'https://artificialintelligence-news.com',
    category: {
      key: 'news',
      name: {
        zh: 'AI 新闻',
        en: 'AI News'
      }
    }
  }
]
