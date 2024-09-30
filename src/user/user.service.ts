import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  async findOneById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  async createUser(userdto:CreateUserDto): Promise<any> {
    return this.prisma.user.create({
      data: {
        email: userdto.email,
        password: userdto.password,
        role: userdto.role,
      },
    });
  }
  async findAll() {
    try{
      return  this.prisma.user.findMany({})
    }
    catch(err){
      console.log("Error: " + err)
    }
  }
}
