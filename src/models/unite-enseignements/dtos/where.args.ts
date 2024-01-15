import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class UniteEnseignementWhereUniqueInput {
  id: number
}

@InputType()
export class UniteEnseignementWhereInputStrict implements RestrictProperties<UniteEnseignementWhereInputStrict, Prisma.UniteEnseignementWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: UniteEnseignementWhereInput[]
  OR: UniteEnseignementWhereInput[]
  NOT: UniteEnseignementWhereInput[]
}

@InputType()
export class UniteEnseignementWhereInput extends PartialType(
  UniteEnseignementWhereInputStrict,
) {}

@InputType()
export class UniteEnseignementListRelationFilter {
  every?: UniteEnseignementWhereInput
  some?: UniteEnseignementWhereInput
  none?: UniteEnseignementWhereInput
}

@InputType()
export class UniteEnseignementRelationFilter {
  is?: UniteEnseignementWhereInput
  isNot?: UniteEnseignementWhereInput
}
