import { CreateInscriptionInput } from './create-inscription.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Inscription } from '@prisma/client';

@InputType()
export class UpdateInscriptionInput extends PartialType(
  CreateInscriptionInput,
) {
  id: Inscription['id'];
}
