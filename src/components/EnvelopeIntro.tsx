'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SvgLantern, SvgDoubleHappiness } from '@/components/Icons'

interface EnvelopeIntroProps {
  guestName: string | null
  onComplete: () => void
}

type Phase = 'sealed' | 'hint' | 'opening' | 'open' | 'exiting'

export default function EnvelopeIntro({ guestName, onComplete }: EnvelopeIntroProps) {
  const [phase, setPhase] = useState<Phase>('sealed')
  const [show, setShow] = useState(true)

  // Gợi ý nhẹ sau 2.5s
  useEffect(() => {
    const t = setTimeout(() => {
      setPhase(p => p === 'sealed' ? 'hint' : p)
    }, 2500)
    return () => clearTimeout(t)
  }, [])

  const handleClick = () => {
    if (phase === 'sealed' || phase === 'hint') {
      setPhase('opening')
      // Sau khi flap mở xong → chuyển sang 'open'
      setTimeout(() => setPhase('open'), 1000)
    } else if (phase === 'open') {
      setPhase('exiting')
      setTimeout(() => {
        setShow(false)
        onComplete()
      }, 700)
    }
  }

  if (!show) return null

  const isOpening = phase === 'opening' || phase === 'open'

  return (
    <AnimatePresence>
      <motion.div
        key="envelope-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: phase === 'exiting' ? 0 : 1 }}
        transition={{ duration: 0.7 }}
        onClick={handleClick}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #1B0A08 0%, #3D0F0F 40%, #5C1A1A 70%, #1B0A08 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Background Trống Đồng Pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Ccircle cx='100' cy='100' r='90' fill='none' stroke='%23B8860B' stroke-width='1' opacity='0.15'/%3E%3Ccircle cx='100' cy='100' r='75' fill='none' stroke='%23B8860B' stroke-width='0.5' opacity='0.1'/%3E%3Ccircle cx='100' cy='100' r='60' fill='none' stroke='%23B8860B' stroke-width='1' opacity='0.15'/%3E%3Ccircle cx='100' cy='100' r='40' fill='none' stroke='%23B8860B' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.5,
          animation: 'rotate-slow 60s linear infinite',
        }} />

        {/* Đèn lồng bay lên */}
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${10 + i * 16}%`,
            bottom: '8%',
            animation: `float-up ${8 + i * 2}s ${i * 1.5}s ease-in-out infinite`,
            opacity: 0.45,
            pointerEvents: 'none',
          }}>
            <SvgLantern size={28}
              color={['#C0392B','#E67E22','#8E44AD','#1ABC9C','#D4A017','#A80000'][i]} />
          </div>
        ))}

        {/* L'Amour branding */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            position: 'absolute', top: '24px',
            fontFamily: 'var(--font-accent)',
            fontSize: '14px',
            color: 'rgba(212,160,23,0.65)',
            letterSpacing: '2px',
          }}
        >
          ✦ l&apos;amour ✦
        </motion.div>

        {/* Tên khách mời */}
        {guestName && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(13px, 2.5vw, 16px)',
              color: 'rgba(253,246,227,0.7)',
              marginBottom: '16px',
              letterSpacing: '1px',
            }}
          >
            Kính gửi <span style={{ color: 'var(--gold-shine)', fontStyle: 'italic' }}>{guestName}</span>
          </motion.p>
        )}

        {/* ===== PHONG BÌ ===== */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 90, damping: 18 }}
          style={{
            position: 'relative',
            width: 'clamp(260px, 46vw, 420px)',
            marginBottom: '32px',
          }}
        >
          {/* Thân phong bì - cần perspective để flap 3D hoạt động */}
          <div style={{
            width: '100%',
            paddingBottom: '65%',
            position: 'relative',
            background: 'linear-gradient(160deg, #8B1A1A 0%, #A82020 50%, #7A1515 100%)',
            border: '2px solid var(--gold)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,215,0,0.25)',
            perspective: '700px',
            overflow: 'visible',
          }}>
            {/* Viền vàng trang trí */}
            <div style={{
              position: 'absolute', inset: '8px',
              border: '1px solid rgba(184,134,11,0.35)',
              pointerEvents: 'none', zIndex: 1,
            }} />

            {/* Đường gấp chéo (trang trí) */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom right, transparent 49.5%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.12) 50.5%, transparent 51%)',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom left, transparent 49.5%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.12) 50.5%, transparent 51%)',
            }} />

            {/* ===== NẮP PHONG BÌ (luôn render, animate bằng rotateX) ===== */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ rotateX: isOpening ? -165 : 0 }}
              transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '55%',
                background: 'linear-gradient(170deg, #9B1C1C 0%, #8B1515 60%, #7A1010 100%)',
                transformOrigin: 'top center',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                zIndex: 3,
                borderBottom: '1px solid rgba(184,134,11,0.25)',
              }}
            />

            {/* ===== CON DẤU SÁP (bọc trong div flex để center tuyệt đối) ===== */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 4,
              pointerEvents: 'none',
            }}>
              <motion.div
                animate={
                  phase === 'opening'
                    ? { scale: 0, opacity: 0 }
                    : phase === 'hint'
                    ? { scale: [1, 1.12, 1, 1.08, 1] }
                    : { scale: [1, 1.04, 1] }
                }
                transition={
                  phase === 'opening'
                    ? { duration: 0.35, ease: 'easeIn' }
                    : { repeat: Infinity, duration: phase === 'hint' ? 1.5 : 2.5, ease: 'easeInOut' }
                }
                style={{
                  width: '68px', height: '68px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, #C5950A, #7A5C00)',
                  border: '3px solid rgba(212,160,23,0.55)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.45), inset 0 2px 4px rgba(255,255,255,0.15)',
                  }}
              >
                <SvgDoubleHappiness size={34} color="var(--gold-shine)" />
              </motion.div>
            </div>
          </div>

          {/* ===== THIỆP BÊN TRONG trượt ra khi mở ===== */}
          <AnimatePresence>
            {phase === 'open' && (
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: -70, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ delay: 0.15, duration: 0.65, ease: [0.2, 0.8, 0.4, 1] }}
                style={{
                  position: 'absolute',
                  top: 0, left: '8%', right: '8%',
                  background: 'linear-gradient(160deg, var(--cream), var(--parchment))',
                  border: '1px solid var(--gold)',
                  padding: '18px 20px',
                  textAlign: 'center',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
                  zIndex: 2,
                }}
              >
                {/* Corner ornaments */}
                <div style={{ position: 'absolute', top: '6px', left: '6px', width: '10px', height: '10px', borderTop: '1px solid rgba(184,134,11,0.5)', borderLeft: '1px solid rgba(184,134,11,0.5)' }} />
                <div style={{ position: 'absolute', top: '6px', right: '6px', width: '10px', height: '10px', borderTop: '1px solid rgba(184,134,11,0.5)', borderRight: '1px solid rgba(184,134,11,0.5)' }} />
                <div style={{ position: 'absolute', bottom: '6px', left: '6px', width: '10px', height: '10px', borderBottom: '1px solid rgba(184,134,11,0.5)', borderLeft: '1px solid rgba(184,134,11,0.5)' }} />
                <div style={{ position: 'absolute', bottom: '6px', right: '6px', width: '10px', height: '10px', borderBottom: '1px solid rgba(184,134,11,0.5)', borderRight: '1px solid rgba(184,134,11,0.5)' }} />

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(11px, 2vw, 13px)',
                  color: 'var(--ink-light)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}>
                  Trân trọng kính mời
                </p>
                <p style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: 'clamp(18px, 4vw, 26px)',
                  color: 'var(--lacquer-red)',
                  lineHeight: 1.3,
                  marginBottom: '8px',
                }}>
                  Minh Quân &amp; Lan Anh
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(11px, 1.8vw, 13px)',
                  color: 'var(--wood-light)',
                  letterSpacing: '3px',
                  fontStyle: 'italic',
                }}>
                  15 · 06 · 2026
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(11px, 1.8vw, 13px)',
            color: 'rgba(212,160,23,0.8)',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
          }}
        >
          {phase === 'open'
            ? '✦ Nhấn để bước vào ✦'
            : phase === 'hint'
            ? '✦ Nhấn vào đây để mở ✦'
            : '✦ Nhấn để mở thiệp ✦'}
        </motion.div>

        {/* Chữ ký dưới */}
        <div style={{
          position: 'absolute', bottom: '20px',
          fontFamily: 'var(--font-body)',
          fontSize: '10px',
          color: 'rgba(253,246,227,0.3)',
          letterSpacing: '1px',
        }}>
          Thiệp cưới được tạo bởi l&apos;amour
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
