'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import EnvelopeIntro from './EnvelopeIntro'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import CountdownSection from './CountdownSection'
import LoveStoryTimeline from './LoveStoryTimeline'
import CoupleMessage from './CoupleMessage'
import WeddingDetails from './WeddingDetails'
import LamourAd from './LamourAd'
import Footer from './Footer'
import MusicPlayer from './MusicPlayer'
import FloatingPetals from './FloatingPetals'

const PhotoAlbum = dynamic(() => import('./PhotoAlbum'), { ssr: false })
const Guestbook = dynamic(() => import('./Guestbook'), { ssr: false })
const LixiBox = dynamic(() => import('./LixiBox'), { ssr: false })
const MiniGame = dynamic(() => import('./MiniGame'), { ssr: false })

interface MainContentProps {
  guestName: string | null
}

export default function MainContent({ guestName }: MainContentProps) {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <MusicPlayer autoPlay={introComplete} />
      <FloatingPetals />
      {!introComplete && (
        <EnvelopeIntro guestName={guestName} onComplete={() => setIntroComplete(true)} />
      )}
      <div style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <NavBar />
        <main>
          <HeroSection guestName={guestName} />
          <CountdownSection />
          <LoveStoryTimeline />
          <CoupleMessage />
          <PhotoAlbum />
          <WeddingDetails />
          <MiniGame />
          <LixiBox />
          <Guestbook />
          <LamourAd />
          <Footer />
        </main>
      </div>
    </>
  )
}
