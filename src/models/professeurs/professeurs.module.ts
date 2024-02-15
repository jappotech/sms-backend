import { Module } from '@nestjs/common';
import { ProfesseursService } from './professeurs.service';
import { ProfesseursResolver } from './professeurs.resolver';
import { UtilisateursModule } from '../utilisateurs/utilisateurs.module';

@Module({
  imports: [UtilisateursModule],
  providers: [ProfesseursResolver, ProfesseursService],
  exports: [ProfesseursService],
})
export class ProfesseursModule {}
