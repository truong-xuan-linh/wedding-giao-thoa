'use client'
import { motion } from 'framer-motion'
import { weddingData } from '@/data/weddingData'

// Elegant SVG icons — no emoji, phù hợp phong cách thiệp cưới truyền thống
const IconCalendar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
  </svg>
)
const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <polyline points="12 7 12 12 15 15"/>
  </svg>
)
const IconLocation = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.69 2 6 4.69 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.31-2.69-6-6-6z"/>
    <circle cx="12" cy="8" r="2"/>
  </svg>
)
const IconMap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
)
const IconParking = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
  </svg>
)
const IconDress = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6l2 5-5 3 5 10H7L12 11 7 8l2-5z"/>
  </svg>
)

const details = [
  {
    Icon: IconCalendar,
    title: 'Ngày Cưới',
    lines: [weddingData.wedding.dateDisplay, weddingData.wedding.lunarDate],
  },
  {
    Icon: IconClock,
    title: 'Giờ Tổ Chức',
    lines: [weddingData.wedding.time, 'Đón tiếp: 9:30 SA'],
  },
  {
    Icon: IconLocation,
    title: 'Địa Điểm',
    lines: [weddingData.wedding.venue.name, weddingData.wedding.venue.hall],
  },
  {
    Icon: IconMap,
    title: 'Địa Chỉ',
    lines: [weddingData.wedding.venue.address],
  },
  {
    Icon: IconParking,
    title: 'Đỗ Xe',
    lines: [weddingData.wedding.venue.parking],
  },
  {
    Icon: IconDress,
    title: 'Trang Phục',
    lines: [weddingData.wedding.dresscode],
  },
]

export default function WeddingDetails() {
  return (
    <section id="venue" className="section-base" style={{
      background: 'linear-gradient(160deg, var(--cream) 0%, var(--parchment) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Corner patterns */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(pos => (
        <div key={pos} style={{
          position: 'absolute',
          top: pos.includes('top') ? '16px' : 'auto',
          bottom: pos.includes('bottom') ? '16px' : 'auto',
          left: pos.includes('left') ? '16px' : 'auto',
          right: pos.includes('right') ? '16px' : 'auto',
          fontSize: '24px',
          opacity: 0.18,
          color: 'var(--gold)',
        }}>
          ✦
        </div>
      ))}

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(14px,2.5vw,18px)', color: 'var(--gold)', marginBottom: '8px' }}>
            Trân Trọng Kính Mời
          </p>
          <h2 className="section-title-vn">Thông Tin Lễ Cưới</h2>
          <div className="lotus-divider"><span>✦</span></div>
        </motion.div>

        {/* Main invitation box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(160deg, #5C0A0A, #7A1515)',
            border: '2px solid var(--gold)',
            padding: 'clamp(24px, 5vw, 56px)',
            position: 'relative',
            marginBottom: '40px',
            boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
          }}
        >
          {/* Inner border */}
          <div style={{
            position: 'absolute', inset: '8px',
            border: '1px solid rgba(184,134,11,0.3)',
            pointerEvents: 'none',
          }} />

          {/* Header of invitation */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '12px',
              color: 'rgba(253,246,227,0.6)', letterSpacing: '3px',
              textTransform: 'uppercase', marginBottom: '8px',
            }}>
              Chúng tôi trân trọng kính mời
            </p>
            <h3 style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(28px, 6vw, 48px)',
              color: 'var(--gold-shine)',
              lineHeight: 1.2,
            }}>
              Minh Quân &amp; Lan Anh
            </h3>
            <div style={{
              width: '80px', height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
              margin: '16px auto',
            }} />
          </div>

          {/* Details grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}>
            {details.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid rgba(184,134,11,0.2)',
                  padding: '16px',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ color: 'var(--gold)', flexShrink: 0, lineHeight: 0 }}><d.Icon /></span>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '12px',
                    color: 'var(--gold)',
                    letterSpacing: '1px',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    fontStyle: 'italic',
                  }}>{d.title}</p>
                  {d.lines.map((line, j) => (
                    <p key={j} style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(12px, 1.8vw, 14px)',
                      color: j === 0 ? 'var(--cream)' : 'rgba(253,246,227,0.65)',
                      lineHeight: 1.6,
                    }}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map button */}
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a
              href={weddingData.wedding.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                padding: '12px 40px',
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontStyle: 'italic',
                letterSpacing: '1px',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-shine), var(--gold))',
                backgroundSize: '200% auto',
                color: 'var(--ink)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              Xem Bản Đồ Đường Đi
            </a>
          </div>
        </motion.div>

        {/* Dresscode note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(122,21,21,0.06)',
            border: '1px solid rgba(184,134,11,0.25)',
            padding: '20px 28px',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(13px, 2vw, 15px)',
            color: 'var(--ink)',
            fontStyle: 'italic',
          }}>
            <strong>Trang phục đề nghị:</strong> {weddingData.wedding.dresscode}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
