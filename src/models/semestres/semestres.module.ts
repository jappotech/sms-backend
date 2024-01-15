import { Module } from '@nestjs/common'
import { SemestresService } from './semestres.service'
import { SemestresResolver } from './semestres.resolver'

@Module({
  providers: [SemestresResolver, SemestresService],
  exports: [SemestresService],
})
export class SemestresModule {}
