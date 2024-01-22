import { Module } from '@nestjs/common'
import { SallesService } from './salles.service'
import { SallesResolver } from './salles.resolver'

@Module({
  providers: [SallesResolver, SallesService],
  exports: [SallesService],
})
export class SallesModule {}
