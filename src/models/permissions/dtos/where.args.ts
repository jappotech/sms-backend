import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class PermissionWhereUniqueInput {
  id: number
}

@InputType()
export class PermissionWhereInputStrict implements RestrictProperties<PermissionWhereInputStrict, Prisma.PermissionWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: PermissionWhereInput[]
  OR: PermissionWhereInput[]
  NOT: PermissionWhereInput[]
}

@InputType()
export class PermissionWhereInput extends PartialType(
  PermissionWhereInputStrict,
) {}

@InputType()
export class PermissionListRelationFilter {
  every?: PermissionWhereInput
  some?: PermissionWhereInput
  none?: PermissionWhereInput
}

@InputType()
export class PermissionRelationFilter {
  is?: PermissionWhereInput
  isNot?: PermissionWhereInput
}
