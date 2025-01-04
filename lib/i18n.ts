export type Language = 'zh' | 'en'

export const languages = [
  { id: 'zh', name: '中文' },
  { id: 'en', name: 'English' },
] as const

export const translations = {
  zh: {
    switchTheme: '切换主题',
    switchLanguage: '切换语言',
    domestic: '国内产品',
    foreign: '国外产品',
  },
  en: {
    switchTheme: 'Switch Theme',
    switchLanguage: 'Switch Language',
    domestic: 'Domestic Product',
    foreign: 'Foreign Product',
  },
} as const
