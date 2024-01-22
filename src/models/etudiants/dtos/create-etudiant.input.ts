import { Field, InputType, PickType } from '@nestjs/graphql'
import { Etudiant } from '../entity/etudiant.entity'
import { UtilisateurWithAccount } from 'src/models/utilisateurs/dtos/create-utilisateur.input'

@InputType()
export class CreateEtudiantWithProfileInput extends Etudiant {
  @Field()
  profile: UtilisateurWithAccount
}

@InputType()
export class CreateEtudiantInput extends PickType(
  CreateEtudiantWithProfileInput,
  ['anneeBaccaleaureat', 'baccaleaureat', 'feuillePresencesId', 'ine', 'profile', 'profileId'],
  InputType
) { }

