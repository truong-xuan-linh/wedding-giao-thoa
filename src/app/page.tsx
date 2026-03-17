import { Suspense } from 'react'
import MainContent from '@/components/MainContent'

interface PageProps {
  searchParams: Promise<{ guest?: string }>
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  const guestName = params.guest || null
  return (
    <Suspense fallback={<div className="fixed inset-0" style={{ background: '#1B0A08' }} />}>
      <MainContent guestName={guestName} />
    </Suspense>
  )
}
