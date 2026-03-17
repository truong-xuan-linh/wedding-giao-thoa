'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { weddingData } from '@/data/weddingData'
import { SvgLotus, SvgPin } from '@/components/Icons'

export default function CoupleMessage() {
  const [active, setActive] = useState<'groom' | 'bride'>('groom')

  const person = active === 'groom' ? weddingData.groom : weddingData.bride
  const message = active === 'groom' ? weddingData.groomMessage : weddingData.brideMessage

  return (
    <section className="section-base" style={{
      background: 'linear-gradient(135deg, #1B0A08 0%, #3D1010 50%, #1B0A08 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 5 L35 25 L55 25 L40 37 L45 57 L30 45 L15 57 L20 37 L5 25 L25 25 Z' fill='none' stroke='%23B8860B' stroke-width='0.5' opacity='0.08'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '18px', color: 'var(--gold)', marginBottom: '8px' }}>
            Từ Trái Tim Chúng Tôi
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 5vw, 42px)',
            fontStyle: 'italic',
            color: 'var(--cream)',
            marginBottom: '4px',
          }}>
            Thông Điệp Yêu Thương
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '16px 0 24px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,134,11,0.5))' }} />
            <SvgLotus size={20} color="var(--gold)" />
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(184,134,11,0.5), transparent)' }} />
          </div>
        </motion.div>

        {/* Toggle tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0', marginBottom: '40px' }}>
          {(['groom', 'bride'] as const).map(role => (
            <button
              key={role}
              onClick={() => setActive(role)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(12px, 2vw, 14px)',
                fontStyle: 'italic',
                padding: '10px 32px',
                border: '1px solid rgba(184,134,11,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: active === role
                  ? 'linear-gradient(135deg, var(--lacquer-red), var(--lacquer-red-light))'
                  : 'transparent',
                color: active === role ? 'var(--gold-shine)' : 'rgba(253,246,227,0.6)',
                letterSpacing: '1px',
              }}
            >
              {role === 'groom' ? `♠ ${weddingData.groom.shortName}` : `♥ ${weddingData.bride.shortName}`}
            </button>
          ))}
        </div>

        {/* Message Card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
            gap: '40px',
            background: 'rgba(253,246,227,0.05)',
            border: '1px solid rgba(184,134,11,0.3)',
            padding: 'clamp(20px, 4vw, 40px)',
            position: 'relative',
          }}
        >
          {/* Corner ornaments */}
          {[['top','left'],['top','right'],['bottom','left'],['bottom','right']].map(([v,h], i) => (
            <div key={i} style={{
              position: 'absolute',
              [v]: '8px', [h]: '8px',
              width: '16px', height: '16px',
              borderTop: v === 'top' ? '1px solid rgba(184,134,11,0.4)' : 'none',
              borderBottom: v === 'bottom' ? '1px solid rgba(184,134,11,0.4)' : 'none',
              borderLeft: h === 'left' ? '1px solid rgba(184,134,11,0.4)' : 'none',
              borderRight: h === 'right' ? '1px solid rgba(184,134,11,0.4)' : 'none',
            }} />
          ))}

          {/* Photo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '130%',
              border: '3px solid rgba(184,134,11,0.4)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}>
              <Image
                src={person.photo}
                alt={person.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 'clamp(16px, 3vw, 22px)',
                color: 'var(--gold-shine)',
              }}>{person.shortName}</p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                color: 'rgba(253,246,227,0.5)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}>{person.role}</p>
            </div>
          </div>

          {/* Message */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 2vw, 16px)',
              color: 'rgba(253,246,227,0.85)',
              lineHeight: 2,
              fontStyle: 'italic',
              whiteSpace: 'pre-line',
              padding: '20px',
              background: 'rgba(0,0,0,0.2)',
              borderLeft: '3px solid var(--gold)',
            }}>
              {message}
            </div>
          </div>
        </motion.div>

        {/* Family info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          {[weddingData.groom, weddingData.bride].map((p, i) => (
            <div key={i} style={{
              background: 'rgba(253,246,227,0.04)',
              border: '1px solid rgba(184,134,11,0.2)',
              padding: '20px',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'var(--font-accent)', fontSize: '16px', color: 'var(--gold)', marginBottom: '12px' }}>
                {p.shortName}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(253,246,227,0.6)', lineHeight: 2 }}>
                Con trai/gái của<br />
                <span style={{ color: 'rgba(253,246,227,0.8)' }}>{p.family.father}</span><br />
                <span style={{ color: 'rgba(253,246,227,0.8)' }}>{p.family.mother}</span><br />
                <span style={{ color: 'rgba(184,134,11,0.6)', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <SvgPin size={11} color="rgba(184,134,11,0.6)" />{p.family.address}
                </span>
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Responsive grid fix */}
      <style>{`
        @media (max-width: 600px) {
          .couple-msg-grid { grid-template-columns: 1fr !important; }
          .family-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
