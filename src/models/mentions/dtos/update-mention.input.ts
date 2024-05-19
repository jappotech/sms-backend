import { CreateMentionInput } from './create-mention.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Mention } from '@prisma/client';

@InputType()
export class UpdateMentionInput extends PartialType(CreateMentionInput) {
  id: Mention['id'];
}
