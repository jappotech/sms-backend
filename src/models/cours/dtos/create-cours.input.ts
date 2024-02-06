import { InputType, PickType } from '@nestjs/graphql'
import { Cours } from '../entity/cours.entity'

@InputType()
export class CreateCoursInput extends PickType(Cours, ['classeId', 'dateDebut', 'dateFin', 'description', 'heureDebut', 'heureFin', 'matiereId', 'nom', 'professeurId', 'salleId', 'anneeScolaireId'], InputType) { }

