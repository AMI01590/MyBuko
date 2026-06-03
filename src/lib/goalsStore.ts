type Goal = {
  id: string
  userId: string
  title: string
  description?: string
  category?: string
  targetDate?: string | null
  budget?: number | null
  priority?: string
  difficulty?: string
  location?: string
  tags?: string[]
  status?: string
  progress?: number
  createdAt: string
}

const store = new Map<string, Goal>()

export function createGoal(data: Partial<Goal>) {
  const id = String(Date.now())
  const goal: Goal = {
    id,
    userId: data.userId || '',
    title: data.title || 'Untitled',
    description: data.description || '',
    category: data.category || 'General',
    targetDate: data.targetDate || null,
    budget: data.budget ?? null,
    priority: data.priority || 'Medium',
    difficulty: data.difficulty || 'Medium',
    location: data.location || '',
    tags: data.tags || [],
    status: data.status || 'Not Started',
    progress: data.progress ?? 0,
    createdAt: new Date().toISOString(),
  }
  store.set(id, goal)
  return goal
}

export function getGoal(id: string) {
  return store.get(id) || null
}

export function updateGoal(id: string, updates: Partial<Goal>) {
  const existing = store.get(id)
  if (!existing) return null

  const updated: Goal = {
    ...existing,
    ...updates,
    userId: existing.userId,
    tags: updates.tags ?? existing.tags,
  }

  store.set(id, updated)
  return updated
}

export function listGoals(userId?: string) {
  if (!userId) return []
  return Array.from(store.values()).filter(goal => goal.userId === userId)
}
