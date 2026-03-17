'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { weddingData } from '@/data/weddingData'

export default function LoveStoryTimeline() {
  return (
    <section id="story" className="section-base" style={{
      background: 'linear-gradient(180deg, var(--cream) 0%, #EFE4C8 50%, var(--cream) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative side patterns */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '40px',
        backgroundImage: `repeating-linear-gradient(180deg, transparent, transparent 20px, rgba(184,134,11,0.1) 20px, rgba(184,134,11,0.1) 21px)`,
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '40px',
        backgroundImage: `repeating-linear-gradient(180deg, transparent, transparent 20px, rgba(184,134,11,0.1) 20px, rgba(184,134,11,0.1) 21px)`,
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(14px,2.5vw,18px)', color: 'var(--gold)', marginBottom: '8px' }}>
            Hành Trình Của Chúng Tôi
          </p>
          <h2 className="section-title-vn">Chuyện Tình Yêu</h2>
          <div className="lotus-divider"><span>🌺</span></div>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Center line */}
          <div style={{
            position: 'absolute',
            left: '50%', top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, transparent, var(--gold) 10%, var(--gold) 90%, transparent)',
            transform: 'translateX(-50%)',
          }} />

          {weddingData.loveStory.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '56px',
                position: 'relative',
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '50%', top: '24px',
                width: '16px', height: '16px',
                borderRadius: '50%',
                background: 'var(--lacquer-red)',
                border: '3px solid var(--gold)',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                boxShadow: '0 0 10px rgba(184,134,11,0.4)',
              }} />

              {/* Card */}
              <div style={{
                width: '44%',
                background: 'var(--cream)',
                border: '1px solid rgba(184,134,11,0.3)',
                boxShadow: '0 4px 20px rgba(44,36,22,0.1)',
                overflow: 'hidden',
                position: 'relative',
              }}>
                {/* Photo */}
                <div style={{ position: 'relative', width: '100%', paddingBottom: '60%' }}>
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Year badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: i % 2 === 0 ? 'auto' : '12px',
                    right: i % 2 === 0 ? '12px' : 'auto',
                    background: 'rgba(122,21,21,0.9)',
                    border: '1px solid var(--gold)',
                    padding: '4px 12px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: 'var(--gold-shine)',
                    letterSpacing: '2px',
                  }}>
                    {item.year}
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: '16px 20px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '20px' }}>{item.icon}</span>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(14px, 2vw, 17px)',
                      fontStyle: 'italic',
                      color: 'var(--lacquer-red)',
                    }}>{item.title}</h3>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(12px, 1.5vw, 14px)',
                    color: 'var(--ink-light)',
                    lineHeight: 1.7,
                  }}>{item.description}</p>
                </div>
                {/* Corner ornaments */}
                <div style={{ position: 'absolute', top: '6px', left: '6px', width: '10px', height: '10px', borderTop: '1px solid rgba(184,134,11,0.4)', borderLeft: '1px solid rgba(184,134,11,0.4)' }} />
                <div style={{ position: 'absolute', bottom: '6px', right: '6px', width: '10px', height: '10px', borderBottom: '1px solid rgba(184,134,11,0.4)', borderRight: '1px solid rgba(184,134,11,0.4)' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile style */}
      <style>{`
        @media (max-width: 640px) {
          .timeline-center-line { display: none; }
        }
      `}</style>
    </section>
  )
}
