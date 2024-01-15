import { CreateEtablissementInput } from './create-etablissement.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Etablissement } from '@prisma/client'

@InputType()
export class UpdateEtablissementInput extends PartialType(CreateEtablissementInput) {
  id: Etablissement['id']
}
