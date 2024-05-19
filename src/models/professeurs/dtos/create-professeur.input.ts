import { Field, InputType, PickType } from '@nestjs/graphql';
import { Professeur } from '../entity/professeur.entity';
import { UtilisateurWithAccount } from 'src/models/utilisateurs/dtos/create-utilisateur.input';

@InputType()
export class CreateProfesseurWithProfileInput extends Professeur {
  @Field()
  profile: UtilisateurWithAccount;
}
@InputType()
export class CreateProfesseurInput extends PickType(
  CreateProfesseurWithProfileInput,
  ['profile'],
  InputType,
) {}
