'use client'
import { useEffect, useState } from 'react'

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  rotation: number
  emoji: string
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const items = ['🌸', '🌺', '🪷', '🌼', '✨']
    const generated = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 10,
      size: 12 + Math.random() * 10,
      rotation: Math.random() * 360,
      emoji: items[Math.floor(Math.random() * items.length)],
    }))
    setPetals(generated)
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden',
    }}>
      {petals.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: '-30px',
            fontSize: p.size,
            opacity: 0.5,
            animation: `petal-fall ${p.duration}s ${p.delay}s linear infinite`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  )
}
