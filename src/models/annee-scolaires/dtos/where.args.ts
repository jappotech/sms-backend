import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input'
import { CoursListRelationFilter } from 'src/models/cours/dtos/where.args'

@InputType()
export class AnneeScolaireWhereUniqueInput {
  id: number
}

@InputType()
export class AnneeScolaireWhereInputStrict implements RestrictProperties<AnneeScolaireWhereInputStrict, Prisma.AnneeScolaireWhereInput> {

  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => IntFilter, { nullable: true })
  dateDebut: IntFilter

  @Field(() => IntFilter, { nullable: true })
  dateFin: IntFilter

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter

  @Field(() => CoursListRelationFilter, { nullable: true })
  cours: CoursListRelationFilter

  @Field(() => [AnneeScolaireWhereInputStrict], { nullable: true })
  AND: AnneeScolaireWhereInputStrict[]

  @Field(() => [AnneeScolaireWhereInputStrict], { nullable: true })
  OR: AnneeScolaireWhereInputStrict[]

  @Field(() => [AnneeScolaireWhereInputStrict], { nullable: true })
  NOT: AnneeScolaireWhereInputStrict[]
}

@InputType()
export class AnneeScolaireWhereInput extends PartialType(
  AnneeScolaireWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter

  @Field(() => IntFilter, { nullable: true })
  dateDebut: IntFilter

  @Field(() => IntFilter, { nullable: true })
  dateFin: IntFilter

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter

  @Field(() => CoursListRelationFilter, { nullable: true })
  cours: CoursListRelationFilter

  @Field(() => [AnneeScolaireWhereInput], { nullable: true })
  AND: AnneeScolaireWhereInput[]

  @Field(() => [AnneeScolaireWhereInput], { nullable: true })
  OR: AnneeScolaireWhereInput[]

  @Field(() => [AnneeScolaireWhereInput], { nullable: true })
  NOT: AnneeScolaireWhereInput[]
}

@InputType()
export class AnneeScolaireListRelationFilter {
  every?: AnneeScolaireWhereInput
  some?: AnneeScolaireWhereInput
  none?: AnneeScolaireWhereInput
}

@InputType()
export class AnneeScolaireRelationFilter {
  is?: AnneeScolaireWhereInput
  isNot?: AnneeScolaireWhereInput
}
