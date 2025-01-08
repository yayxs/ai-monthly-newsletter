export interface LLMEvent {
  date: string
  model: string
  company: string
  parameters: string
  tokens: string
  description: string
}

export const llmEvents: LLMEvent[] = [
  {
    date: '2024-12-26',
    model: 'DeepSeek-V3',
    company: 'DeepSeek',
    parameters: '671B (37B activated)',
    tokens: '14.8T tokens',
    description: '为自研 MoE 模型'
  }
]
