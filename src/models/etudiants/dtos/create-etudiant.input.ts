import { Field, InputType, PickType } from '@nestjs/graphql';
import { Etudiant } from '../entity/etudiant.entity';
import { UtilisateurWithAccount } from 'src/models/utilisateurs/dtos/create-utilisateur.input';
import { Utilisateur } from 'src/models/utilisateurs/entity/utilisateur.entity';

@InputType()
export class CreateEtudiantWithProfileInput extends Etudiant {
  @Field()
  profile: UtilisateurWithAccount;

  @Field({ nullable: true })
  classeId: number;
}

@InputType()
export class CreateEtudiantInput extends PickType(
  CreateEtudiantWithProfileInput,
  [
    'anneeBaccaleaureat',
    'baccaleaureat',
    'feuillePresencesId',
    'ine',
    'profile',
    'classeId'
  ],
  InputType,
) { }
