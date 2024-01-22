import { CreateSalleInput } from './create-salle.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Salle } from '@prisma/client'

@InputType()
export class UpdateSalleInput extends PartialType(CreateSalleInput) {
  id: Salle['id']
}
