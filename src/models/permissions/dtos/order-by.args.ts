import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { UtilisateurOrderByRelationAggregateInput } from 'src/models/utilisateurs/dtos/order-by.args'

@InputType()
export class PermissionOrderByWithRelationInputStrict
  implements RestrictProperties<PermissionOrderByWithRelationInputStrict, Prisma.PermissionOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  role: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  label: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  slug: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => UtilisateurOrderByRelationAggregateInput, { nullable: true })
  utilisateurs: UtilisateurOrderByRelationAggregateInput
}


@InputType()
export class PermissionOrderByWithRelationInput extends PartialType(
  PermissionOrderByWithRelationInputStrict,
) { }

@InputType()
export class PermissionOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
