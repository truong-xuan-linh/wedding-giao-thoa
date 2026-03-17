'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { weddingData } from '@/data/weddingData'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const [prev, setPrev] = useState(value)
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    if (prev !== value) {
      setFlip(true)
      const t = setTimeout(() => { setPrev(value); setFlip(false) }, 300)
      return () => clearTimeout(t)
    }
  }, [value, prev])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div style={{
        position: 'relative',
        width: 'clamp(64px, 14vw, 90px)',
        height: 'clamp(72px, 16vw, 100px)',
      }}>
        {/* Card back */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, #5C0A0A, #7A1515)',
          border: '1px solid rgba(184,134,11,0.5)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,215,0,0.2)',
          borderRadius: '4px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 7vw, 48px)',
          fontWeight: '700',
          color: 'var(--gold-shine)',
          textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          overflow: 'hidden',
        }}>
          {/* Horizontal split line */}
          <div style={{
            position: 'absolute',
            top: '50%', left: 0, right: 0,
            height: '1px',
            background: 'rgba(0,0,0,0.3)',
            zIndex: 2,
          }} />
          {/* Flip animation overlay */}
          {flip && (
            <motion.div
              initial={{ rotateX: 0, opacity: 1 }}
              animate={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute', inset: 0,
                background: 'rgba(122,21,21,0.8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 'clamp(28px, 7vw, 48px)',
                fontWeight: '700',
                color: 'var(--gold-shine)',
              }}
            >
              {String(prev).padStart(2, '0')}
            </motion.div>
          )}
          {String(value).padStart(2, '0')}
        </div>
        {/* Corner ornaments */}
        <div style={{
          position: 'absolute', top: '3px', left: '3px',
          width: '6px', height: '6px',
          borderTop: '1px solid rgba(184,134,11,0.4)',
          borderLeft: '1px solid rgba(184,134,11,0.4)',
        }} />
        <div style={{
          position: 'absolute', top: '3px', right: '3px',
          width: '6px', height: '6px',
          borderTop: '1px solid rgba(184,134,11,0.4)',
          borderRight: '1px solid rgba(184,134,11,0.4)',
        }} />
        <div style={{
          position: 'absolute', bottom: '3px', left: '3px',
          width: '6px', height: '6px',
          borderBottom: '1px solid rgba(184,134,11,0.4)',
          borderLeft: '1px solid rgba(184,134,11,0.4)',
        }} />
        <div style={{
          position: 'absolute', bottom: '3px', right: '3px',
          width: '6px', height: '6px',
          borderBottom: '1px solid rgba(184,134,11,0.4)',
          borderRight: '1px solid rgba(184,134,11,0.4)',
        }} />
      </div>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(10px, 1.8vw, 13px)',
        color: 'var(--gold)',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontStyle: 'italic',
      }}>
        {label}
      </span>
    </div>
  )
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calcTimeLeft(weddingData.wedding.date))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft(weddingData.wedding.date))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const isWeddingDay = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0

  return (
    <section id="countdown" className="section-base" style={{
      background: 'linear-gradient(160deg, var(--cream) 0%, var(--parchment) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='%23B8860B' stroke-width='0.5' opacity='0.1'/%3E%3Ccircle cx='40' cy='40' r='15' fill='none' stroke='%23B8860B' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            color: 'var(--gold)',
            marginBottom: '8px',
          }}>
            Đếm Ngược Đến Ngày Vui
          </p>
          <h2 className="section-title-vn" style={{ marginBottom: '4px' }}>
            Còn Bao Lâu Nữa?
          </h2>
          <div className="lotus-divider">
            <span>🪷</span>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(13px, 2vw, 15px)',
            color: 'var(--ink-light)',
            fontStyle: 'italic',
          }}>
            {weddingData.wedding.dateDisplay} · {weddingData.wedding.time}
          </p>
        </motion.div>

        {isWeddingDay ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '40px' }}
          >
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎉</div>
            <h3 style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(28px, 6vw, 48px)',
              color: 'var(--lacquer-red)',
            }}>
              Hôm nay là ngày cưới!
            </h3>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(12px, 3vw, 40px)',
              flexWrap: 'wrap',
            }}
          >
            {mounted && (
              <>
                <FlipUnit value={timeLeft.days} label="Ngày" />
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  color: 'var(--gold)',
                  alignSelf: 'flex-start',
                  marginTop: 'clamp(20px, 3vw, 30px)',
                  animation: 'pulse-soft 1s ease-in-out infinite',
                }}>:</div>
                <FlipUnit value={timeLeft.hours} label="Giờ" />
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  color: 'var(--gold)',
                  alignSelf: 'flex-start',
                  marginTop: 'clamp(20px, 3vw, 30px)',
                  animation: 'pulse-soft 1s ease-in-out infinite',
                }}>:</div>
                <FlipUnit value={timeLeft.minutes} label="Phút" />
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  color: 'var(--gold)',
                  alignSelf: 'flex-start',
                  marginTop: 'clamp(20px, 3vw, 30px)',
                  animation: 'pulse-soft 1s ease-in-out infinite',
                }}>:</div>
                <FlipUnit value={timeLeft.seconds} label="Giây" />
              </>
            )}
          </motion.div>
        )}

        {/* Lunar date */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: '40px',
            padding: '16px',
            background: 'rgba(122,21,21,0.06)',
            border: '1px solid rgba(184,134,11,0.2)',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 2vw, 14px)',
            color: 'var(--ink-light)',
            fontStyle: 'italic',
          }}>
            🌙 Âm lịch: {weddingData.wedding.lunarDate}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
