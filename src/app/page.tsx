import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { MainCards } from '@/components/MainCards'
import { ChatbotWidget } from '@/components/ChatbotWidget'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      <HeroSection />
      <MainCards />
      <ChatbotWidget />
    </main>
  )
}