export class CobbDailyDto {
    date: Date;
    day: number;
    week: number;
    quarantine_male: number;
    quarantine_female: number;
    mortality_male: number;
    mortality_female: number;
    recovery_male: number;
    recovery_female: number;
    total_number_male: number;
    total_number_female: number;
    Cummulative_mortality_fem: number;
    male_feed_gms_per_bird: number;
    female_feed_gms_per_bird: number;
    cleanup_time: string;
    h2o_consumption: number;
    floor_eggs: number;
    settable_eggs: number;
    broken: number;
    damage: number;
    softshells: number;
    large: number;
    small: number;
    abnormal: number;
    remarks: string;
  }