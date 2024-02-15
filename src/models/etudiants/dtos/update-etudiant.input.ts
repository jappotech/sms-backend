import { CreateEtudiantInput } from './create-etudiant.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Etudiant } from '@prisma/client';

@InputType()
export class UpdateEtudiantInput extends PartialType(CreateEtudiantInput) {
  id: Etudiant['id'];
}
