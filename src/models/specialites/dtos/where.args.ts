import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class SpecialiteWhereUniqueInput {
  id: number
}

@InputType()
export class SpecialiteWhereInputStrict implements RestrictProperties<SpecialiteWhereInputStrict, Prisma.SpecialiteWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: SpecialiteWhereInput[]
  OR: SpecialiteWhereInput[]
  NOT: SpecialiteWhereInput[]
}

@InputType()
export class SpecialiteWhereInput extends PartialType(
  SpecialiteWhereInputStrict,
) {}

@InputType()
export class SpecialiteListRelationFilter {
  every?: SpecialiteWhereInput
  some?: SpecialiteWhereInput
  none?: SpecialiteWhereInput
}

@InputType()
export class SpecialiteRelationFilter {
  is?: SpecialiteWhereInput
  isNot?: SpecialiteWhereInput
}
