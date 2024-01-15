import { CreateDomaineInput } from './create-domaine.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Domaine } from '@prisma/client'

@InputType()
export class UpdateDomaineInput extends PartialType(CreateDomaineInput) {
  id: Domaine['id']
}
