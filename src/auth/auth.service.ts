import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {


  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prisma:PrismaService
  ) {}



  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }


  async getdetailstoAdmin(email:string,password:string,role:Role){
    const user = await this.userService.findOneByEmail(email);
    if(user.role=='ADMIN'){
      return await this.prisma.requests.findMany({});
    }
  }



  async login(user: any): Promise<any> {
    const payload = { email: user.email, sub: user.id };
    const access_token = this.jwtService.sign(payload);
    const userdetails = await this.prisma.user.findUnique({
      where: {
        email: user.email
      }
    });
  
    if (userdetails.role !== 'ADMIN') {
      return {
        access_token,
        user_details: userdetails
      };
    }
  
    return {
      requests: await this.getdetailstoAdmin(userdetails.email, userdetails.password, userdetails.role),
      access_token,
      user_details: userdetails
    };
  }


  
  async register(email: string, password: string,role:Role) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userService.createUser(email,hashedPassword,role);
  }


  async requestaccess(email:string ,password: string,role:Role){
    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.prisma.requests.create({
      data:{
        email,
        password:hashedPassword,
        role
      }
    })
  }

  async approve(id:string){
    const user_req=await this.prisma.requests.findUnique({
      where:{
        id:id
      }
    })
    const user = await this.userService.findOneByEmail(user_req.email);
    if(!user){
     const user_new= await this.userService.createUser(
       user_req.email,
       user_req.password,
       user_req.role
      )

      await this.prisma.requests.delete({
        where:{
          id:id
        }
      })
      return user_new;
    }
  }
  async deleteuser(id:string){
    return this.prisma.requests.delete({
     where:{
      id:id
     }
    })
  }
  async requestsdetails(){
    return await this.prisma.requests.findMany({});
  }
  
}
