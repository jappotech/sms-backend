import { CreateDiplomeInput } from './create-diplome.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Diplome } from '@prisma/client';

@InputType()
export class UpdateDiplomeInput extends PartialType(CreateDiplomeInput) {
  id: Diplome['id'];
}
