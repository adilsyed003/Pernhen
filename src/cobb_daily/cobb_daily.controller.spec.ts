import { Test, TestingModule } from '@nestjs/testing';
import { CobbDailyController } from './cobb_daily.controller';

describe('CobbDailyController', () => {
  let controller: CobbDailyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CobbDailyController],
    }).compile();

    controller = module.get<CobbDailyController>(CobbDailyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
