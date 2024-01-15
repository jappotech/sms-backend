import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class ProfesseurWhereUniqueInput {
  id: number
}

@InputType()
export class ProfesseurWhereInputStrict implements RestrictProperties<ProfesseurWhereInputStrict, Prisma.ProfesseurWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ProfesseurWhereInput[]
  OR: ProfesseurWhereInput[]
  NOT: ProfesseurWhereInput[]
}

@InputType()
export class ProfesseurWhereInput extends PartialType(
  ProfesseurWhereInputStrict,
) {}

@InputType()
export class ProfesseurListRelationFilter {
  every?: ProfesseurWhereInput
  some?: ProfesseurWhereInput
  none?: ProfesseurWhereInput
}

@InputType()
export class ProfesseurRelationFilter {
  is?: ProfesseurWhereInput
  isNot?: ProfesseurWhereInput
}
