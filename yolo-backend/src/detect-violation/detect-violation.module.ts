import { Module } from '@nestjs/common';
import { DetectViolationService } from './detect-violation.service';
import { DetectViolationController } from './detect-violation.controller';

@Module({
  providers: [DetectViolationService],
  controllers: [DetectViolationController]
})
export class DetectViolationModule {}
