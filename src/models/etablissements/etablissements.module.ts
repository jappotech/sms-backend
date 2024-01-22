import { Module } from '@nestjs/common'
import { EtablissementsService } from './etablissements.service'
import { EtablissementsResolver } from './etablissements.resolver'

@Module({
  providers: [EtablissementsResolver, EtablissementsService],
  exports: [EtablissementsService],
})
export class EtablissementsModule {}
