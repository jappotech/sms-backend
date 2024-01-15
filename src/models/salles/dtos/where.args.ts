import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class SalleWhereUniqueInput {
  id: number
}

@InputType()
export class SalleWhereInputStrict implements RestrictProperties<SalleWhereInputStrict, Prisma.SalleWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: SalleWhereInput[]
  OR: SalleWhereInput[]
  NOT: SalleWhereInput[]
}

@InputType()
export class SalleWhereInput extends PartialType(
  SalleWhereInputStrict,
) {}

@InputType()
export class SalleListRelationFilter {
  every?: SalleWhereInput
  some?: SalleWhereInput
  none?: SalleWhereInput
}

@InputType()
export class SalleRelationFilter {
  is?: SalleWhereInput
  isNot?: SalleWhereInput
}
