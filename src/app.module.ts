import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CobbDailyModule } from './cobb_daily/cobb_daily.module';

@Module({
  imports: [CobbDailyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
