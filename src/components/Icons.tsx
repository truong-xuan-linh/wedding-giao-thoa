'use client'
import React from 'react'

interface IconProps {
  size?: number
  color?: string
  style?: React.CSSProperties
}

// ── Decorative ─────────────────────────────────────────────────────────────

/** Hoa sen 8 cánh */
export function SvgLotus({ size = 20, color = 'currentColor', style }: IconProps) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      {angles.map(a => (
        <ellipse key={a} cx="12" cy="7.5" rx="2.2" ry="4.5"
          fill={color} transform={`rotate(${a} 12 12)`} />
      ))}
      <circle cx="12" cy="12" r="2.8" fill={color} />
    </svg>
  )
}

/** Hoa đào 5 cánh */
export function SvgPeachBlossom({ size = 20, color = 'currentColor', style }: IconProps) {
  const angles = [0, 72, 144, 216, 288]
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      {angles.map(a => (
        <ellipse key={a} cx="12" cy="7.2" rx="2.6" ry="5"
          fill={color} transform={`rotate(${a} 12 12)`} />
      ))}
      <circle cx="12" cy="12" r="2.5" fill={color} />
    </svg>
  )
}

/** Trăng lưỡi liềm (âm lịch) */
export function SvgMoon({ size = 16, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill={color} />
    </svg>
  )
}

/** Ngôi sao 4 cánh (✦) */
export function SvgStar({ size = 20, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill={color} />
    </svg>
  )
}

/** Pháo hoa – dùng khi đến ngày cưới */
export function SvgFirework({ size = 64, color = 'currentColor', style }: IconProps) {
  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (i * 45 * Math.PI) / 180
    return {
      x1: (12 + 4 * Math.cos(a)).toFixed(2),
      y1: (12 + 4 * Math.sin(a)).toFixed(2),
      x2: (12 + 9.5 * Math.cos(a)).toFixed(2),
      y2: (12 + 9.5 * Math.sin(a)).toFixed(2),
    }
  })
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <circle cx="12" cy="12" r="3.5" fill={color} />
      {rays.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
          stroke={color} strokeWidth="2" strokeLinecap="round" />
      ))}
    </svg>
  )
}

/** Chữ song hỷ 囍 – dùng làm con dấu sáp phong bì */
export function SvgDoubleHappiness({ size = 26, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" fill="none" style={style}>
      <text x="13" y="20" textAnchor="middle" fontSize="20" fill={color}
        fontFamily="serif" fontWeight="bold">囍</text>
    </svg>
  )
}

// ── Functional ──────────────────────────────────────────────────────────────

/** Hamburger menu ≡ */
export function SvgMenu({ size = 24, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}
      stroke={color} strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

/** Nút đóng × */
export function SvgClose({ size = 24, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}
      stroke={color} strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

/** Ghim địa điểm 📍 */
export function SvgPin({ size = 16, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill={color} />
      <circle cx="12" cy="9" r="2.5" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
    </svg>
  )
}

/** Đồng hồ ⏰ */
export function SvgClock({ size = 16, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}
      stroke={color} strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="9.5" />
      <polyline points="12,6 12,12 15.5,14.5" />
    </svg>
  )
}

/** Mũi tên xuống (scroll hint) */
export function SvgArrowDown({ size = 20, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19,12 12,19 5,12" />
    </svg>
  )
}

/** Cảnh báo – dùng trong thông báo lỗi */
export function SvgWarning({ size = 16, color = '#ff6b6b', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

/** Làm mới 🔄 */
export function SvgRefresh({ size = 16, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 .49-4.95" />
    </svg>
  )
}

/** Mục tiêu 🎯 – dùng đếm cặp đã ghép */
export function SvgTarget({ size = 16, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" fill={color} />
    </svg>
  )
}

/** Cúp chiến thắng 🏆 */
export function SvgTrophy({ size = 72, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      {/* Handles */}
      <path d="M6 4H3a2 2 0 0 0 0 4h3" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M18 4h3a2 2 0 0 1 0 4h-3" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      {/* Cup body */}
      <path d="M6 2h12v10a6 6 0 0 1-12 0V2z" fill={color} />
      {/* Stem */}
      <rect x="10.5" y="12" width="3" height="5" fill={color} />
      {/* Base */}
      <rect x="7" y="17" width="10" height="2.5" rx="1" fill={color} />
      {/* Star on cup */}
      <path d="M12 5 l.7 2.1 h2.2 l-1.8 1.3.7 2.1-1.8-1.3-1.8 1.3.7-2.1-1.8-1.3h2.2Z"
        fill="rgba(255,255,255,0.3)" />
    </svg>
  )
}

/** Trái tim ❤️ */
export function SvgHeart({ size = 20, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        fill={color} />
    </svg>
  )
}

// ── Thematic ───────────────────────────────────────────────────────────────

/** Đèn lồng 🏮 */
export function SvgLantern({ size = 20, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      {/* Cap */}
      <rect x="9" y="0.5" width="6" height="2.5" rx="1.2" fill={color} />
      {/* String */}
      <rect x="11.5" y="3" width="1" height="1.8" rx="0.5" fill={color} />
      {/* Body */}
      <ellipse cx="12" cy="13" rx="6.5" ry="8" fill={color} />
      {/* Horizontal rings */}
      <line x1="6.15" y1="9.5" x2="17.85" y2="9.5"
        stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="5.5" y1="13" x2="18.5" y2="13"
        stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="6.15" y1="16.5" x2="17.85" y2="16.5"
        stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />
      {/* Tassel */}
      <rect x="11.5" y="21" width="1" height="2" rx="0.5" fill={color} />
      <circle cx="12" cy="23.5" r="1" fill={color} />
    </svg>
  )
}

/** Quạt giấy 🪭 – nút phát nhạc */
export function SvgFan({ size = 22, color = 'currentColor', style }: IconProps) {
  // Pivot: (12, 21), r=11, angles from -65° to 65° (measured from UP)
  const cx = 12, cy = 21, r = 11
  const toRad = (a: number) => (a * Math.PI) / 180
  const pt = (a: number) => ({
    x: (cx + r * Math.sin(toRad(a))).toFixed(2),
    y: (cy - r * Math.cos(toRad(a))).toFixed(2),
  })
  const left = pt(-65)
  const right = pt(65)
  const rib1 = pt(-32)
  const rib2 = pt(0)
  const rib3 = pt(32)
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      {/* Fan body */}
      <path d={`M${cx} ${cy} L${left.x} ${left.y} A${r} ${r} 0 0 1 ${right.x} ${right.y} Z`}
        fill={color} />
      {/* Rib lines */}
      {[rib1, rib2, rib3].map((p, i) => (
        <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y}
          stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />
      ))}
      {/* Pivot */}
      <circle cx={cx} cy={cy} r="1.5" fill={color} />
    </svg>
  )
}

/** Ngọn lửa nến nhỏ – dùng bên trong đèn lồng */
export function SvgFlame({ size = 12, color = 'rgba(255,220,100,0.85)', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 14" fill="none" style={style}>
      <path d="M5 14C2.5 11.5 2 9 3 7C4 5 5 4 5 1C5 4 6 5 7 7C8 9 7.5 11.5 5 14Z"
        fill={color} />
    </svg>
  )
}

// ── Timeline icons ─────────────────────────────────────────────────────────

/** Hoa nở – 2019 Lần Đầu Gặp Gỡ */
export function SvgBlossom({ size = 20, color = 'currentColor', style }: IconProps) {
  const angles = [0, 60, 120, 180, 240, 300]
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      {angles.map(a => (
        <ellipse key={a} cx="12" cy="7.5" rx="2" ry="4.5"
          fill={color} transform={`rotate(${a} 12 12)`} />
      ))}
      <circle cx="12" cy="12" r="2.8" fill={color} />
    </svg>
  )
}

/** Phong thư – 2020 Ngày Tháng Ngọt Ngào */
export function SvgEnvelope({ size = 20, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <rect x="2" y="4.5" width="20" height="15" rx="2" fill={color} />
      <path d="M2 6.5L12 14 22 6.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"
        fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Nhẫn cưới – 2023 Cầu Hôn */
export function SvgRing({ size = 20, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <circle cx="12" cy="13" r="8" stroke={color} strokeWidth="2.5" />
      <circle cx="12" cy="13" r="4.5" stroke={color} strokeWidth="1.2" />
      {/* Diamond */}
      <path d="M10.5 6.5 L12 4 L13.5 6.5 L12 8 Z" fill={color} />
      <path d="M10.5 6.5 L12 8 L13.5 6.5" stroke={color} strokeWidth="0.6" fill="none" />
    </svg>
  )
}

/** Vương miện – 2026 Ngày Trọng Đại */
export function SvgCrown({ size = 20, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d="M3 20h18v2H3z" fill={color} />
      <path d="M3 20L3 10 L8 15 L12 5 L16 15 L21 10 L21 20Z" fill={color} />
      {/* Gems */}
      <circle cx="12" cy="5.5" r="1.2" fill="rgba(255,255,255,0.4)" />
      <circle cx="3.5" cy="11" r="1" fill="rgba(255,255,255,0.3)" />
      <circle cx="20.5" cy="11" r="1" fill="rgba(255,255,255,0.3)" />
    </svg>
  )
}

// Resolver timeline icon theo id
export function TimelineIcon({ id, size = 20, color = 'currentColor', style }: { id: string } & IconProps) {
  switch (id) {
    case 'blossom': return <SvgBlossom size={size} color={color} style={style} />
    case 'letter': return <SvgEnvelope size={size} color={color} style={style} />
    case 'lantern': return <SvgLantern size={size} color={color} style={style} />
    case 'ring': return <SvgRing size={size} color={color} style={style} />
    case 'crown': return <SvgCrown size={size} color={color} style={style} />
    default: return <SvgLotus size={size} color={color} style={style} />
  }
}

// ── Mini game symbols ──────────────────────────────────────────────────────

/** Rồng – Game symbol */
export function GameDragon({ size = 36, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      {/* S-curve body */}
      <path d="M5 22C5 22 3 17 7 13C11 9 13 9 15 6C16.5 3.5 17 1.5 16 1L19.5 1C21 2 20.5 5 18.5 7C16 10 12.5 10 10 13C7.5 16 8 22 8 22Z"
        fill={color} />
      {/* Head */}
      <ellipse cx="18.5" cy="1.8" rx="2.8" ry="1.8" fill={color} />
      {/* Snout */}
      <path d="M20.2 2.5L22.5 3L21.5 4L20 3.2Z" fill={color} />
      {/* Tail fin */}
      <path d="M5 22L2.5 24L5.5 23L5 24.5L7 23.5L8 22Z" fill={color} fillOpacity="0.85" />
      {/* Wing */}
      <path d="M13 9C11 6.5 8 5.5 7 7.5C8.5 9 11 9.5 13 9Z" fill={color} fillOpacity="0.7" />
      {/* Spine dots */}
      <circle cx="16" cy="5.5" r="0.7" fill="rgba(255,255,255,0.4)" />
      <circle cx="13" cy="8.5" r="0.7" fill="rgba(255,255,255,0.4)" />
      <circle cx="10" cy="11.5" r="0.7" fill="rgba(255,255,255,0.4)" />
    </svg>
  )
}

/** Phượng Hoàng – Game symbol */
export function GamePhoenix({ size = 36, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      {/* Left wing */}
      <path d="M12 10C9 7.5 4 9 3 6C5 5 9 7 12 10Z" fill={color} />
      {/* Right wing */}
      <path d="M12 10C15 7.5 20 9 21 6C19 5 15 7 12 10Z" fill={color} />
      {/* Body */}
      <ellipse cx="12" cy="13.5" rx="2.5" ry="4" fill={color} />
      {/* Head */}
      <circle cx="12" cy="8" r="2.5" fill={color} />
      {/* Crown feathers */}
      <line x1="10.5" y1="6" x2="9.5" y2="3.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="12" y1="5.5" x2="12" y2="2.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="13.5" y1="6" x2="14.5" y2="3.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      {/* Tail feathers */}
      <path d="M11 17.5L8 22.5L10.5 20L10 23.5L12 20.5L14 23.5L13.5 20L16 22.5L13 17.5Z"
        fill={color} />
    </svg>
  )
}

/** Tre – Game symbol */
export function GameBamboo({ size = 36, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      {/* Left stalk */}
      <rect x="2.5" y="4" width="4" height="19" rx="2" fill={color} />
      <rect x="2.5" y="9" width="4" height="1.5" rx="0.5" fill={color} fillOpacity="0.35" />
      <rect x="2.5" y="15" width="4" height="1.5" rx="0.5" fill={color} fillOpacity="0.35" />
      {/* Center stalk (tallest) */}
      <rect x="10" y="1" width="4" height="22" rx="2" fill={color} />
      <rect x="10" y="7" width="4" height="1.5" rx="0.5" fill={color} fillOpacity="0.35" />
      <rect x="10" y="14" width="4" height="1.5" rx="0.5" fill={color} fillOpacity="0.35" />
      <rect x="10" y="20" width="4" height="1.5" rx="0.5" fill={color} fillOpacity="0.35" />
      {/* Right stalk */}
      <rect x="17.5" y="5" width="4" height="18" rx="2" fill={color} />
      <rect x="17.5" y="10" width="4" height="1.5" rx="0.5" fill={color} fillOpacity="0.35" />
      <rect x="17.5" y="16.5" width="4" height="1.5" rx="0.5" fill={color} fillOpacity="0.35" />
      {/* Leaves */}
      <path d="M6.5 4.5C8 2.5 11.5 2 14 3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M4.5 5.5C3 3.5 0.5 4 1 6" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/** Trăng Rằm – Game symbol (full moon) */
export function GameMoon({ size = 36, color = 'currentColor', style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      {/* Outer glow ring */}
      <circle cx="12" cy="12" r="11" fill={color} fillOpacity="0.15" />
      {/* Moon body */}
      <circle cx="12" cy="12" r="9" fill={color} />
      {/* Subtle craters */}
      <circle cx="9" cy="9.5" r="1.8" fill="rgba(255,255,255,0.12)" />
      <circle cx="15" cy="14" r="1.3" fill="rgba(255,255,255,0.1)" />
      <circle cx="10" cy="15" r="0.8" fill="rgba(255,255,255,0.1)" />
    </svg>
  )
}

/** Trống Đồng – Game symbol (Đông Sơn drum top view) */
export function GameBronzeDrum({ size = 36, color = 'currentColor', style }: IconProps) {
  const birds = [0, 90, 180, 270].map(deg => {
    const rad = (deg * Math.PI) / 180
    return {
      x: (12 + 8.2 * Math.cos(rad)).toFixed(2),
      y: (12 + 8.2 * Math.sin(rad)).toFixed(2),
    }
  })
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <circle cx="12" cy="12" r="11" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="12" r="7.5" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill={color} />
      {birds.map((b, i) => (
        <circle key={i} cx={b.x} cy={b.y} r="1" fill={color} />
      ))}
      {/* Radial lines between rings */}
      {[45, 135, 225, 315].map(deg => {
        const rad = (deg * Math.PI) / 180
        const x1 = (12 + 4.2 * Math.cos(rad)).toFixed(2)
        const y1 = (12 + 4.2 * Math.sin(rad)).toFixed(2)
        const x2 = (12 + 7.2 * Math.cos(rad)).toFixed(2)
        const y2 = (12 + 7.2 * Math.sin(rad)).toFixed(2)
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={color} strokeWidth="0.8" />
      })}
    </svg>
  )
}

/** Resolver biểu tượng mini game theo id */
export function GameSymbol({ id, size = 36, color = 'currentColor', style }: { id: string } & IconProps) {
  switch (id) {
    case 'lotus':   return <SvgLotus size={size} color={color} style={style} />
    case 'dragon':  return <GameDragon size={size} color={color} style={style} />
    case 'phoenix': return <GamePhoenix size={size} color={color} style={style} />
    case 'bamboo':  return <GameBamboo size={size} color={color} style={style} />
    case 'moon':    return <GameMoon size={size} color={color} style={style} />
    case 'lantern': return <SvgLantern size={size} color={color} style={style} />
    case 'peach':   return <SvgPeachBlossom size={size} color={color} style={style} />
    case 'drum':    return <GameBronzeDrum size={size} color={color} style={style} />
    default:        return null
  }
}

// ── Floating petal shapes ──────────────────────────────────────────────────

const petalPaths = [
  // Cánh hoa tròn (sakura)
  (c: string) => (
    <svg viewBox="0 0 20 20" fill="none">
      {[0, 72, 144, 216, 288].map(a => (
        <ellipse key={a} cx="10" cy="5.5" rx="2.2" ry="4.5"
          fill={c} transform={`rotate(${a} 10 10)`} fillOpacity="0.8" />
      ))}
      <circle cx="10" cy="10" r="2" fill={c} />
    </svg>
  ),
  // Cánh hoa dài nhọn (cánh sen)
  (c: string) => (
    <svg viewBox="0 0 16 24" fill="none">
      <path d="M8 2 C5 6 4 12 6 18 C7 21 8 24 8 24 C8 24 9 21 10 18 C12 12 11 6 8 2Z"
        fill={c} fillOpacity="0.75" />
    </svg>
  ),
  // Cánh hoa oval (hoa đào)
  (c: string) => (
    <svg viewBox="0 0 18 22" fill="none">
      <ellipse cx="9" cy="11" rx="7" ry="10" fill={c} fillOpacity="0.7"
        transform="rotate(-15 9 11)" />
    </svg>
  ),
  // Hình thoi nhỏ (lá)
  (c: string) => (
    <svg viewBox="0 0 14 20" fill="none">
      <path d="M7 1 C10 5 11 10 9 15 L7 19 L5 15 C3 10 4 5 7 1Z"
        fill={c} fillOpacity="0.65" />
    </svg>
  ),
]

interface FloatingPetalProps {
  type: number
  size: number
  color?: string
}

export function FloatingPetal({ type, size, color = 'var(--lotus-pink)' }: FloatingPetalProps) {
  const petal = petalPaths[type % petalPaths.length]
  return (
    <span style={{ display: 'inline-flex', width: size, height: size }}>
      {petal(color)}
    </span>
  )
}
