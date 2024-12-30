import { Sidebar } from '../components/Sidebar'
import { ToolGrid } from '../components/ToolGrid'

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="lg:ml-64 flex-1 min-h-screen p-4 lg:p-8 pt-20 lg:pt-8">
        <h2 className="text-2xl font-semibold mb-6 text-white neon-glow">所有工具</h2>
        <ToolGrid />
      </main>
    </div>
  )
}