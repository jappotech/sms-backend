import { Module } from '@nestjs/common'
import { UniteEnseignementsService } from './unite-enseignements.service'
import { UniteEnseignementsResolver } from './unite-enseignements.resolver'

@Module({
  providers: [UniteEnseignementsResolver, UniteEnseignementsService],
  exports: [UniteEnseignementsService],
})
export class UniteEnseignementsModule {}
