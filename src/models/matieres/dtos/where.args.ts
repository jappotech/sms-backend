import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { CoursListRelationFilter } from 'src/models/cours/dtos/where.args';
import { UniteEnseignementRelationFilter } from 'src/models/unite-enseignements/dtos/where.args';

@InputType()
export class MatiereWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class MatiereWhereInputStrict
  implements
  RestrictProperties<MatiereWhereInputStrict, Prisma.MatiereWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  code: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  credit: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  coefficient: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  nbHeure: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  uniteEnseigmentId: IntFilter;

  @Field(() => CoursListRelationFilter, { nullable: true })
  cours: CoursListRelationFilter;

  @Field(() => UniteEnseignementRelationFilter, { nullable: true })
  uniteEnseigment: UniteEnseignementRelationFilter;

  @Field(() => [MatiereWhereInputStrict], { nullable: true })
  AND: MatiereWhereInputStrict[];

  @Field(() => [MatiereWhereInputStrict], { nullable: true })
  OR: MatiereWhereInputStrict[];

  @Field(() => [MatiereWhereInputStrict], { nullable: true })
  NOT: MatiereWhereInputStrict[];
}

@InputType()
export class MatiereWhereInput extends PartialType(MatiereWhereInputStrict) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  code: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  credit: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  coefficient: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  nbHeure: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  uniteEnseigmentId: IntFilter;

  @Field(() => CoursListRelationFilter, { nullable: true })
  cours: CoursListRelationFilter;

  @Field(() => UniteEnseignementRelationFilter, { nullable: true })
  uniteEnseigment: UniteEnseignementRelationFilter;

  @Field(() => [MatiereWhereInput], { nullable: true })
  AND: MatiereWhereInput[];

  @Field(() => [MatiereWhereInput], { nullable: true })
  OR: MatiereWhereInput[];

  @Field(() => [MatiereWhereInput], { nullable: true })
  NOT: MatiereWhereInput[];
}

@InputType()
export class MatiereListRelationFilter {
  @Field(() => MatiereWhereInput, { nullable: true })
  every?: MatiereWhereInput;
  @Field(() => MatiereWhereInput, { nullable: true })
  some?: MatiereWhereInput;
  @Field(() => MatiereWhereInput, { nullable: true })
  none?: MatiereWhereInput;
}

@InputType()
export class MatiereRelationFilter {
  @Field(() => MatiereWhereInput, { nullable: true })
  is?: MatiereWhereInput;
  @Field(() => MatiereWhereInput, { nullable: true })
  isNot?: MatiereWhereInput;
}
