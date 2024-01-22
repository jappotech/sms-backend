import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { UtilisateurListRelationFilter } from 'src/models/utilisateurs/dtos/where.args'

@InputType()
export class PermissionWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class PermissionWhereInputStrict implements RestrictProperties<PermissionWhereInputStrict, Prisma.PermissionWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  role: Prisma.EnumRoleNullableListFilter

  @Field(() => StringFilter, { nullable: true })
  label: StringFilter

  @Field(() => StringFilter, { nullable: true })
  slug: StringFilter

  @Field(() => UtilisateurListRelationFilter, { nullable: true })
  utilisateurs: UtilisateurListRelationFilter

  @Field(() => [PermissionWhereInputStrict], { nullable: true })
  AND: PermissionWhereInput[]

  @Field(() => [PermissionWhereInputStrict], { nullable: true })
  OR: PermissionWhereInput[]

  @Field(() => [PermissionWhereInputStrict], { nullable: true })
  NOT: PermissionWhereInput[]
}

@InputType()
export class PermissionWhereInput extends PartialType(
  PermissionWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  role: Prisma.EnumRoleNullableListFilter

  @Field(() => StringFilter, { nullable: true })
  label: StringFilter

  @Field(() => StringFilter, { nullable: true })
  slug: StringFilter

  @Field(() => UtilisateurListRelationFilter, { nullable: true })
  utilisateurs: UtilisateurListRelationFilter

  @Field(() => [PermissionWhereInput], { nullable: true })
  AND: PermissionWhereInput[]

  @Field(() => [PermissionWhereInput], { nullable: true })
  OR: PermissionWhereInput[]

  @Field(() => [PermissionWhereInput], { nullable: true })
  NOT: PermissionWhereInput[]
}

@InputType()
export class PermissionListRelationFilter {
  @Field(() => PermissionWhereInput, { nullable: true })
  every?: PermissionWhereInput
  @Field(() => PermissionWhereInput, { nullable: true })
  some?: PermissionWhereInput
  @Field(() => PermissionWhereInput, { nullable: true })
  none?: PermissionWhereInput
}

@InputType()
export class PermissionRelationFilter {
  @Field(() => PermissionWhereInput, { nullable: true })
  is?: PermissionWhereInput
  @Field(() => PermissionWhereInput, { nullable: true })
  isNot?: PermissionWhereInput
}
