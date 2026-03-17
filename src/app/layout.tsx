import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thiệp Cưới - Minh Quân & Lan Anh | Nét Giao Thoa',
  description: 'Trân trọng kính mời bạn tham dự lễ thành hôn của Trần Minh Quân & Nguyễn Thị Lan Anh',
  keywords: 'thiệp cưới, wedding invitation, Minh Quân, Lan Anh',
  openGraph: {
    title: 'Thiệp Cưới - Minh Quân & Lan Anh',
    description: 'Trân trọng kính mời bạn tham dự lễ thành hôn',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Dancing+Script:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap&subset=vietnamese"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
