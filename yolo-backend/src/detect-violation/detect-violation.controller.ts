import { Body, Controller, Get, Post } from '@nestjs/common';
import { DetectViolationService } from './detect-violation.service';

@Controller('detect-violation')
export class DetectViolationController {
    constructor(private readonly detectViolationService: DetectViolationService){} 

     @Post('/')
      detect_rider(@Body('img') img: string) {
          return this.detectViolationService.detect_violation(img)
        }
}
