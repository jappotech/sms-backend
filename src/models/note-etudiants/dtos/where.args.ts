import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class NoteEtudiantWhereUniqueInput {
  id: number
}

@InputType()
export class NoteEtudiantWhereInputStrict implements RestrictProperties<NoteEtudiantWhereInputStrict, Prisma.NoteEtudiantWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: NoteEtudiantWhereInput[]
  OR: NoteEtudiantWhereInput[]
  NOT: NoteEtudiantWhereInput[]
}

@InputType()
export class NoteEtudiantWhereInput extends PartialType(
  NoteEtudiantWhereInputStrict,
) {}

@InputType()
export class NoteEtudiantListRelationFilter {
  every?: NoteEtudiantWhereInput
  some?: NoteEtudiantWhereInput
  none?: NoteEtudiantWhereInput
}

@InputType()
export class NoteEtudiantRelationFilter {
  is?: NoteEtudiantWhereInput
  isNot?: NoteEtudiantWhereInput
}
