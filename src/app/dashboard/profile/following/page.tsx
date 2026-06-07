"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTheme } from '../../../theme-provider'

export default function FollowingPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [following, setFollowing] = useState<any[]>([])

  useEffect(() => {
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (!storedUser || !token) {
      router.push('/auth/login')
      return
    }

    const parsed = JSON.parse(storedUser)
    setUser(parsed)

    const fetchFollowing = async () => {
      try {
        const res = await fetch(`/api/users/${parsed.id}/following`)
        if (res.ok) {
          const data = await res.json()
          setFollowing(data.following || [])
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchFollowing()
  }, [router])

  const unfollow = async (targetId: string) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (!token) { router.push('/auth/login'); return }
    try {
      await fetch(`/api/follow?followingId=${encodeURIComponent(targetId)}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
      setFollowing((s) => s.filter((u) => u.id !== targetId))
    } catch (err) { console.error(err) }
  }

  if (!user) return <div className="flex items-center justify-center min-h-screen">Loading...</div>

  return (
    <div className={`min-h-screen p-8 ${isDark ? 'bg-slate-900 text-slate-200' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className={`text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>Following</h1>
          <Link href="/dashboard/profile" className="text-sm text-slate-400">Back to profile</Link>
        </div>

        <div className="space-y-3">
          {following.length === 0 ? (
            <p className={`${isDark ? 'text-slate-300' : 'text-gray-600'}`}>You're not following anyone yet.</p>
          ) : following.map((f) => (
            <div key={f.id} className={`flex items-center justify-between rounded-2xl p-4 ${isDark ? 'bg-slate-800' : 'bg-white'} border`}> 
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center dark:bg-slate-700 font-semibold">{f.name.split(' ').map((s:string)=>s[0]).join('').slice(0,2)}</div>
                <div>
                  <p className={`${isDark ? 'text-slate-100' : 'text-gray-900'} font-medium`}>{f.name}</p>
                  <p className={`${isDark ? 'text-slate-300' : 'text-gray-500'} text-sm`}>{f.email}</p>
                </div>
              </div>
              <div>
                <button onClick={() => unfollow(f.id)} className="px-4 py-2 rounded-full font-semibold border bg-white text-gray-900">Unfollow</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
