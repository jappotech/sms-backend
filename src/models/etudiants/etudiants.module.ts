import { Module } from '@nestjs/common'
import { EtudiantsService } from './etudiants.service'
import { EtudiantsResolver } from './etudiants.resolver'
import { UtilisateursService } from '../utilisateurs/utilisateurs.service'
import { UtilisateursModule } from '../utilisateurs/utilisateurs.module'

@Module({
  imports: [UtilisateursModule],
  providers: [EtudiantsResolver, EtudiantsService],
  exports: [EtudiantsService],
})
export class EtudiantsModule { }
