import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class ReseauSocialWhereUniqueInput {
  id: number
}

@InputType()
export class ReseauSocialWhereInputStrict implements RestrictProperties<ReseauSocialWhereInputStrict, Prisma.ReseauSocialWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ReseauSocialWhereInput[]
  OR: ReseauSocialWhereInput[]
  NOT: ReseauSocialWhereInput[]
}

@InputType()
export class ReseauSocialWhereInput extends PartialType(
  ReseauSocialWhereInputStrict,
) {}

@InputType()
export class ReseauSocialListRelationFilter {
  every?: ReseauSocialWhereInput
  some?: ReseauSocialWhereInput
  none?: ReseauSocialWhereInput
}

@InputType()
export class ReseauSocialRelationFilter {
  is?: ReseauSocialWhereInput
  isNot?: ReseauSocialWhereInput
}
