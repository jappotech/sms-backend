import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class SemestreWhereUniqueInput {
  id: number
}

@InputType()
export class SemestreWhereInputStrict implements RestrictProperties<SemestreWhereInputStrict, Prisma.SemestreWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: SemestreWhereInput[]
  OR: SemestreWhereInput[]
  NOT: SemestreWhereInput[]
}

@InputType()
export class SemestreWhereInput extends PartialType(
  SemestreWhereInputStrict,
) {}

@InputType()
export class SemestreListRelationFilter {
  every?: SemestreWhereInput
  some?: SemestreWhereInput
  none?: SemestreWhereInput
}

@InputType()
export class SemestreRelationFilter {
  is?: SemestreWhereInput
  isNot?: SemestreWhereInput
}
