import { PrismaClient } from '@prisma/client'

export default class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUsers() {
    const users = await this.prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    return users;
  }

  async createUser(user: any) {
    const newUser = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        posts: {
          create: { title: user.posts.title },
        },
        profile: {
          create: { bio: user.bio },
        },
      },
    });
    return newUser;
  }
}