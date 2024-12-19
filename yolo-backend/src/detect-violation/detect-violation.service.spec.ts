import { Test, TestingModule } from '@nestjs/testing';
import { DetectViolationService } from './detect-violation.service';

describe('DetectViolationService', () => {
  let service: DetectViolationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetectViolationService],
    }).compile();

    service = module.get<DetectViolationService>(DetectViolationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
