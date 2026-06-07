import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
try {
  const goals = await prisma.goal.findMany({ where: { visibility: 'Public' }, take: 10 })
  console.log(JSON.stringify(goals, null, 2))
} finally {
  await prisma.$disconnect()
}
