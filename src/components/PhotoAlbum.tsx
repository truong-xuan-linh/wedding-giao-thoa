'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { weddingData } from '@/data/weddingData'

export default function PhotoAlbum() {
  const [selected, setSelected] = useState<number | null>(null)
  const [page, setPage] = useState(0)
  const perPage = 9
  const photos = weddingData.photos
  const totalPages = Math.ceil(photos.length / perPage)
  const visible = photos.slice(page * perPage, page * perPage + perPage)

  const openPhoto = (idx: number) => setSelected(page * perPage + idx)
  const closePhoto = () => setSelected(null)
  const prevPhoto = () => setSelected(s => (s !== null && s > 0 ? s - 1 : s))
  const nextPhoto = () => setSelected(s => (s !== null && s < photos.length - 1 ? s + 1 : s))

  return (
    <section id="album" className="section-base" style={{
      background: 'linear-gradient(180deg, var(--parchment) 0%, var(--cream) 100%)',
      position: 'relative',
    }}>
      {/* Decorative top border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'repeating-linear-gradient(90deg, var(--gold) 0, var(--gold) 12px, transparent 12px, transparent 20px)',
        opacity: 0.4,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(14px,2.5vw,18px)', color: 'var(--gold)', marginBottom: '8px' }}>
            Khoảnh Khắc Đáng Nhớ
          </p>
          <h2 className="section-title-vn">Album Ảnh Cưới</h2>
          <div className="lotus-divider"><span>🏮</span></div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--ink-light)', fontStyle: 'italic' }}>
            Nhấn vào ảnh để xem toàn màn hình
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}>
          {visible.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="album-frame"
              data-caption={photo.caption}
              onClick={() => openPhoto(i)}
              style={{
                cursor: 'pointer',
                gridRow: i === 0 || i === 4 ? 'span 2' : 'span 1',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: i === 0 || i === 4 ? '133%' : '75%',
                overflow: 'hidden',
              }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.transform = 'scale(1.05)')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.transform = 'scale(1)')}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '32px' }}>
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="btn-lacquer"
              style={{ opacity: page === 0 ? 0.4 : 1, fontSize: '12px' }}
            >
              ← Trước
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                style={{
                  width: '36px', height: '36px',
                  border: '1px solid var(--gold)',
                  background: page === i ? 'var(--lacquer-red)' : 'transparent',
                  color: page === i ? 'var(--gold-shine)' : 'var(--ink)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  transition: 'all 0.2s',
                }}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="btn-lacquer"
              style={{ opacity: page === totalPages - 1 ? 0.4 : 1, fontSize: '12px' }}
            >
              Tiếp →
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
            style={{
              position: 'fixed', inset: 0, zIndex: 9500,
              background: 'rgba(10,5,5,0.95)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                border: '2px solid rgba(184,134,11,0.4)',
                boxShadow: '0 20px 80px rgba(0,0,0,0.8)',
              }}
            >
              <div style={{ position: 'relative', width: 'min(80vw, 700px)', height: 'min(80vh, 600px)' }}>
                <Image
                  src={photos[selected].src}
                  alt={photos[selected].alt}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'rgba(27,10,8,0.8)',
                padding: '12px 20px',
                textAlign: 'center',
                fontFamily: 'var(--font-accent)',
                fontSize: '14px',
                color: 'var(--gold-shine)',
              }}>
                {photos[selected].caption}
              </div>
              {/* Nav arrows */}
              <button
                onClick={e => { e.stopPropagation(); prevPhoto() }}
                disabled={selected === 0}
                style={{
                  position: 'absolute', left: '-56px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(253,246,227,0.1)', border: '1px solid rgba(184,134,11,0.4)',
                  color: 'var(--gold-shine)', width: '44px', height: '44px',
                  cursor: 'pointer', fontSize: '20px',
                  opacity: selected === 0 ? 0.3 : 1,
                }}
              >‹</button>
              <button
                onClick={e => { e.stopPropagation(); nextPhoto() }}
                disabled={selected === photos.length - 1}
                style={{
                  position: 'absolute', right: '-56px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(253,246,227,0.1)', border: '1px solid rgba(184,134,11,0.4)',
                  color: 'var(--gold-shine)', width: '44px', height: '44px',
                  cursor: 'pointer', fontSize: '20px',
                  opacity: selected === photos.length - 1 ? 0.3 : 1,
                }}
              >›</button>
              {/* Close */}
              <button
                onClick={closePhoto}
                style={{
                  position: 'absolute', top: '-44px', right: 0,
                  background: 'none', border: 'none',
                  color: 'rgba(253,246,227,0.7)', fontSize: '28px',
                  cursor: 'pointer',
                }}
              >✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .album-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .album-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
