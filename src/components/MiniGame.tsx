'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { weddingData } from '@/data/weddingData'

interface Card {
  id: number
  symbolId: string
  emoji: string
  name: string
  flipped: boolean
  matched: boolean
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildDeck(): Card[] {
  const pairs = weddingData.miniGameSymbols.flatMap(s => [
    { symbolId: s.id, emoji: s.emoji, name: s.name },
    { symbolId: s.id, emoji: s.emoji, name: s.name },
  ])
  return shuffle(pairs).map((p, i) => ({ id: i, ...p, flipped: false, matched: false }))
}

type GamePhase = 'idle' | 'playing' | 'won'

const TOTAL_TIME = 90

export default function MiniGame() {
  const [phase, setPhase] = useState<GamePhase>('idle')
  const [cards, setCards] = useState<Card[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME)
  const [isChecking, setIsChecking] = useState(false)
  const [score, setScore] = useState(0)
  const matchedCount = cards.filter(c => c.matched).length / 2

  const startGame = () => {
    setCards(buildDeck())
    setFlipped([])
    setMoves(0)
    setTimeLeft(TOTAL_TIME)
    setScore(0)
    setPhase('playing')
  }

  useEffect(() => {
    if (phase !== 'playing') return
    if (timeLeft <= 0) {
      setPhase('idle')
      return
    }
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000)
    return () => clearInterval(t)
  }, [phase, timeLeft])

  const checkWin = useCallback((updatedCards: Card[]) => {
    if (updatedCards.every(c => c.matched)) {
      setScore(Math.max(0, timeLeft * 10 + (50 - moves) * 5))
      setPhase('won')
    }
  }, [timeLeft, moves])

  const flipCard = (id: number) => {
    if (isChecking || phase !== 'playing') return
    const card = cards.find(c => c.id === id)
    if (!card || card.flipped || card.matched) return
    if (flipped.includes(id)) return

    const newFlipped = [...flipped, id]
    setCards(prev => prev.map(c => c.id === id ? { ...c, flipped: true } : c))

    if (newFlipped.length === 2) {
      setMoves(m => m + 1)
      setIsChecking(true)
      const [a, b] = newFlipped.map(fid => cards.find(c => c.id === fid)!)
      if (a.symbolId === b.symbolId) {
        // Match!
        setTimeout(() => {
          const updated = cards.map(c =>
            newFlipped.includes(c.id) ? { ...c, matched: true } : c
          )
          setCards(updated)
          setFlipped([])
          setIsChecking(false)
          checkWin(updated)
        }, 600)
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            newFlipped.includes(c.id) ? { ...c, flipped: false } : c
          ))
          setFlipped([])
          setIsChecking(false)
        }, 1000)
      }
      setFlipped(newFlipped)
    } else {
      setFlipped(newFlipped)
    }
  }

  const timerColor = timeLeft > 30 ? 'var(--jade)' : timeLeft > 10 ? '#E67E22' : '#E74C3C'
  const timerPct = (timeLeft / TOTAL_TIME) * 100

  return (
    <section id="game" className="section-base" style={{
      background: 'linear-gradient(180deg, var(--cream) 0%, var(--parchment) 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'repeating-linear-gradient(90deg, var(--lacquer-red) 0, var(--lacquer-red) 12px, transparent 12px, transparent 20px)',
        opacity: 0.5,
      }} />

      <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(13px,2.5vw,17px)', color: 'var(--gold)', marginBottom: '8px' }}>
            Thử Tài Trí Nhớ
          </p>
          <h2 className="section-title-vn">Ghép Đôi Uyên Ương</h2>
          <div className="lotus-divider"><span>🌺</span></div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--ink-light)', fontStyle: 'italic' }}>
            Tìm các cặp biểu tượng văn hoá Việt Nam trong {TOTAL_TIME} giây!
          </p>
        </motion.div>

        {/* Game area */}
        <AnimatePresence mode="wait">
          {phase === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '48px', color: 'var(--gold)', marginBottom: '16px', fontFamily: 'var(--font-display)', letterSpacing: '8px' }}>✦ ✦ ✦</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--ink)', marginBottom: '8px' }}>
                Lật các thẻ và tìm các cặp giống nhau
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--ink-light)', fontStyle: 'italic', marginBottom: '32px' }}>
                8 cặp · {TOTAL_TIME} giây · Ghép đúng hết để nhận điểm thưởng!
              </p>
              <div style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                gap: '8px', marginBottom: '32px',
              }}>
                {weddingData.miniGameSymbols.map(s => (
                  <div key={s.id} style={{
                    background: 'rgba(122,21,21,0.07)',
                    border: '1px solid rgba(184,134,11,0.3)',
                    padding: '8px 14px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--ink)',
                    display: 'flex', gap: '6px', alignItems: 'center',
                  }}>
                    <span>{s.emoji}</span>
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
              <button onClick={startGame} className="btn-lacquer" style={{ fontSize: '14px', padding: '14px 48px' }}>
                ✦ Bắt Đầu Chơi
              </button>
            </motion.div>
          )}

          {phase === 'playing' && (
            <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* HUD */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: '20px', flexWrap: 'wrap', gap: '12px',
              }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--ink)' }}>
                  🎯 Đã ghép: <strong style={{ color: 'var(--lacquer-red)' }}>{matchedCount}/{weddingData.miniGameSymbols.length}</strong>
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontWeight: '700',
                  color: timerColor,
                  fontStyle: 'italic',
                  minWidth: '80px',
                  textAlign: 'center',
                }}>
                  ⏱ {timeLeft}s
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--ink)' }}>
                  🔄 Lượt: <strong style={{ color: 'var(--jade)' }}>{moves}</strong>
                </div>
              </div>
              {/* Timer bar */}
              <div style={{ height: '4px', background: 'var(--parchment-dark)', marginBottom: '20px', borderRadius: '2px' }}>
                <div style={{
                  height: '100%', width: `${timerPct}%`,
                  background: timerColor,
                  borderRadius: '2px',
                  transition: 'width 1s linear, background-color 0.5s',
                }} />
              </div>
              {/* Card grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'clamp(8px, 2vw, 14px)',
              }}>
                {cards.map(card => (
                  <div
                    key={card.id}
                    className={`game-card ${card.flipped || card.matched ? 'flipped' : ''}`}
                    onClick={() => flipCard(card.id)}
                    style={{
                      height: 'clamp(64px, 14vw, 90px)',
                      cursor: card.matched ? 'default' : 'pointer',
                    }}
                  >
                    <div className="game-card-inner">
                      {/* Front (back of card) */}
                      <div className="game-card-front" style={{
                        background: 'linear-gradient(135deg, #7A0000, #A80000)',
                        border: '1px solid rgba(184,134,11,0.5)',
                        boxShadow: card.matched ? 'none' : '0 4px 12px rgba(0,0,0,0.2)',
                      }}>
                        <span style={{
                          fontSize: 'clamp(18px, 4vw, 28px)',
                          opacity: 0.6,
                          color: 'rgba(184,134,11,0.7)',
                        }}>🌸</span>
                      </div>
                      {/* Back (symbol) */}
                      <div className="game-card-back" style={{
                        background: card.matched
                          ? 'linear-gradient(135deg, var(--jade), var(--jade-light))'
                          : 'linear-gradient(135deg, var(--cream), var(--parchment))',
                        border: `1px solid ${card.matched ? 'rgba(45,106,79,0.8)' : 'rgba(184,134,11,0.4)'}`,
                        boxShadow: card.matched ? '0 0 12px rgba(45,106,79,0.4)' : '0 4px 12px rgba(0,0,0,0.15)',
                        flexDirection: 'column',
                        gap: '4px',
                      }}>
                        <span style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>{card.emoji}</span>
                        <span style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 'clamp(7px, 1.5vw, 10px)',
                          color: card.matched ? 'rgba(255,255,255,0.85)' : 'var(--ink-light)',
                          letterSpacing: '0.5px',
                        }}>{card.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {phase === 'won' && (
            <motion.div
              key="won"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '40px 20px' }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: '72px', marginBottom: '20px' }}
              >🏆</motion.div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(22px, 4vw, 32px)',
                color: 'var(--lacquer-red)', marginBottom: '8px',
              }}>
                Chúc Mừng!
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--ink)', marginBottom: '8px' }}>
                Bạn đã ghép đủ tất cả các cặp!
              </p>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, var(--lacquer-red), var(--lacquer-red-light))',
                border: '1px solid var(--gold)',
                padding: '12px 32px',
                marginBottom: '20px',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '20px', color: 'var(--gold-shine)' }}>
                  ✨ {score.toLocaleString()} điểm
                </span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: 'var(--ink-light)', fontStyle: 'italic', marginBottom: '32px',
              }}>
                {moves} lượt · còn {timeLeft}s · Như tình yêu của Minh Quân &amp; Lan Anh – hoàn hảo!
              </p>
              <button onClick={startGame} className="btn-gold" style={{ fontSize: '14px', padding: '12px 40px' }}>
                🔄 Chơi Lại
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
