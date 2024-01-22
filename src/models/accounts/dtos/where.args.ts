import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import { BoolFilter, DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'

@InputType()
export class AccountWhereUniqueInput {
  @Field(() => Number)
  id: number
}

@InputType()
export class AccountWhereInputStrict implements RestrictProperties<AccountWhereInputStrict, Prisma.AccountWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: number

  @Field(() => StringFilter, { nullable: true })
  uid: string

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: Date

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: string

  @Field(() => StringFilter, { nullable: true })
  username: string

  @Field(() => StringFilter, { nullable: true })
  password: string

  @Field(() => StringFilter, { nullable: true })
  roles: Prisma.EnumRoleNullableListFilter

  @Field(() => BoolFilter, { nullable: true })
  isActive: boolean

  @Field(() => IntFilter, { nullable: true })
  userId: number

  @Field(() => [AccountWhereInputStrict], { nullable: true })
  AND: AccountWhereInputStrict[]

  @Field(() => [AccountWhereInputStrict], { nullable: true })
  OR: AccountWhereInputStrict[]

  @Field(() => [AccountWhereInputStrict], { nullable: true })
  NOT: AccountWhereInputStrict[]
}

@InputType()
export class AccountWhereInput extends PartialType(
  AccountWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: number

  @Field(() => StringFilter, { nullable: true })
  uid: string

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: Date

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: string

  @Field(() => StringFilter, { nullable: true })
  username: string

  @Field(() => StringFilter, { nullable: true })
  password: string

  @Field(() => StringFilter, { nullable: true })
  roles: Prisma.EnumRoleNullableListFilter

  @Field(() => BoolFilter, { nullable: true })
  isActive: boolean

  @Field(() => IntFilter, { nullable: true })
  userId: number

  @Field(() => [AccountWhereInput], { nullable: true })
  AND: AccountWhereInput[]

  @Field(() => [AccountWhereInput], { nullable: true })
  OR: AccountWhereInput[]

  @Field(() => [AccountWhereInput], { nullable: true })
  NOT: AccountWhereInput[]
}

@InputType()
export class AccountListRelationFilter {
  // @Field(() => [AccountWhereInput], { nullable: true })
  every?: AccountWhereInput

  // @Field(() => [AccountWhereInput], { nullable: true })
  some?: AccountWhereInput

  // @Field(() => [AccountWhereInput], { nullable: true })
  none?: AccountWhereInput
}

@InputType()
export class AccountRelationFilter {
  // @Field(() => [AccountWhereInput], { nullable: true })
  is?: AccountWhereInput

  // @Field(() => [AccountWhereInput], { nullable: true })
  isNot?: AccountWhereInput
}
