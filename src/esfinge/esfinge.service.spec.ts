import { Test, TestingModule } from '@nestjs/testing';
import { EsfingeService } from './esfinge.service';

describe('EsfingeService', () => {
  let service: EsfingeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EsfingeService],
    }).compile();

    service = module.get<EsfingeService>(EsfingeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
