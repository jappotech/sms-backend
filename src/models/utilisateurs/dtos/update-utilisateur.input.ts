import { CreateUtilisateurInput } from './create-utilisateur.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Utilisateur } from '@prisma/client';

@InputType()
export class UpdateUtilisateurInput extends PartialType(
  CreateUtilisateurInput,
) {
  id: Utilisateur['id'];
}
