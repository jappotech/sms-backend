import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class EmploiDuTempsWhereUniqueInput {
  id: number
}

@InputType()
export class EmploiDuTempsWhereInputStrict implements RestrictProperties<EmploiDuTempsWhereInputStrict, Prisma.EmploiDuTempsWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: EmploiDuTempsWhereInput[]
  OR: EmploiDuTempsWhereInput[]
  NOT: EmploiDuTempsWhereInput[]
}

@InputType()
export class EmploiDuTempsWhereInput extends PartialType(
  EmploiDuTempsWhereInputStrict,
) {}

@InputType()
export class EmploiDuTempsListRelationFilter {
  every?: EmploiDuTempsWhereInput
  some?: EmploiDuTempsWhereInput
  none?: EmploiDuTempsWhereInput
}

@InputType()
export class EmploiDuTempsRelationFilter {
  is?: EmploiDuTempsWhereInput
  isNot?: EmploiDuTempsWhereInput
}
