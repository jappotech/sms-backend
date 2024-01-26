import { Field, InputType, PickType } from '@nestjs/graphql'
import { Domaine } from '../entity/domaine.entity'
import { CreateMentionInput } from 'src/models/mentions/dtos/create-mention.input'


@InputType()
export class CreateDomaineWithMentionsInput extends Domaine {
  @Field({ nullable: true })
  mentions: CreateMentionInput[]
}

@InputType()
export class CreateDomaineInput extends PickType(CreateDomaineWithMentionsInput, ['nom', 'mentions'], InputType) { }

