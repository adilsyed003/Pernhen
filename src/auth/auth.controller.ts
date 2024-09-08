import { Body, Controller, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ReqUserDto } from './dto/request.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  // @UseGuards(LocalAuthGuard)
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.authService.validateUser(loginUserDto.email, loginUserDto.password);
    if (!user) {
     
    }
    return this.authService.login(user);
  }

  @Post('finduser')
  async finduser(@Body() loginUserDto:LoginUserDto){
    const user = await this.authService.validateUser(loginUserDto.email, loginUserDto.password);
    if(!user) {
      return {"newuser":true}
    }
    return {details:await this.authService.login(user),"newuser":false};
  }
  

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(
      createUserDto.email,
      createUserDto.password,
      createUserDto.role
    );
  }

  @Post('approved')
  async approve_details(@Body() param:any)
  {
    return this.authService.approve(param.id);
  }

  @Post('deletereq')
  async remove_request(@Body() param:any) {
    return this.authService.deleteuser(param.id)
  }

  @Post('request')
  async requestaccess(@Body() reqDto:ReqUserDto){
    return this.authService.requestaccess(
      reqDto.email,
      reqDto.password,
      reqDto.role
    )
  }

  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
