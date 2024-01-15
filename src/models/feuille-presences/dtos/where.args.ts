import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class FeuillePresenceWhereUniqueInput {
  id: number
}

@InputType()
export class FeuillePresenceWhereInputStrict implements RestrictProperties<FeuillePresenceWhereInputStrict, Prisma.FeuillePresenceWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: FeuillePresenceWhereInput[]
  OR: FeuillePresenceWhereInput[]
  NOT: FeuillePresenceWhereInput[]
}

@InputType()
export class FeuillePresenceWhereInput extends PartialType(
  FeuillePresenceWhereInputStrict,
) {}

@InputType()
export class FeuillePresenceListRelationFilter {
  every?: FeuillePresenceWhereInput
  some?: FeuillePresenceWhereInput
  none?: FeuillePresenceWhereInput
}

@InputType()
export class FeuillePresenceRelationFilter {
  is?: FeuillePresenceWhereInput
  isNot?: FeuillePresenceWhereInput
}
