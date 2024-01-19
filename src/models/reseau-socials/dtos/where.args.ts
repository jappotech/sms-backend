import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { ContactRelationFilter } from 'src/models/contacts/dtos/where.args'

@InputType()
export class ReseauSocialWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class ReseauSocialWhereInputStrict implements RestrictProperties<ReseauSocialWhereInputStrict, Prisma.ReseauSocialWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter

  @Field(() => StringFilter, { nullable: true })
  username: StringFilter

  @Field(() => StringFilter, { nullable: true })
  url: StringFilter

  @Field(() => IntFilter, { nullable: true })
  contactId: IntFilter

  @Field(() => ContactRelationFilter, { nullable: true })
  contact: ContactRelationFilter

  @Field(() => [ReseauSocialWhereInputStrict], { nullable: true })
  AND: ReseauSocialWhereInputStrict[]

  @Field(() => [ReseauSocialWhereInputStrict], { nullable: true })
  OR: ReseauSocialWhereInputStrict[]

  @Field(() => [ReseauSocialWhereInputStrict], { nullable: true })
  NOT: ReseauSocialWhereInputStrict[]
}

@InputType()
export class ReseauSocialWhereInput extends PartialType(
  ReseauSocialWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter

  @Field(() => StringFilter, { nullable: true })
  username: StringFilter

  @Field(() => StringFilter, { nullable: true })
  url: StringFilter

  @Field(() => IntFilter, { nullable: true })
  contactId: IntFilter

  @Field(() => ContactRelationFilter, { nullable: true })
  contact: ContactRelationFilter

  @Field(() => [ReseauSocialWhereInput], { nullable: true })
  AND: ReseauSocialWhereInput[]

  @Field(() => [ReseauSocialWhereInput], { nullable: true })
  OR: ReseauSocialWhereInput[]

  @Field(() => [ReseauSocialWhereInput], { nullable: true })
  NOT: ReseauSocialWhereInput[]
}

@InputType()
export class ReseauSocialListRelationFilter {
  @Field(() => ReseauSocialWhereInput, { nullable: true })
  every?: ReseauSocialWhereInput
  @Field(() => ReseauSocialWhereInput, { nullable: true })
  some?: ReseauSocialWhereInput
  @Field(() => ReseauSocialWhereInput, { nullable: true })
  none?: ReseauSocialWhereInput
}

@InputType()
export class ReseauSocialRelationFilter {
  @Field(() => ReseauSocialWhereInput, { nullable: true })
  is?: ReseauSocialWhereInput
  @Field(() => ReseauSocialWhereInput, { nullable: true })
  isNot?: ReseauSocialWhereInput
}
