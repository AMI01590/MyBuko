import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const auth = req.headers.get('authorization') || ''
    const token = auth.replace('Bearer ', '')
    const verified = verifyToken(token)
    if (!verified) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json()
    const { followingId } = body
    if (!followingId) return NextResponse.json({ error: 'followingId required' }, { status: 400 })

    const existing = await prisma.follow.findUnique({ where: { followerId_followingId: { followerId: verified.userId, followingId } } }).catch(() => null)
    if (existing) return NextResponse.json({ ok: true })

    await prisma.follow.create({ data: { followerId: verified.userId, followingId } })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Follow error', err)
    return NextResponse.json({ error: 'Failed to follow' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const auth = req.headers.get('authorization') || ''
    const token = auth.replace('Bearer ', '')
    const verified = verifyToken(token)
    if (!verified) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { searchParams } = new URL(req.url)
    const followingId = searchParams.get('followingId')
    if (!followingId) return NextResponse.json({ error: 'followingId required' }, { status: 400 })

    await prisma.follow.delete({ where: { followerId_followingId: { followerId: verified.userId, followingId } } }).catch(() => null)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Unfollow error', err)
    return NextResponse.json({ error: 'Failed to unfollow' }, { status: 500 })
  }
}
