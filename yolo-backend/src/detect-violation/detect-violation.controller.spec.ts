import { Test, TestingModule } from '@nestjs/testing';
import { DetectViolationController } from './detect-violation.controller';

describe('DetectViolationController', () => {
  let controller: DetectViolationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetectViolationController],
    }).compile();

    controller = module.get<DetectViolationController>(DetectViolationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
