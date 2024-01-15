import { CreateCoursInput } from './create-cours.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Cours } from '@prisma/client'

@InputType()
export class UpdateCoursInput extends PartialType(CreateCoursInput) {
  id: Cours['id']
}
