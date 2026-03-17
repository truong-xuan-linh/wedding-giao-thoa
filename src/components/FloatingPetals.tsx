'use client'
import { useEffect, useState } from 'react'
import { FloatingPetal } from '@/components/Icons'

const PETAL_COLORS = [
  'var(--lotus-pink)',
  'rgba(184,134,11,0.7)',
  'rgba(220,120,138,0.75)',
  'rgba(253,246,227,0.6)',
]

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  rotation: number
  type: number
  colorIdx: number
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 10,
      size: 14 + Math.random() * 10,
      rotation: Math.random() * 360,
      type: Math.floor(Math.random() * 4),
      colorIdx: Math.floor(Math.random() * PETAL_COLORS.length),
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
            opacity: 0.5,
            animation: `petal-fall ${p.duration}s ${p.delay}s linear infinite`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          <FloatingPetal type={p.type} size={p.size} color={PETAL_COLORS[p.colorIdx]} />
        </div>
      ))}
    </div>
  )
}
