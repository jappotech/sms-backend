import { InputType, PickType } from '@nestjs/graphql'
import { Specialite } from '../entity/specialite.entity'

@InputType()
export class CreateSpecialiteInput extends PickType(Specialite, ['mentionId', 'nom'], InputType) { }

