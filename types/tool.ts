export type ToolCategory = 'Chat' | 'Search' | 'LLM' | 'Coding' | 'Extension' | 'Company' | 'API'

export interface Tool {
  name: string
  linkUrl: string
  category: {
    key: string
    name: string
  }
}
