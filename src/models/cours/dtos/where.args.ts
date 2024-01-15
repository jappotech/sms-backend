import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class CoursWhereUniqueInput {
  id: number
}

@InputType()
export class CoursWhereInputStrict implements RestrictProperties<CoursWhereInputStrict, Prisma.CoursWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: CoursWhereInput[]
  OR: CoursWhereInput[]
  NOT: CoursWhereInput[]
}

@InputType()
export class CoursWhereInput extends PartialType(
  CoursWhereInputStrict,
) {}

@InputType()
export class CoursListRelationFilter {
  every?: CoursWhereInput
  some?: CoursWhereInput
  none?: CoursWhereInput
}

@InputType()
export class CoursRelationFilter {
  is?: CoursWhereInput
  isNot?: CoursWhereInput
}
