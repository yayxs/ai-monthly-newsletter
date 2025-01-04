'use client'

import { useEffect, useState } from 'react'

export function useViews() {
  const [views, setViews] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const incrementViews = async () => {
      try {
        const response = await fetch('/api/views', { method: 'POST' })
        const data = await response.json()
        setViews(data.views)
      } catch (error) {
        console.error('Failed to increment views:', error)
      } finally {
        setLoading(false)
      }
    }

    incrementViews()
  }, [])

  return { views, loading }
}
