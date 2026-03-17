'use client'
import { motion } from 'framer-motion'
import { SiTiktok, SiInstagram, SiFacebook } from 'react-icons/si'
import { FiGlobe } from 'react-icons/fi'
import { weddingData } from '@/data/weddingData'

const socialLinks = [
  {
    key: 'web',
    href: weddingData.socialLinks.website,
    label: 'Website',
    Icon: FiGlobe,
  },
  {
    key: 'tiktok',
    href: weddingData.socialLinks.tiktok,
    label: 'TikTok',
    Icon: SiTiktok,
  },
  {
    key: 'instagram',
    href: weddingData.socialLinks.instagram,
    label: 'Instagram',
    Icon: SiInstagram,
  },
  {
    key: 'facebook',
    href: weddingData.socialLinks.facebook,
    label: 'Facebook',
    Icon: SiFacebook,
  },
]

export default function LamourAd() {
  return (
    <section style={{
      background: 'linear-gradient(160deg, #1B0A08, #3D1010, #1B0A08)',
      padding: 'clamp(40px, 6vw, 64px) 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background ornament */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23B8860B' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative', zIndex: 1,
        }}
      >
        {/* Divider ornament */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '28px' }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,134,11,0.4))' }} />
          <span style={{ color: 'var(--gold)', fontSize: '18px' }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(184,134,11,0.4), transparent)' }} />
        </div>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '11px',
          color: 'rgba(253,246,227,0.4)', letterSpacing: '3px',
          textTransform: 'uppercase', marginBottom: '14px',
        }}>
          Thiệp Cưới Online Được Tạo Bởi
        </p>

        <a
          href={weddingData.socialLinks.website}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <h3 style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(32px, 7vw, 52px)',
            color: 'var(--gold-shine)',
            marginBottom: '10px',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.8')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            l&apos;amour
          </h3>
        </a>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 'clamp(12px, 2vw, 14px)',
          color: 'rgba(253,246,227,0.55)', fontStyle: 'italic',
          marginBottom: '36px', lineHeight: 1.8,
        }}>
          Tạo thiệp cưới online độc đáo, hiện đại và đầy sáng tạo<br />
          cho ngày đặc biệt nhất của bạn
        </p>

        {/* Social icon buttons */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {socialLinks.map(({ key, href, label, Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: 'rgba(253,246,227,0.5)',
                transition: 'color 0.25s, transform 0.25s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = 'var(--gold-shine)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(253,246,227,0.5)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: '48px', height: '48px',
                borderRadius: '50%',
                border: '1px solid rgba(184,134,11,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px',
                transition: 'border-color 0.25s, background 0.25s',
              }}>
                <Icon size={20} />
              </div>
              {/* Label */}
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}>
                {label}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
