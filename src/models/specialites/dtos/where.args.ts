import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { ClasseListRelationFilter } from 'src/models/classes/dtos/where.args'
import { DiplomeListRelationFilter } from 'src/models/diplomes/dtos/where.args'
import { MentionRelationFilter } from 'src/models/mentions/dtos/where.args'

@InputType()
export class SpecialiteWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class SpecialiteWhereInputStrict implements RestrictProperties<SpecialiteWhereInputStrict, Prisma.SpecialiteWhereInput> {
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
  mentionId: IntFilter

  @Field(() => MentionRelationFilter, { nullable: true })
  mention: MentionRelationFilter

  @Field(() => ClasseListRelationFilter, { nullable: true })
  Classe: ClasseListRelationFilter

  @Field(() => DiplomeListRelationFilter, { nullable: true })
  Diplome: DiplomeListRelationFilter

  @Field(() => [SpecialiteWhereInputStrict], { nullable: true })
  AND: SpecialiteWhereInput[]

  @Field(() => [SpecialiteWhereInputStrict], { nullable: true })
  OR: SpecialiteWhereInput[]

  @Field(() => [SpecialiteWhereInputStrict], { nullable: true })
  NOT: SpecialiteWhereInput[]
}

@InputType()
export class SpecialiteWhereInput extends PartialType(
  SpecialiteWhereInputStrict,
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
  mentionId: IntFilter

  @Field(() => MentionRelationFilter, { nullable: true })
  mention: MentionRelationFilter

  @Field(() => ClasseListRelationFilter, { nullable: true })
  Classe: ClasseListRelationFilter

  @Field(() => DiplomeListRelationFilter, { nullable: true })
  Diplome: DiplomeListRelationFilter

  @Field(() => [SpecialiteWhereInput], { nullable: true })
  AND: SpecialiteWhereInput[]

  @Field(() => [SpecialiteWhereInput], { nullable: true })
  OR: SpecialiteWhereInput[]

  @Field(() => [SpecialiteWhereInput], { nullable: true })
  NOT: SpecialiteWhereInput[]
}

@InputType()
export class SpecialiteListRelationFilter {
  @Field(() => SpecialiteWhereInput, { nullable: true })
  every?: SpecialiteWhereInput
  @Field(() => SpecialiteWhereInput, { nullable: true })
  some?: SpecialiteWhereInput
  @Field(() => SpecialiteWhereInput, { nullable: true })
  none?: SpecialiteWhereInput
}

@InputType()
export class SpecialiteRelationFilter {
  @Field(() => SpecialiteWhereInput, { nullable: true })
  is?: SpecialiteWhereInput
  @Field(() => SpecialiteWhereInput, { nullable: true })
  isNot?: SpecialiteWhereInput
}
