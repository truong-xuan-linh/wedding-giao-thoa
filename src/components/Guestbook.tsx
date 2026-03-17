'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Wish {
  id: string
  name: string
  message: string
  relation: string
  createdAt: string
}

interface FloatingLantern {
  id: string
  name: string
  message: string
  x: number
  delay: number
  duration: number
  color: string
}

const LANTERN_COLORS = ['#C0392B', '#E67E22', '#8E44AD', '#1ABC9C', '#2980B9', '#D35400']
const RELATIONS = ['Gia đình', 'Bạn bè', 'Đồng nghiệp', 'Họ hàng', 'Thầy cô', 'Khác']

export default function Guestbook() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [lanterns, setLanterns] = useState<FloatingLantern[]>([])
  const [form, setForm] = useState({ name: '', message: '', relation: 'Bạn bè' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const skyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/api/wishes')
      .then(r => r.json())
      .then(data => {
        setWishes(data.wishes || [])
        const l = (data.wishes || []).slice(0, 8).map((w: Wish, i: number) => ({
          id: w.id,
          name: w.name,
          message: w.message,
          x: 5 + (i * 12) % 85,
          delay: i * 1.2,
          duration: 15 + (i % 4) * 3,
          color: LANTERN_COLORS[i % LANTERN_COLORS.length],
        }))
        setLanterns(l)
      })
      .catch(() => {})
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setError('Vui lòng điền đầy đủ thông tin.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setWishes(prev => [data.wish, ...prev])
        // Add as floating lantern
        setLanterns(prev => [{
          id: data.wish.id,
          name: data.wish.name,
          message: data.wish.message,
          x: 10 + Math.random() * 70,
          delay: 0,
          duration: 18 + Math.random() * 4,
          color: LANTERN_COLORS[Math.floor(Math.random() * LANTERN_COLORS.length)],
        }, ...prev])
        setForm({ name: '', message: '', relation: 'Bạn bè' })
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
      }
    } catch {
      setError('Có lỗi xảy ra. Vui lòng thử lại.')
    }
    setLoading(false)
  }

  return (
    <section id="guestbook" className="section-base" style={{
      background: 'linear-gradient(180deg, #0D0408 0%, #1B0A08 50%, #0D0408 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Night sky with stars */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 60% 15%, rgba(255,255,255,0.5) 0%, transparent 100%),
          radial-gradient(1px 1px at 80% 40%, rgba(255,255,255,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 45% 70%, rgba(255,255,255,0.4) 0%, transparent 100%),
          radial-gradient(1px 1px at 90% 60%, rgba(255,255,255,0.2) 0%, transparent 100%),
          radial-gradient(2px 2px at 20% 80%, rgba(255,200,100,0.3) 0%, transparent 100%),
          radial-gradient(1px 1px at 70% 85%, rgba(255,255,255,0.4) 0%, transparent 100%)`,
      }} />

      {/* Floating lanterns sky */}
      <div ref={skyRef} style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        {lanterns.map(l => (
          <div
            key={l.id}
            style={{
              position: 'absolute',
              left: `${l.x}%`,
              bottom: '-60px',
              animation: `float-up ${l.duration}s ${l.delay}s ease-in-out infinite`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {/* Lantern body */}
            <div style={{
              width: '32px', height: '44px',
              borderRadius: '50% 50% 40% 40%',
              background: `radial-gradient(circle at 35% 35%, ${l.color}dd, ${l.color}88)`,
              border: `1px solid ${l.color}`,
              boxShadow: `0 0 12px ${l.color}66, 0 0 24px ${l.color}33`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              animation: 'lantern-glow 2s ease-in-out infinite',
              position: 'relative',
            }}>
              {/* Top knot */}
              <div style={{
                position: 'absolute', top: '-8px', left: '50%',
                transform: 'translateX(-50%)',
                width: '10px', height: '8px',
                background: 'var(--gold)',
                borderRadius: '3px 3px 0 0',
              }} />
              <span style={{ fontSize: '12px', opacity: 0.9 }}>🕯️</span>
              {/* Bottom tassel */}
              <div style={{
                position: 'absolute', bottom: '-10px', left: '50%',
                transform: 'translateX(-50%)',
                width: '2px', height: '10px',
                background: 'var(--gold)',
              }} />
            </div>
            {/* Name tag */}
            <div style={{
              background: 'rgba(0,0,0,0.6)',
              border: `1px solid ${l.color}44`,
              borderRadius: '2px',
              padding: '2px 6px',
              fontSize: '8px',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-body)',
              maxWidth: '80px',
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {l.name}
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '18px', color: 'var(--gold)', marginBottom: '8px' }}>
            Lời Chúc Ngàn Năm
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(24px,5vw,42px)', color: 'var(--cream)', marginBottom: '8px',
          }}>
            Sổ Lưu Bút
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '13px',
            color: 'rgba(253,246,227,0.55)', fontStyle: 'italic',
          }}>
            Lời chúc của bạn sẽ bay lên trời như những chiếc đèn lồng Hội An ✨
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '16px 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,134,11,0.4))' }} />
            <span style={{ color: 'var(--gold)', fontSize: '20px' }}>🏮</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(184,134,11,0.4), transparent)' }} />
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          style={{
            background: 'rgba(253,246,227,0.04)',
            border: '1px solid rgba(184,134,11,0.3)',
            padding: 'clamp(20px,4vw,40px)',
            marginBottom: '48px',
            position: 'relative',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '1px', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
                Tên của bạn *
              </label>
              <input
                className="input-parchment"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Nhập tên..."
                maxLength={60}
                style={{ background: 'rgba(253,246,227,0.08)', color: 'var(--cream)', borderBottomColor: 'rgba(184,134,11,0.5)' }}
              />
            </div>
            <div>
              <label style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '1px', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
                Quan hệ
              </label>
              <select
                value={form.relation}
                onChange={e => setForm(f => ({ ...f, relation: e.target.value }))}
                style={{
                  width: '100%',
                  background: 'rgba(253,246,227,0.08)', color: 'var(--cream)',
                  border: 'none', borderBottom: '2px solid rgba(184,134,11,0.5)',
                  padding: '10px 14px', fontFamily: 'var(--font-body)', fontSize: '14px',
                  outline: 'none', cursor: 'pointer',
                }}
              >
                {RELATIONS.map(r => <option key={r} value={r} style={{ background: '#1B0A08' }}>{r}</option>)}
              </select>
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '1px', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
              Lời chúc *
            </label>
            <textarea
              className="input-parchment"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              placeholder="Gửi lời chúc yêu thương đến cô dâu chú rể..."
              rows={4}
              maxLength={300}
              style={{
                background: 'rgba(253,246,227,0.08)', color: 'var(--cream)',
                borderBottomColor: 'rgba(184,134,11,0.5)',
                resize: 'vertical',
              }}
            />
          </div>
          {error && (
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#ff6b6b', marginBottom: '12px' }}>
              ⚠️ {error}
            </p>
          )}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="submit"
              disabled={loading}
              className="btn-gold"
              style={{ minWidth: '200px', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? '⏳ Đang gửi...' : '🏮 Thả Đèn Lồng'}
            </button>
          </div>
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(10,5,5,0.85)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ fontSize: '48px', animation: 'float-gentle 2s ease-in-out infinite' }}>🏮</div>
                <p style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(16px,3vw,22px)', color: 'var(--gold-shine)' }}>
                  Đèn lồng đã bay lên!
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(253,246,227,0.7)', fontStyle: 'italic' }}>
                  Lời chúc của bạn đã được gửi tới cô dâu chú rể 💕
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Wishes list */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
          {wishes.map((w, i) => (
            <motion.div
              key={w.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{
                background: 'rgba(253,246,227,0.04)',
                border: '1px solid rgba(184,134,11,0.2)',
                padding: '16px',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontStyle: 'italic', color: 'var(--gold-shine)' }}>
                    {w.name}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: 'rgba(253,246,227,0.4)', letterSpacing: '1px' }}>
                    {w.relation}
                  </p>
                </div>
                <span style={{ fontSize: '20px', opacity: 0.6 }}>🏮</span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(12px, 1.8vw, 13px)',
                color: 'rgba(253,246,227,0.75)',
                lineHeight: 1.7,
                fontStyle: 'italic',
              }}>
                &ldquo;{w.message}&rdquo;
              </p>
              <div style={{
                position: 'absolute', top: '8px', left: '8px',
                width: '8px', height: '8px',
                borderTop: '1px solid rgba(184,134,11,0.3)',
                borderLeft: '1px solid rgba(184,134,11,0.3)',
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
