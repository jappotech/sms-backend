import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class AdresseWhereUniqueInput {
  id: number
}

@InputType()
export class AdresseWhereInputStrict implements RestrictProperties<AdresseWhereInputStrict, Prisma.AdresseWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: AdresseWhereInput[]
  OR: AdresseWhereInput[]
  NOT: AdresseWhereInput[]
}

@InputType()
export class AdresseWhereInput extends PartialType(
  AdresseWhereInputStrict,
) {}

@InputType()
export class AdresseListRelationFilter {
  every?: AdresseWhereInput
  some?: AdresseWhereInput
  none?: AdresseWhereInput
}

@InputType()
export class AdresseRelationFilter {
  is?: AdresseWhereInput
  isNot?: AdresseWhereInput
}
