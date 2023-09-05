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
}