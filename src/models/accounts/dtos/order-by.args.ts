import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class AccountOrderByWithRelationInputStrict
  implements RestrictProperties<AccountOrderByWithRelationInputStrict, Prisma.AccountOrderByWithRelationInput>
{

  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  username: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  password: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  roles: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  isActive: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  userId: Prisma.SortOrder
}


@InputType()
export class AccountOrderByWithRelationInput extends PartialType(
  AccountOrderByWithRelationInputStrict,
) {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  username: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  password: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  roles: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  isActive: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  userId: Prisma.SortOrder
}

@InputType()
export class AccountOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
