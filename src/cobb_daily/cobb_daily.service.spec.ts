import { Test, TestingModule } from '@nestjs/testing';
import { CobbDailyService } from './cobb_daily.service';

describe('CobbDailyService', () => {
  let service: CobbDailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CobbDailyService],
    }).compile();

    service = module.get<CobbDailyService>(CobbDailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
