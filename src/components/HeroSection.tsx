'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  guestName: string | null
}

export default function HeroSection({ guestName }: HeroSectionProps) {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const layer1Ref = useRef<HTMLDivElement>(null)
  const layer2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translateY(${scrollY * 0.3}px)`
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translateY(${scrollY * 0.15}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={parallaxRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* BG Image Layer */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/16.webp"
          alt="Hero background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(27,10,8,0.65) 0%, rgba(44,36,22,0.5) 50%, rgba(27,10,8,0.8) 100%)',
        }} />
      </div>

      {/* Parallax Layer 1: Trống Đồng large pattern */}
      <div ref={layer1Ref} style={{
        position: 'absolute', inset: 0, zIndex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: 'clamp(400px, 70vw, 900px)',
          height: 'clamp(400px, 70vw, 900px)',
          borderRadius: '50%',
          border: '1px solid rgba(184,134,11,0.2)',
          position: 'relative',
          animation: 'rotate-slow 80s linear infinite',
        }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: '8px', height: '8px',
              borderRadius: '50%',
              background: 'rgba(184,134,11,0.4)',
              transform: `rotate(${i * 30}deg) translateX(${300}px) translateY(-50%)`,
              transformOrigin: 'left center',
            }} />
          ))}
          {/* Inner circles */}
          {[0.75, 0.55, 0.35].map((r, i) => (
            <div key={i} style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: `${r * 100}%`,
              height: `${r * 100}%`,
              borderRadius: '50%',
              border: '1px solid rgba(184,134,11,0.15)',
              transform: 'translate(-50%, -50%)',
            }} />
          ))}
        </div>
      </div>

      {/* Parallax Layer 2: Scattered lotus ornaments */}
      <div ref={layer2Ref} style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
      }}>
        {[
          { top: '15%', left: '8%', size: 40, delay: 0 },
          { top: '20%', right: '10%', size: 35, delay: 1 },
          { top: '70%', left: '5%', size: 30, delay: 2 },
          { top: '75%', right: '8%', size: 38, delay: 1.5 },
        ].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute', ...pos as React.CSSProperties,
            fontSize: pos.size,
            opacity: 0.3,
            animation: `float-gentle 4s ${pos.delay}s ease-in-out infinite`,
          }}>
            🪷
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        textAlign: 'center',
        padding: '120px 24px 80px',
        maxWidth: '800px',
      }}>
        {guestName && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(13px, 2vw, 16px)',
              color: 'rgba(253,246,227,0.8)',
              letterSpacing: '2px',
              marginBottom: '16px',
            }}
          >
            Kính mời <span style={{ color: 'var(--gold-shine)', fontStyle: 'italic' }}>{guestName}</span>
          </motion.p>
        )}

        {/* Vietnamese ornament top */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '16px', marginBottom: '24px',
          }}
        >
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,134,11,0.6))' }} />
          <span style={{ color: 'var(--gold)', fontSize: '20px' }}>🌺</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(184,134,11,0.6), transparent)' }} />
        </motion.div>

        {/* Couple names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(48px, 10vw, 96px)',
            lineHeight: 1.1,
            color: 'var(--cream)',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            marginBottom: '8px',
          }}
        >
          Minh Quân
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(14px, 2.5vw, 20px)',
            color: 'var(--gold)',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          &amp;
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(48px, 10vw, 96px)',
            lineHeight: 1.1,
            color: 'var(--cream)',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            marginBottom: '32px',
          }}
        >
          Lan Anh
        </motion.h1>

        {/* Date display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(122,21,21,0.6)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(184,134,11,0.5)',
            padding: '16px 40px',
            marginBottom: '40px',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            color: 'var(--gold-shine)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}>
            15 · 06 · 2026
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(11px, 1.5vw, 13px)',
            color: 'rgba(253,246,227,0.7)',
            letterSpacing: '1px',
            fontStyle: 'italic',
            marginTop: '4px',
          }}>
            Nhà Hàng Hoa Viên · Quận 1 · TP.HCM
          </span>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            color: 'rgba(253,246,227,0.5)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}>
            Cuộn để khám phá
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ color: 'rgba(184,134,11,0.6)', fontSize: '20px' }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5,
        height: '60px',
        background: 'linear-gradient(to bottom, transparent, var(--cream))',
      }} />
    </section>
  )
}
