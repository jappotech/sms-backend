import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class InscriptionWhereUniqueInput {
  id: number
}

@InputType()
export class InscriptionWhereInputStrict implements RestrictProperties<InscriptionWhereInputStrict, Prisma.InscriptionWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: InscriptionWhereInput[]
  OR: InscriptionWhereInput[]
  NOT: InscriptionWhereInput[]
}

@InputType()
export class InscriptionWhereInput extends PartialType(
  InscriptionWhereInputStrict,
) {}

@InputType()
export class InscriptionListRelationFilter {
  every?: InscriptionWhereInput
  some?: InscriptionWhereInput
  none?: InscriptionWhereInput
}

@InputType()
export class InscriptionRelationFilter {
  is?: InscriptionWhereInput
  isNot?: InscriptionWhereInput
}
