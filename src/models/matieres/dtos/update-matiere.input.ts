import { CreateMatiereInput } from './create-matiere.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Matiere } from '@prisma/client';

@InputType()
export class UpdateMatiereInput extends PartialType(CreateMatiereInput) {
  id: Matiere['id'];
}
