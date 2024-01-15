import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class EtablissementWhereUniqueInput {
  id: number
}

@InputType()
export class EtablissementWhereInputStrict implements RestrictProperties<EtablissementWhereInputStrict, Prisma.EtablissementWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: EtablissementWhereInput[]
  OR: EtablissementWhereInput[]
  NOT: EtablissementWhereInput[]
}

@InputType()
export class EtablissementWhereInput extends PartialType(
  EtablissementWhereInputStrict,
) {}

@InputType()
export class EtablissementListRelationFilter {
  every?: EtablissementWhereInput
  some?: EtablissementWhereInput
  none?: EtablissementWhereInput
}

@InputType()
export class EtablissementRelationFilter {
  is?: EtablissementWhereInput
  isNot?: EtablissementWhereInput
}
