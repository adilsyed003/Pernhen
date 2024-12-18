import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CobbDailyModule } from './cobb_daily/cobb_daily.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CobbDailyModule, AuthModule, UserModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
