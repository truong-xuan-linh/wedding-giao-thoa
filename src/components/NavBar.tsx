'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#countdown', label: 'Đếm Ngược' },
  { href: '#story', label: 'Chuyện Tình' },
  { href: '#album', label: 'Album' },
  { href: '#venue', label: 'Địa Điểm' },
  { href: '#game', label: 'Mini Game' },
  { href: '#guestbook', label: 'Sổ Lưu Bút' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 8000,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(253,246,227,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(184,134,11,0.3)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(44,36,22,0.1)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
        >
          <span style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '20px',
            color: 'var(--lacquer-red)',
            lineHeight: 1,
          }}>Minh Quân</span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '9px',
            color: 'var(--gold)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}>&amp; Lan Anh · 15.06.2026</span>
        </div>

        {/* Desktop Links */}
        <ul style={{
          display: 'flex', gap: '32px', listStyle: 'none',
          margin: 0, padding: 0,
        }} className="nav-desktop">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: scrolled ? 'var(--ink)' : 'rgba(253,246,227,0.9)',
                  letterSpacing: '0.5px',
                  transition: 'color 0.2s',
                  padding: '4px 0',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = 'var(--gold)'
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = scrolled ? 'var(--ink)' : 'rgba(253,246,227,0.9)'
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '24px',
            color: scrolled ? 'var(--lacquer-red)' : 'var(--cream)',
          }}
          className="nav-mobile-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(253,246,227,0.98)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid var(--parchment-dark)',
          padding: '16px 24px',
        }}>
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '15px', color: 'var(--ink)',
                padding: '12px 0',
                borderBottom: '1px solid rgba(184,134,11,0.15)',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
