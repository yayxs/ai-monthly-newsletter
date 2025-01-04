import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { ToolGrid } from '@/components/ToolGrid'

export default function Home() {
  return (
    <>
      <Logo />
      <Header />
      <main className='container mx-auto px-4 py-4'>
        <ToolGrid />
      </main>
      <Footer />
    </>
  )
}
