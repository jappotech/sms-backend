import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class DiplomeWhereUniqueInput {
  id: number
}

@InputType()
export class DiplomeWhereInputStrict implements RestrictProperties<DiplomeWhereInputStrict, Prisma.DiplomeWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: DiplomeWhereInput[]
  OR: DiplomeWhereInput[]
  NOT: DiplomeWhereInput[]
}

@InputType()
export class DiplomeWhereInput extends PartialType(
  DiplomeWhereInputStrict,
) {}

@InputType()
export class DiplomeListRelationFilter {
  every?: DiplomeWhereInput
  some?: DiplomeWhereInput
  none?: DiplomeWhereInput
}

@InputType()
export class DiplomeRelationFilter {
  is?: DiplomeWhereInput
  isNot?: DiplomeWhereInput
}
