import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userservice:UserService){}
    @Get('getAll')
    async findAll(){
        return this.userservice.findAll();
    }
}
