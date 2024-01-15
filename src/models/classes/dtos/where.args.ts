import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class ClasseWhereUniqueInput {
  id: number
}

@InputType()
export class ClasseWhereInputStrict implements RestrictProperties<ClasseWhereInputStrict, Prisma.ClasseWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ClasseWhereInput[]
  OR: ClasseWhereInput[]
  NOT: ClasseWhereInput[]
}

@InputType()
export class ClasseWhereInput extends PartialType(
  ClasseWhereInputStrict,
) {}

@InputType()
export class ClasseListRelationFilter {
  every?: ClasseWhereInput
  some?: ClasseWhereInput
  none?: ClasseWhereInput
}

@InputType()
export class ClasseRelationFilter {
  is?: ClasseWhereInput
  isNot?: ClasseWhereInput
}
