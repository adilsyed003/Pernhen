import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuards implements CanActivate {
  constructor(private readonly jwtservice:JwtService){}

  canActivate(context: ExecutionContext): boolean  {
      const req=context.switchToHttp().getRequest();
      const authHeader=req.headers.authorization;

      if(!authHeader){
        throw new UnauthorizedException('Authourization Header is missing')
      }

      const token=authHeader.split(' ')[1];

      try{
        const decodedToken=this.jwtservice.verify(token);
        req.user=decodedToken;
        return true;
      }catch(err){
        throw new UnauthorizedException('Invalid Token');
      }
  }
}