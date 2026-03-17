'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Phase = 'closed' | 'opening' | 'open'

export default function LixiBox() {
  const [phase, setPhase] = useState<Phase>('closed')
  const [showConfetti, setShowConfetti] = useState(false)

  const openEnvelope = () => {
    if (phase !== 'closed') return
    setPhase('opening')
    setTimeout(() => {
      setPhase('open')
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }, 1200)
  }

  const reset = () => setPhase('closed')

  // Simple QR code mock pattern
  const qrPattern = [
    [1,1,1,0,1,0,1,1,1],
    [1,0,1,0,0,0,1,0,1],
    [1,0,1,0,1,0,1,0,1],
    [1,0,1,0,0,0,1,0,1],
    [1,1,1,0,1,0,1,1,1],
    [0,0,0,0,0,0,0,0,0],
    [1,1,0,1,0,1,1,1,0],
    [0,1,0,0,1,0,0,0,1],
    [1,1,1,0,0,1,1,0,1],
  ]

  return (
    <section className="section-base" style={{
      background: 'linear-gradient(160deg, #3D0F0F 0%, #1B0A08 50%, #3D0F0F 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Confetti explosion */}
      {showConfetti && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${30 + Math.random() * 40}%`,
              top: '40%',
              fontSize: `${16 + Math.random() * 16}px`,
              animation: `petal-fall ${1.5 + Math.random() * 1.5}s ${Math.random() * 0.5}s ease-out forwards`,
            }}>
              {['🌸','✨','🎊','🏮','🌺','💛'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      {/* Background gold pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect x='18' y='2' width='4' height='36' fill='%23B8860B' opacity='0.05'/%3E%3Crect x='2' y='18' width='36' height='4' fill='%23B8860B' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '18px', color: 'var(--gold)', marginBottom: '8px' }}>
            Tặng Lời Chúc Mừng
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(24px,5vw,42px)', color: 'var(--cream)', marginBottom: '8px',
          }}>
            Lì Xì Số
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '13px',
            color: 'rgba(253,246,227,0.55)', fontStyle: 'italic',
          }}>
            Bóc phong bì để nhận lời chúc đặc biệt từ chúng tôi
          </p>
        </motion.div>

        {/* The Red Envelope */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            style={{ position: 'relative', cursor: phase === 'closed' ? 'pointer' : 'default' }}
            onClick={openEnvelope}
          >
            {/* Envelope wrapper */}
            <div style={{
              width: 'clamp(200px, 40vw, 280px)',
              height: 'clamp(300px, 60vw, 400px)',
              position: 'relative',
              perspective: '800px',
            }}>
              {/* Envelope body */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(160deg, #A80000, #7A0000, #C00000)',
                border: '2px solid rgba(184,134,11,0.7)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,100,100,0.2)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}>
                {/* Gold pattern on envelope */}
                <div style={{
                  position: 'absolute', inset: '12px',
                  border: '1px solid rgba(184,134,11,0.3)',
                  borderRadius: '2px',
                }} />
                {/* Center emblem */}
                {phase === 'closed' && (
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px', height: '80px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,160,23,0.9), rgba(140,90,0,0.7))',
                    border: '2px solid rgba(255,215,0,0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '36px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                  }}>
                    🎁
                  </div>
                )}

                {/* Flap animation */}
                <AnimatePresence>
                  {phase === 'opening' && (
                    <motion.div
                      initial={{ rotateX: 0, originY: 0 }}
                      animate={{ rotateX: -180 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      style={{
                        position: 'absolute', top: 0, left: 0, right: 0,
                        height: '50%',
                        background: 'linear-gradient(170deg, #C00000, #900000)',
                        transformOrigin: 'top center',
                        borderBottom: '1px solid rgba(184,134,11,0.3)',
                        clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                        zIndex: 5,
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* QR Content sliding out */}
              <AnimatePresence>
                {phase === 'open' && (
                  <motion.div
                    initial={{ y: '50%', opacity: 0 }}
                    animate={{ y: '-15%', opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
                    style={{
                      position: 'absolute', left: '10%', right: '10%',
                      bottom: '10%',
                      background: 'linear-gradient(160deg, var(--cream), var(--parchment))',
                      border: '1px solid var(--gold)',
                      padding: '20px',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                      zIndex: 10,
                    }}
                  >
                    <p style={{
                      fontFamily: 'var(--font-accent)',
                      fontSize: 'clamp(10px, 1.8vw, 13px)',
                      color: 'var(--lacquer-red)',
                      textAlign: 'center',
                      marginBottom: '12px',
                      lineHeight: 1.6,
                    }}>
                      Quét QR để<br />gửi lời chúc mừng
                    </p>

                    {/* QR Code Mock */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(9, 1fr)',
                      gap: '2px',
                      padding: '8px',
                      background: 'white',
                      margin: '0 auto 12px',
                      width: 'fit-content',
                    }}>
                      {qrPattern.flat().map((cell, i) => (
                        <div key={i} style={{
                          width: '10px', height: '10px',
                          background: cell ? '#1a1a1a' : 'white',
                        }} />
                      ))}
                    </div>

                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '10px',
                      color: 'var(--ink-light)',
                      textAlign: 'center',
                      fontStyle: 'italic',
                    }}>
                      Minh Quân &amp; Lan Anh · 15.06.2026
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            {phase === 'closed' && (
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--gold)',
                  textAlign: 'center',
                  marginTop: '20px',
                  letterSpacing: '1px',
                  fontStyle: 'italic',
                }}
              >
                ✦ Nhấn để bóc phong bì ✦
              </motion.p>
            )}
          </motion.div>

          {/* Reset button */}
          {phase === 'open' && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              onClick={reset}
              className="btn-lacquer"
              style={{ marginTop: '200px', fontSize: '12px' }}
            >
              🔄 Đóng lại
            </motion.button>
          )}
        </div>
      </div>
    </section>
  )
}
