export type ToolCategory = 'Chat' | 'Coding' | 'Search' | 'Extension' | 'LLM'

export interface Tool {
  id: number
  name: string
  linkUrl: string
  category: {
    key: ToolCategory
    name: string
  }
}
