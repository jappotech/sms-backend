import { InputType, PickType } from '@nestjs/graphql'
import { Inscription } from '../entity/inscription.entity'

@InputType()
export class CreateInscriptionInput extends PickType(
  Inscription,
  ['activiteProfessionnel', 'autreEtablissement', 'classeId', 'dernierDiplome', 'diplomeId', 'etudiantId', 'niveau', 'premiereInscription', 'reference', 'statut'],
  InputType
) { }

