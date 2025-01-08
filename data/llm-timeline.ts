export interface LLMEvent {
  id: number
  date: string
  model: string
  company: string
  description: {
    zh: string
    en: string
  }
  link?: string
  parameters?: string
  highlights?: {
    zh: string[]
    en: string[]
  }
}

export const llmEvents: LLMEvent[] = [
  {
    id: 1,
    date: '2024-01-10',
    model: 'Claude 3',
    company: 'Anthropic',
    description: {
      zh: 'Anthropic 发布新一代 AI 助手 Claude 3，大幅提升了多模态能力',
      en: 'Anthropic releases Claude 3 with significantly improved multimodal capabilities'
    },
    highlights: {
      zh: ['增强的视觉理解能力', '更强的上下文处理', '改进的数学和推理能力'],
      en: ['Enhanced visual understanding', 'Better context handling', 'Improved math and reasoning']
    }
  },
  {
    id: 2,
    date: '2023-11-06',
    model: 'GPT-4 Turbo',
    company: 'OpenAI',
    description: {
      zh: 'OpenAI 发布 GPT-4 Turbo，支持更长上下文并降低了使用成本',
      en: 'OpenAI releases GPT-4 Turbo with longer context window and reduced costs'
    },
    parameters: '128K tokens context',
    link: 'https://openai.com/blog/gpt-4-turbo',
    highlights: {
      zh: ['128K tokens 上下文窗口', '知识库更新至 2023 年 4 月', '成本降低 3 倍'],
      en: ['128K tokens context window', 'Knowledge cutoff April 2023', '3x cost reduction']
    }
  },
  {
    id: 3,
    date: '2023-07-06',
    model: 'Claude 2',
    company: 'Anthropic',
    description: {
      zh: 'Anthropic 发布 Claude 2，提供更强的分析和编程能力',
      en: 'Anthropic releases Claude 2 with improved analysis and coding capabilities'
    },
    link: 'https://www.anthropic.com/index/claude-2',
    parameters: '100K tokens context',
    highlights: {
      zh: ['更长的上下文窗口', '改进的数学能力', '更好的多语言支持'],
      en: ['Longer context window', 'Improved mathematical capabilities', 'Better multilingual support']
    }
  },
  {
    id: 4,
    date: '2023-03-14',
    model: 'GPT-4',
    company: 'OpenAI',
    description: {
      zh: 'OpenAI 发布 GPT-4，首次支持多模态输入',
      en: 'OpenAI releases GPT-4 with multimodal input support'
    },
    link: 'https://openai.com/research/gpt-4',
    parameters: '32K tokens context',
    highlights: {
      zh: ['图像理解能力', '更强的推理能力', '更好的事实准确性'],
      en: ['Image understanding', 'Enhanced reasoning', 'Improved factual accuracy']
    }
  },
  {
    id: 5,
    date: '2022-11-30',
    model: 'ChatGPT',
    company: 'OpenAI',
    description: {
      zh: 'OpenAI 发布 ChatGPT，引发全球 AI 对话助手热潮',
      en: 'OpenAI releases ChatGPT, sparking global interest in AI chatbots'
    },
    link: 'https://openai.com/blog/chatgpt',
    parameters: '4K tokens context',
    highlights: {
      zh: ['自然对话能力', '上下文理解', '知识覆盖广泛'],
      en: ['Natural conversation', 'Context awareness', 'Broad knowledge coverage']
    }
  }
]
