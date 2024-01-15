import { CreatePaiementInput } from './create-paiement.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Paiement } from '@prisma/client'

@InputType()
export class UpdatePaiementInput extends PartialType(CreatePaiementInput) {
  id: Paiement['id']
}
