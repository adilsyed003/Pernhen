import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { AuthGuards } from './guards/auth-guard';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'yourSecretKey',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    PrismaService,
    UserService,
    LocalStrategy,
    AuthGuards
  ],
  controllers: [AuthController],
})
export class AuthModule {}
