import { CreateAnneeScolaireInput } from './create-annee-scolaire.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { AnneeScolaire } from '@prisma/client';

@InputType()
export class UpdateAnneeScolaireInput extends PartialType(
  CreateAnneeScolaireInput,
) {
  id: AnneeScolaire['id'];
}
