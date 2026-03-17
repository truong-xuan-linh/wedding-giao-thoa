'use client'
import { motion } from 'framer-motion'
import { weddingData } from '@/data/weddingData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: '#0D0408',
      padding: 'clamp(40px, 6vw, 60px) 24px clamp(24px, 4vw, 40px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top ornament border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold-shine) 50%, var(--gold) 70%, transparent)',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}
      >
        {/* Main names */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(32px, 7vw, 56px)',
            color: 'var(--gold-shine)',
            lineHeight: 1.2,
          }}>
            Minh Quân &amp; Lan Anh
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 2vw, 14px)',
            color: 'rgba(253,246,227,0.5)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginTop: '8px',
          }}>
            15 · 06 · 2026
          </p>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,134,11,0.3))' }} />
          <span style={{ color: 'var(--gold)', fontSize: '16px' }}>🌸</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(184,134,11,0.3), transparent)' }} />
        </div>

        {/* Quote */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(13px, 2vw, 15px)',
          color: 'rgba(253,246,227,0.55)',
          fontStyle: 'italic',
          lineHeight: 1.8,
          marginBottom: '32px',
        }}>
          &ldquo;Tình yêu không phải nhìn nhau, mà cùng nhìn về một hướng.&rdquo;<br />
          <span style={{ fontSize: '12px', color: 'rgba(253,246,227,0.35)', letterSpacing: '1px' }}>
            — Antoine de Saint-Exupéry
          </span>
        </p>

        {/* Venue summary */}
        <div style={{
          background: 'rgba(253,246,227,0.04)',
          border: '1px solid rgba(184,134,11,0.2)',
          padding: '16px 24px',
          marginBottom: '32px',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(11px, 1.8vw, 13px)',
            color: 'rgba(253,246,227,0.55)',
            lineHeight: 1.8,
          }}>
            📍 {weddingData.wedding.venue.name}<br />
            {weddingData.wedding.venue.address}<br />
            ⏰ {weddingData.wedding.time} · {weddingData.wedding.dateDisplay}
          </p>
        </div>

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none',
            border: '1px solid rgba(184,134,11,0.3)',
            color: 'rgba(253,246,227,0.5)',
            padding: '8px 20px',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            letterSpacing: '1px',
            marginBottom: '32px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.6)'
            ;(e.currentTarget as HTMLElement).style.color = 'var(--gold)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.3)'
            ;(e.currentTarget as HTMLElement).style.color = 'rgba(253,246,227,0.5)'
          }}
        >
          ↑ Lên Đầu Trang
        </button>

        {/* Copyright */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          color: 'rgba(253,246,227,0.25)',
          letterSpacing: '1px',
        }}>
          © {currentYear} Minh Quân &amp; Lan Anh · Thiết kế bởi{' '}
          <a
            href={weddingData.socialLinks.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(184,134,11,0.5)', textDecoration: 'none' }}
          >
            l&apos;amour
          </a>
        </p>
      </motion.div>
    </footer>
  )
}
