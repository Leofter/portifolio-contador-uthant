import { Navigation } from '@/components/Navigation'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/Hero'
import { IntroBanner } from '@/components/IntroBanner'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Portfolio } from '@/components/Portfolio'
import { Contact } from '@/components/Contact'

export default function Index() {
  return (
    <div className="min-h-screen bg-[#D7D7D7] text-black">
      <GrainOverlay />
      <Navigation />
      <main>
        <Hero />
        <IntroBanner />
        <About />
        <Skills />
        <Work />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}
