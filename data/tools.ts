import { Tool } from '@/types/tool'

export const tools: Tool[] = [
  {
    id: 1,
    name: 'Cursor',
    // cursor 的网址是 https://www.cursor.com/
    linkUrl: 'https://www.cursor.com/',
    category: {
      key: 'Coding',
      name: '编码',
    },
  },
  {
    id: 2,
    name: 'Perplexity',
    linkUrl: 'https://www.perplexity.ai/',
    category: {
      key: 'Search',
      name: '搜索',
    },
  },
  {
    id: 3,
    name: 'DeepSeek',
    linkUrl: 'https://deepseek.com/',
    category: {
      key: 'LLM',
      name: '大语言模型',
    },
  },
  {
    id: 4,
    name: 'Monica',
    linkUrl: 'https://monica.im/',
    category: {
      key: 'Extension',
      name: '扩展',
    },
  },
  {
    id: 5,
    name: 'MarsCode',
    linkUrl: 'https://www.marscode.com/',
    category: {
      key: 'Coding',
      name: '编码',
    },
  },
  {
    id: 6,
    name: 'Cline',
    linkUrl: 'https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev',
    category: {
      key: 'Coding',
      name: '编码',
    },
  },
  {
    id: 7,
    name: 'Roo Code / Roo Cline',
    linkUrl: 'https://github.com/RooVetGit/Roo-Cline',
    category: {
      key: 'Coding',
      name: '编码',
    },
  },
  {
    id: 8,
    name: 'Deepseek Chat',
    linkUrl: 'https://chat.deepseek.com/',
    category: {
      key: 'Chat',
      name: '聊天',
    },
  },
]
