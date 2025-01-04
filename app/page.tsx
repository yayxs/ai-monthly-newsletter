import React from 'react'
import { Header } from '../components/Header'
import { ToolGrid } from '../components/ToolGrid'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-4">
        <ToolGrid />
      </main>
    </>
  )
}
