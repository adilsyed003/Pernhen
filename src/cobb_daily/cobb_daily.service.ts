import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CobbDailyDto } from './Dto';

@Injectable()
export class CobbDailyService {
    constructor(private readonly prisma:PrismaService){}

    async addDayDetails(cobbdto:CobbDailyDto):Promise<any>{
        const datadetails=await this.prisma.cobbDaily.create({
            data:{
                date: cobbdto.date,
                day: cobbdto.day,
                week: cobbdto.week,
                quarantine_male: cobbdto.quarantine_male,
                quarantine_female: cobbdto.quarantine_female,
                mortality_male: cobbdto.mortality_male,
                mortality_female: cobbdto.mortality_female,
                recovery_male: cobbdto.recovery_male,
                recovery_female:cobbdto.recovery_female,
                total_number_male:cobbdto.total_number_male,
                total_number_female: cobbdto.total_number_female,
                Cummulative_mortality_fem: cobbdto.Cummulative_mortality_fem,
                male_feed_gms_per_bird: cobbdto.male_feed_gms_per_bird,
                male_feed_total_kgm: ((cobbdto.male_feed_gms_per_bird*cobbdto.total_number_male)/1000),
                female_feed_gms_per_bird: cobbdto.female_feed_gms_per_bird,
                female_feed_total_kgm: ((cobbdto.female_feed_gms_per_bird*cobbdto.total_number_female)/1000),
                cleanup_time: cobbdto.cleanup_time,
                h2o_consumption: cobbdto.h2o_consumption,
                floor_eggs: cobbdto.floor_eggs,
                settable_eggs: cobbdto.settable_eggs,
                broken: cobbdto.broken,
                damage: cobbdto.damage,
                softshells:cobbdto.softshells,
                large: cobbdto.large,
                small:cobbdto.small,
                abnormal:cobbdto.abnormal,
                total_eggs: (cobbdto.floor_eggs+cobbdto.settable_eggs+cobbdto.large+cobbdto.small+cobbdto.abnormal+cobbdto.broken+cobbdto.damage+cobbdto.softshells),
                daily_production:(((cobbdto.floor_eggs+cobbdto.settable_eggs+cobbdto.large+cobbdto.small+cobbdto.abnormal+cobbdto.broken+cobbdto.damage+cobbdto.softshells)/cobbdto.total_number_female)*100),
                remarks: cobbdto.remarks,
            }
        })
        return datadetails;
    }

    async alldays(){
        return await this.prisma.cobbDaily.findMany({});
    }
}
