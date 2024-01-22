import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { DomaineRelationFilter, DomaineWhereInput } from 'src/models/domaines/dtos/where.args'
import { SpecialiteListRelationFilter } from 'src/models/specialites/dtos/where.args'

@InputType()
export class MentionWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class MentionWhereInputStrict implements RestrictProperties<MentionWhereInputStrict, Prisma.MentionWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter

  @Field(() => StringFilter, { nullable: true })
  slug: StringFilter

  @Field(() => IntFilter, { nullable: true })
  domaineId: IntFilter

  @Field(() => DomaineRelationFilter, { nullable: true })
  domaine: DomaineRelationFilter

  @Field(() => SpecialiteListRelationFilter, { nullable: true })
  specialites: SpecialiteListRelationFilter

  @Field(() => [MentionWhereInputStrict], { nullable: true })
  AND: MentionWhereInputStrict[]

  @Field(() => [MentionWhereInputStrict], { nullable: true })
  OR: MentionWhereInputStrict[]

  @Field(() => [MentionWhereInputStrict], { nullable: true })
  NOT: MentionWhereInputStrict[]
}

@InputType()
export class MentionWhereInput extends PartialType(
  MentionWhereInputStrict,
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
  slug: StringFilter

  @Field(() => IntFilter, { nullable: true })
  domaineId: IntFilter

  @Field(() => DomaineRelationFilter, { nullable: true })
  domaine: DomaineRelationFilter

  @Field(() => SpecialiteListRelationFilter, { nullable: true })
  specialites: SpecialiteListRelationFilter

  @Field(() => [MentionWhereInput], { nullable: true })
  AND: MentionWhereInput[]

  @Field(() => [MentionWhereInput], { nullable: true })
  OR: MentionWhereInput[]

  @Field(() => [MentionWhereInput], { nullable: true })
  NOT: MentionWhereInput[]
}

@InputType()
export class MentionListRelationFilter {
  @Field(() => MentionWhereInput, { nullable: true })
  every?: MentionWhereInput
  @Field(() => MentionWhereInput, { nullable: true })
  some?: MentionWhereInput
  @Field(() => MentionWhereInput, { nullable: true })
  none?: MentionWhereInput
}

@InputType()
export class MentionRelationFilter {
  @Field(() => MentionWhereInput, { nullable: true })
  is?: MentionWhereInput
  @Field(() => MentionWhereInput, { nullable: true })
  isNot?: MentionWhereInput
}
