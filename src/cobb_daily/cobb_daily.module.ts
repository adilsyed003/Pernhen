import { Module } from '@nestjs/common';
import { CobbDailyController } from './cobb_daily.controller';
import { CobbDailyService } from './cobb_daily.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [CobbDailyController],
  providers: [CobbDailyService]
})
export class CobbDailyModule {}
