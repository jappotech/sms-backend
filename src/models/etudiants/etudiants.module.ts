import { Module } from '@nestjs/common'
import { EtudiantsService } from './etudiants.service'
import { EtudiantsResolver } from './etudiants.resolver'

@Module({
  providers: [EtudiantsResolver, EtudiantsService],
  exports: [EtudiantsService],
})
export class EtudiantsModule {}
