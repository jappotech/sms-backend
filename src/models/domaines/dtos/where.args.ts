import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class DomaineWhereUniqueInput {
  id: number
}

@InputType()
export class DomaineWhereInputStrict implements RestrictProperties<DomaineWhereInputStrict, Prisma.DomaineWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: DomaineWhereInput[]
  OR: DomaineWhereInput[]
  NOT: DomaineWhereInput[]
}

@InputType()
export class DomaineWhereInput extends PartialType(
  DomaineWhereInputStrict,
) {}

@InputType()
export class DomaineListRelationFilter {
  every?: DomaineWhereInput
  some?: DomaineWhereInput
  none?: DomaineWhereInput
}

@InputType()
export class DomaineRelationFilter {
  is?: DomaineWhereInput
  isNot?: DomaineWhereInput
}
