import { CreateProfesseurInput } from './create-professeur.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Professeur } from '@prisma/client';

@InputType()
export class UpdateProfesseurInput extends PartialType(CreateProfesseurInput) {
  id: Professeur['id'];
}
