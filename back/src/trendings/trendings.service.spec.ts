import { Test, TestingModule } from '@nestjs/testing';
import { TrendingsService } from './trendings.service';

describe('TrendingsService', () => {
  let service: TrendingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrendingsService],
    }).compile();

    service = module.get<TrendingsService>(TrendingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
