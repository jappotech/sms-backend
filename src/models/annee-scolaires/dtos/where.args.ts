import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ClasseListRelationFilter } from 'src/models/classes/dtos/where.args'

@InputType()
export class AnneeScolaireWhereUniqueInput {
  nom: string
}

@InputType()
export class AnneeScolaireWhereInputStrict {
  @Field(() => String, { nullable: true })
  nom: string | Prisma.StringFilter<'AnneeScolaire'>

  @Field(() => ClasseListRelationFilter, { nullable: true })
  classes: ClasseListRelationFilter

  @Field(() => [AnneeScolaireWhereInputStrict], { nullable: true })
  AND: AnneeScolaireWhereInput[]

  @Field(() => [AnneeScolaireWhereInputStrict], { nullable: true })
  OR: AnneeScolaireWhereInput[]

  @Field(() => [AnneeScolaireWhereInputStrict], { nullable: true })
  NOT: AnneeScolaireWhereInput[]
}

@InputType()
export class AnneeScolaireWhereInput extends PartialType(
  AnneeScolaireWhereInputStrict,
) {
  @Field(() => String, { nullable: true })
  nom: string | Prisma.StringFilter<'AnneeScolaire'>

  @Field(() => ClasseListRelationFilter, { nullable: true })
  classes: ClasseListRelationFilter

  @Field(() => [AnneeScolaireWhereInputStrict], { nullable: true })
  AND: AnneeScolaireWhereInput[]

  @Field(() => [AnneeScolaireWhereInputStrict], { nullable: true })
  OR: AnneeScolaireWhereInput[]

  @Field(() => [AnneeScolaireWhereInputStrict], { nullable: true })
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
