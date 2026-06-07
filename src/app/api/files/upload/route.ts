import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()
    const file = form.get('file') as any
    if (!file) return NextResponse.json({ error: 'file is required' }, { status: 400 })

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    await fs.mkdir(uploadsDir, { recursive: true })
    const filename = `${Date.now()}-${(file.name || 'upload')}`.replace(/\s+/g, '-')
    const filepath = path.join(uploadsDir, filename)
    await fs.writeFile(filepath, buffer)

    const url = `/uploads/${filename}`
    return NextResponse.json({ url, filename })
  } catch (err) {
    console.error('File upload error', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
