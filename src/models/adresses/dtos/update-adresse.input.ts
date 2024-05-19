import { CreateAdresseInput } from './create-adresse.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Adresse } from '@prisma/client';

@InputType()
export class UpdateAdresseInput extends PartialType(CreateAdresseInput) {
  id: Adresse['id'];
}
