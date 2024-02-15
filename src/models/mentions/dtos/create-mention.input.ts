import { Field, InputType, PickType } from '@nestjs/graphql';
import { Mention } from '../entity/mention.entity';
import { CreateSpecialiteInput } from 'src/models/specialites/dtos/create-specialite.input';

@InputType()
export class CreateMentionWithSpecialitesInput extends Mention {
  @Field({ nullable: true })
  specialites: CreateSpecialiteInput[];
}
@InputType()
export class CreateMentionInput extends PickType(
  CreateMentionWithSpecialitesInput,
  ['nom', 'domaineId', 'specialites'],
  InputType,
) {}
