import { Module } from '@nestjs/common'
import { InscriptionsService } from './inscriptions.service'
import { InscriptionsResolver } from './inscriptions.resolver'

@Module({
  providers: [InscriptionsResolver, InscriptionsService],
  exports: [InscriptionsService],
})
export class InscriptionsModule {}
