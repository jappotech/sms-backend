import { Module } from '@nestjs/common'
import { EmploiDuTempsService } from './emploi-du-temps.service'
import { EmploiDuTempsResolver } from './emploi-du-temps.resolver'

@Module({
  providers: [EmploiDuTempsResolver, EmploiDuTempsService],
  exports: [EmploiDuTempsService],
})
export class EmploiDuTempsModule {}
