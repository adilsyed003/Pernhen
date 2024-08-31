import { Module } from '@nestjs/common';
import { CobbDailyController } from './cobb_daily.controller';
import { CobbDailyService } from './cobb_daily.service';

@Module({
  controllers: [CobbDailyController],
  providers: [CobbDailyService]
})
export class CobbDailyModule {}
