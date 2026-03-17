'use client'
import { useState, useRef, useEffect } from 'react'
import { SvgFan } from '@/components/Icons'

interface MusicPlayerProps {
  autoPlay?: boolean
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.35)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hasAutoPlayed = useRef(false)

  useEffect(() => {
    const audio = new Audio('/audio/background-music.mp3')
    audio.loop = true
    audio.volume = volume
    audioRef.current = audio
    return () => { audio.pause(); audio.src = '' }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  // Auto-play khi intro hoàn thành (user đã tương tác → browser cho phép)
  useEffect(() => {
    if (autoPlay && !hasAutoPlayed.current && audioRef.current) {
      hasAutoPlayed.current = true
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch(() => {/* browser blocked, user tự bật */})
    }
  }, [autoPlay])

  const toggle = async () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setPlaying(true)
      } catch {
        // autoplay blocked
      }
    }
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
    }}>
      {/* Volume slider - chỉ hiện khi đang phát */}
      {playing && (
        <div style={{
          background: 'rgba(253,246,227,0.97)',
          border: '1px solid var(--gold)',
          borderRadius: '20px',
          padding: '8px 12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          boxShadow: '0 4px 16px rgba(44,36,22,0.2)',
        }}>
          <span style={{ fontSize: '10px', color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>âm lượng</span>
          <input
            type="range"
            min={0} max={1} step={0.05}
            value={volume}
            onChange={e => setVolume(Number(e.target.value))}
            style={{ width: '60px', accentColor: 'var(--lacquer-red)', cursor: 'pointer' }}
          />
        </div>
      )}

      {/* Paper Fan Button */}
      <button
        onClick={toggle}
        title={playing ? 'Tắt nhạc' : 'Bật nhạc'}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          border: '2px solid var(--gold)',
          background: playing
            ? 'linear-gradient(135deg, var(--lacquer-red), var(--lacquer-red-light))'
            : 'linear-gradient(135deg, var(--cream), var(--parchment))',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(44,36,22,0.3)',
            transition: 'all 0.3s',
          animation: playing ? 'rotate-slow 8s linear infinite' : 'none',
        }}
      >
        <SvgFan size={24}
          color={playing ? 'var(--gold-shine)' : 'var(--lacquer-red)'} />
      </button>
      <span style={{
        fontSize: '9px',
        color: 'var(--ink-light)',
        fontFamily: 'var(--font-body)',
        background: 'rgba(253,246,227,0.92)',
        padding: '2px 6px',
        borderRadius: '8px',
        border: '1px solid var(--parchment-dark)',
      }}>
        {playing ? 'Đang phát' : 'Nhạc nền'}
      </span>
    </div>
  )
}
