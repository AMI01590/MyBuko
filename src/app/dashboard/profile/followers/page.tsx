"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTheme } from '../../../theme-provider'

export default function FollowersPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [followers, setFollowers] = useState<any[]>([])
  const [followingIds, setFollowingIds] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (!storedUser || !token) {
      router.push('/auth/login')
      return
    }

    const parsed = JSON.parse(storedUser)
    setUser(parsed)

    const fetchLists = async () => {
      try {
        const resF = await fetch(`/api/users/${parsed.id}/followers`)
        if (resF.ok) {
          const data = await resF.json()
          setFollowers(data.followers || [])
        }

        const resG = await fetch(`/api/users/${parsed.id}/following`)
        if (resG.ok) {
          const data = await resG.json()
          const map: Record<string, boolean> = {}
          ;(data.following || []).forEach((f: any) => { map[f.id] = true })
          setFollowingIds(map)
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchLists()
  }, [router])

  const toggleFollow = async (targetId: string) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (!token) {
      router.push('/auth/login')
      return
    }

    const isFollowing = !!followingIds[targetId]
    try {
      if (isFollowing) {
        await fetch(`/api/follow?followingId=${encodeURIComponent(targetId)}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
        setFollowingIds((s) => { const n = { ...s }; delete n[targetId]; return n })
      } else {
        await fetch('/api/follow', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ followingId: targetId }) })
        setFollowingIds((s) => ({ ...s, [targetId]: true }))
      }
    } catch (err) {
      console.error('Follow toggle failed', err)
    }
  }

  if (!user) return <div className="flex items-center justify-center min-h-screen">Loading...</div>

  return (
    <div className={`min-h-screen p-8 ${isDark ? 'bg-slate-900 text-slate-200' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className={`text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>Followers</h1>
          <Link href="/dashboard/profile" className="text-sm text-slate-400">Back to profile</Link>
        </div>

        <div className="space-y-3">
          {followers.length === 0 ? (
            <p className={`${isDark ? 'text-slate-300' : 'text-gray-600'}`}>No followers yet.</p>
          ) : followers.map((f) => (
            <div key={f.id} className={`flex items-center justify-between rounded-2xl p-4 ${isDark ? 'bg-slate-800' : 'bg-white'} border`}> 
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center dark:bg-slate-700 font-semibold">{f.name.split(' ').map((s:string)=>s[0]).join('').slice(0,2)}</div>
                <div>
                  <p className={`${isDark ? 'text-slate-100' : 'text-gray-900'} font-medium`}>{f.name}</p>
                  <p className={`${isDark ? 'text-slate-300' : 'text-gray-500'} text-sm`}>{f.email}</p>
                </div>
              </div>
              <div>
                <button onClick={() => toggleFollow(f.id)} className={`px-4 py-2 rounded-full font-semibold ${followingIds[f.id] ? 'bg-blue-600 text-white' : 'border bg-white text-gray-900'}`}>
                  {followingIds[f.id] ? 'Following' : 'Follow'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
