import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class PaiementWhereUniqueInput {
  id: number
}

@InputType()
export class PaiementWhereInputStrict implements RestrictProperties<PaiementWhereInputStrict, Prisma.PaiementWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: PaiementWhereInput[]
  OR: PaiementWhereInput[]
  NOT: PaiementWhereInput[]
}

@InputType()
export class PaiementWhereInput extends PartialType(
  PaiementWhereInputStrict,
) {}

@InputType()
export class PaiementListRelationFilter {
  every?: PaiementWhereInput
  some?: PaiementWhereInput
  none?: PaiementWhereInput
}

@InputType()
export class PaiementRelationFilter {
  is?: PaiementWhereInput
  isNot?: PaiementWhereInput
}
