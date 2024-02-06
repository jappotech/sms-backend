import { InputType, PickType } from '@nestjs/graphql'
import { AnneeScolaire } from '../entity/annee-scolaire.entity'

@InputType()
export class CreateAnneeScolaireInput extends PickType(AnneeScolaire, ['nom', 'dateDebut', 'dateFin'], InputType) { }

