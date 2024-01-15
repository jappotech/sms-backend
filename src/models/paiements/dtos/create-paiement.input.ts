import { InputType, PickType } from '@nestjs/graphql'
import { Paiement } from '../entity/paiement.entity'

@InputType()
export class CreatePaiementInput extends PickType(Paiement,[],InputType) {}

