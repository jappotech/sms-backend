import { InputType, PickType } from '@nestjs/graphql'
import { Mention } from '../entity/mention.entity'

@InputType()
export class CreateMentionInput extends PickType(Mention, ['domaineId', 'nom'], InputType) { }

