import { CreateAccountInput } from './create-account.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Account } from '@prisma/client';

@InputType()
export class UpdateAccountInput extends PartialType(CreateAccountInput) {
  id: Account['id'];
}
