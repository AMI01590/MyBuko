'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ExplorePage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/explore')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      <div className="text-center px-6 py-12 rounded-3xl bg-white shadow-xl border border-slate-200">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Redirecting</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">Opening the Explore page</h1>
        <p className="mt-3 text-slate-600">Please wait while we take you to the full community feed.</p>
      </div>
    </div>
  )
}
