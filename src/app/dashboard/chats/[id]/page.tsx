"use client"

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from '../../../theme-provider'
import { useParams } from 'next/navigation'

export default function ChatRoomPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const router = useRouter()
  const params = useParams()
  const chatId = params?.id
  const [user, setUser] = useState<any>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [text, setText] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [other, setOther] = useState<any>(null)
  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (!storedUser || !token) { router.push('/auth/login'); return }
    const parsed = JSON.parse(storedUser)
    setUser(parsed)

    const fetchMessages = async () => {
      try {
        const res = await fetch(`/api/chats/${chatId}/messages`, { headers: { Authorization: `Bearer ${token}` } })
        if (res.ok) {
          const data = await res.json()
          setMessages(data.messages || [])
          // find other participant
          // fetch chat participants
          const chatsRes = await fetch('/api/chats', { headers: { Authorization: `Bearer ${token}` } })
          if (chatsRes.ok) {
            const list = await chatsRes.json()
            const chat = list.chats.find((c:any) => c.id === chatId)
            const otherP = chat.participants.find((p:any) => p.userId !== parsed.id)?.user
            setOther(otherP)
          }
        } else {
          console.error('Failed to load messages')
        }
      } catch (err) { console.error(err) }
    }

    fetchMessages()
    const iv = setInterval(fetchMessages, 3000)
    return () => clearInterval(iv)
  }, [chatId, router])

  useEffect(() => { listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' }) }, [messages])

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => { setFile(e.target.files?.[0] ?? null) }

  const sendMessage = async () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (!token) { router.push('/auth/login'); return }

    let fileUrl = null
    let fileType = null
    if (file) {
      const fd = new FormData()
      fd.append('file', file)
      const up = await fetch('/api/files/upload', { method: 'POST', body: fd })
      if (up.ok) {
        const d = await up.json()
        fileUrl = d.url
        fileType = file.type
      }
    }

    await fetch(`/api/chats/${chatId}/messages`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ text, fileUrl, fileType }) })
    setText('')
    setFile(null)
    // refresh
    const res = await fetch(`/api/chats/${chatId}/messages`, { headers: { Authorization: `Bearer ${token}` } })
    if (res.ok) { const data = await res.json(); setMessages(data.messages || []) }
  }

  if (!user) return <div className="flex items-center justify-center min-h-screen">Loading...</div>

  return (
    <div className={`min-h-screen p-6 ${isDark ? 'bg-slate-900 text-slate-200' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">{other?.name || 'Conversation'}</h2>
            <p className="text-sm text-slate-400">{other?.email}</p>
          </div>
        </div>

        <div ref={listRef} className={`rounded-2xl p-4 ${isDark ? 'bg-slate-800' : 'bg-white'} h-[60vh] overflow-auto border`}> 
          {messages.map((m) => (
            <div key={m.id} className={`mb-3 ${m.senderId === user.id ? 'text-right' : ''}`}>
              <div className={`inline-block rounded-2xl px-4 py-2 ${m.senderId === user.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                {m.text}
                {m.fileUrl && (
                  <div className="mt-2">
                    {m.fileType?.startsWith('image') ? <img src={m.fileUrl} className="max-h-40 rounded" /> : <a href={m.fileUrl} className="underline">Download file</a>}
                  </div>
                )}
              </div>
              <div className="text-xs text-slate-400 mt-1">{new Date(m.createdAt).toLocaleString()}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl p-4 bg-white border flex items-center gap-3">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message" className="flex-1 rounded-xl border px-4 py-2" />
          <input type="file" onChange={handleFile} />
          <button onClick={sendMessage} className="px-4 py-2 bg-blue-600 text-white rounded-xl">Send</button>
        </div>
      </div>
    </div>
  )
}
