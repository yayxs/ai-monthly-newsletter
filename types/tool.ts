export type ToolCategory = 'Chat'

export interface Tool {
  id: number
  name: string
  linkUrl: string
  category: {
    key: ToolCategory
    name: string
  }
}
