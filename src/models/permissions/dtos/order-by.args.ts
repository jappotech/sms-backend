import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class PermissionOrderByWithRelationInputStrict
  implements RestrictProperties<PermissionOrderByWithRelationInputStrict, Prisma.PermissionOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class PermissionOrderByWithRelationInput extends PartialType(
  PermissionOrderByWithRelationInputStrict,
) {}

@InputType()
export class PermissionOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
