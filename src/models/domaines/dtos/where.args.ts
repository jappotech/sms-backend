import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { EtablissementListRelationFilter } from 'src/models/etablissements/dtos/where.args'
import { MentionListRelationFilter } from 'src/models/mentions/dtos/where.args'

@InputType()
export class DomaineWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class DomaineWhereInputStrict implements RestrictProperties<DomaineWhereInputStrict, Prisma.DomaineWhereInput> {
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

  @Field(() => EtablissementListRelationFilter, { nullable: true })
  etablissements: EtablissementListRelationFilter

  @Field(() => MentionListRelationFilter, { nullable: true })
  mentions: MentionListRelationFilter

  @Field(() => [DomaineWhereInputStrict], { nullable: true })
  AND: DomaineWhereInputStrict[]

  @Field(() => [DomaineWhereInputStrict], { nullable: true })
  OR: DomaineWhereInputStrict[]

  @Field(() => [DomaineWhereInputStrict], { nullable: true })
  NOT: DomaineWhereInputStrict[]
}

@InputType()
export class DomaineWhereInput extends PartialType(
  DomaineWhereInputStrict,
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

  @Field(() => EtablissementListRelationFilter, { nullable: true })
  etablissements: EtablissementListRelationFilter

  @Field(() => MentionListRelationFilter, { nullable: true })
  mentions: MentionListRelationFilter

  @Field(() => [DomaineWhereInput], { nullable: true })
  AND: DomaineWhereInput[]

  @Field(() => [DomaineWhereInput], { nullable: true })
  OR: DomaineWhereInput[]

  @Field(() => [DomaineWhereInput], { nullable: true })
  NOT: DomaineWhereInput[]
}

@InputType()
export class DomaineListRelationFilter {
  @Field(() => DomaineWhereInput, { nullable: true })
  every?: DomaineWhereInput
  @Field(() => DomaineWhereInput, { nullable: true })
  some?: DomaineWhereInput
  @Field(() => DomaineWhereInput, { nullable: true })
  none?: DomaineWhereInput
}

@InputType()
export class DomaineRelationFilter {
  @Field(() => DomaineWhereInput, { nullable: true })
  is?: DomaineWhereInput
  @Field(() => DomaineWhereInput, { nullable: true })
  isNot?: DomaineWhereInput
}
