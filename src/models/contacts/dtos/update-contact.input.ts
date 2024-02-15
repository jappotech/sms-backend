import { CreateContactInput } from './create-contact.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Contact } from '@prisma/client';

@InputType()
export class UpdateContactInput extends PartialType(CreateContactInput) {
  id: Contact['id'];
}
