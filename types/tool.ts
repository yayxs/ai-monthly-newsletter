export type ToolCategory = 'llm' | 'code-editor' | 'search-engine' | 'ai-assistant'

export interface Tool {
  id: number
  name: string
  description: string
  officialWebsiteLink: string
  company: string
  companyLink?: string
  isDomestic: boolean
  logo?: string
  category: {
    key: ToolCategory
    name: string
  }
  companyInfo?: {
    foundedDate: string
    location: string
    type: string
  }
  releaseDate: string
}
