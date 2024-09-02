import { Body, Controller, Get ,Post} from '@nestjs/common';
import { CobbDailyService } from './cobb_daily.service';
import { CobbDailyDto } from './Dto';

@Controller('cobb-daily')
export class CobbDailyController {
    constructor(private readonly cobbService:CobbDailyService){}
    @Post('new')
    async newDay(@Body() cobbdto:CobbDailyDto){
        return this.cobbService.addDayDetails(cobbdto);
    }

    @Get('all')
    async alldays(){
        return this.cobbService.alldays();
    }

    
}
