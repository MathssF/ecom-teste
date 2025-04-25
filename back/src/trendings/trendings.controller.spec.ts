import { Test, TestingModule } from '@nestjs/testing';
import { TrendingsController } from './trendings.controller';
import { TrendingsService } from './trendings.service';

describe('TrendingsController', () => {
  let controller: TrendingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrendingsController],
      providers: [TrendingsService],
    }).compile();

    controller = module.get<TrendingsController>(TrendingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
