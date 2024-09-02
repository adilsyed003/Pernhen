import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/auth/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  async createUser(email: string, password: string) {
    return this.prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }
}
