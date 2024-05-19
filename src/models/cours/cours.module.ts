import { Module } from '@nestjs/common';
import { CoursService } from './cours.service';
import { CoursResolver } from './cours.resolver';

@Module({
  providers: [CoursResolver, CoursService],
  exports: [CoursService],
})
export class CoursModule {}
