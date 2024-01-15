import { Module } from '@nestjs/common'
import { ProfesseursService } from './professeurs.service'
import { ProfesseursResolver } from './professeurs.resolver'

@Module({
  providers: [ProfesseursResolver, ProfesseursService],
  exports: [ProfesseursService],
})
export class ProfesseursModule {}
