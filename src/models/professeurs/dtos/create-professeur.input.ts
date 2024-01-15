import { InputType, PickType } from '@nestjs/graphql'
import { Professeur } from '../entity/professeur.entity'

@InputType()
export class CreateProfesseurInput extends PickType(Professeur,[],InputType) {}

