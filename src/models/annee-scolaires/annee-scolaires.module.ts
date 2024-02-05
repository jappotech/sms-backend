import { Module } from '@nestjs/common'
import { AnneeScolairesService } from './annee-scolaires.service'
import { AnneeScolairesResolver } from './annee-scolaires.resolver'

@Module({
  providers: [AnneeScolairesResolver, AnneeScolairesService],
  exports: [AnneeScolairesService],
})
export class AnneeScolairesModule {}
