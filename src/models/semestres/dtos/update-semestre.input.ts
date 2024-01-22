import { CreateSemestreInput } from './create-semestre.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Semestre } from '@prisma/client'

@InputType()
export class UpdateSemestreInput extends PartialType(CreateSemestreInput) {
  id: Semestre['id']
}
