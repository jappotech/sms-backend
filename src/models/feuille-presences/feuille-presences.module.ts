import { Module } from '@nestjs/common'
import { FeuillePresencesService } from './feuille-presences.service'
import { FeuillePresencesResolver } from './feuille-presences.resolver'

@Module({
  providers: [FeuillePresencesResolver, FeuillePresencesService],
  exports: [FeuillePresencesService],
})
export class FeuillePresencesModule {}
