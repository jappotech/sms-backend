import { CreateUniteEnseignementInput } from './create-unite-enseignement.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { UniteEnseignement } from '@prisma/client'

@InputType()
export class UpdateUniteEnseignementInput extends PartialType(CreateUniteEnseignementInput) {
  id: UniteEnseignement['id']
}
