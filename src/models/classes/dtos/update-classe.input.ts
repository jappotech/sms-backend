import { CreateClasseInput } from './create-classe.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Classe } from '@prisma/client'

@InputType()
export class UpdateClasseInput extends PartialType(CreateClasseInput) {
  id: Classe['id']
}
