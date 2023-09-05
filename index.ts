import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: 'Cris',
  //     email: 'cris@prisma.io',
  //     posts: {
  //       create: { title: 'É um otááárioo' },
  //     },
  //     profile: {
  //       create: { bio: "I'm a witch" },
  //     },
  //   },
  // })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.dir(allUsers, { depth: null })

  // const post = await prisma.post.update({
  //   where: { id: 1 },
  //   data: { content: 'Primeiro post nessa budega', published: true },
  // })
  // console.log(post)
  // console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })