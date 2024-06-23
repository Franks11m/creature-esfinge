import { Test, TestingModule } from '@nestjs/testing';
import { EsfingeController } from './esfinge.controller';
import { EsfingeService } from './esfinge.service';

describe('EsfingeController', () => {
  let controller: EsfingeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EsfingeController],
      providers: [EsfingeService],
    }).compile();

    controller = module.get<EsfingeController>(EsfingeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
