import { InputType, PickType } from '@nestjs/graphql'
import { Inscription } from '../entity/inscription.entity'

@InputType()
export class CreateInscriptionInput extends PickType(Inscription,[],InputType) {}

