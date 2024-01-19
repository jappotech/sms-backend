import { InputType, PickType } from '@nestjs/graphql'
import { Etudiant } from '../entity/etudiant.entity'

@InputType()
export class CreateEtudiantInput extends PickType(
  Etudiant,
  ['anneeBaccaleaureat', 'baccaleaureat', 'feuillePresencesId', 'ine', 'profileId'],
  InputType
) { }

