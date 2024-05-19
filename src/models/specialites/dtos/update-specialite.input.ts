import { CreateSpecialiteInput } from './create-specialite.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Specialite } from '@prisma/client';

@InputType()
export class UpdateSpecialiteInput extends PartialType(CreateSpecialiteInput) {
  id: Specialite['id'];
}
