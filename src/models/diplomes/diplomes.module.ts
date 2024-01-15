import { Module } from '@nestjs/common'
import { DiplomesService } from './diplomes.service'
import { DiplomesResolver } from './diplomes.resolver'

@Module({
  providers: [DiplomesResolver, DiplomesService],
  exports: [DiplomesService],
})
export class DiplomesModule {}
