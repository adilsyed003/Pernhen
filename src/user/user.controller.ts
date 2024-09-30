import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userservice:UserService){}
    @Get('getAll')
    async findAll(){
        return this.userservice.findAll();
    }
    
}
