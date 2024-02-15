import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { MatiereListRelationFilter } from 'src/models/matieres/dtos/where.args';
import { SemestreRelationFilter } from 'src/models/semestres/dtos/where.args';

@InputType()
export class UniteEnseignementWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class UniteEnseignementWhereInputStrict
  implements
    RestrictProperties<
      UniteEnseignementWhereInputStrict,
      Prisma.UniteEnseignementWhereInput
    >
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  code: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  credit: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  semestreId: IntFilter;

  @Field(() => SemestreRelationFilter, { nullable: true })
  semestre: SemestreRelationFilter;

  @Field(() => MatiereListRelationFilter, { nullable: true })
  matieres: MatiereListRelationFilter;

  @Field(() => [UniteEnseignementWhereInputStrict], { nullable: true })
  AND: UniteEnseignementWhereInputStrict[];

  @Field(() => [UniteEnseignementWhereInputStrict], { nullable: true })
  OR: UniteEnseignementWhereInputStrict[];

  @Field(() => [UniteEnseignementWhereInputStrict], { nullable: true })
  NOT: UniteEnseignementWhereInputStrict[];
}

@InputType()
export class UniteEnseignementWhereInput extends PartialType(
  UniteEnseignementWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  code: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  nom: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  credit: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  semestreId: IntFilter;

  @Field(() => SemestreRelationFilter, { nullable: true })
  semestre: SemestreRelationFilter;

  @Field(() => MatiereListRelationFilter, { nullable: true })
  matieres: MatiereListRelationFilter;

  @Field(() => [UniteEnseignementWhereInput], { nullable: true })
  AND: UniteEnseignementWhereInput[];

  @Field(() => [UniteEnseignementWhereInput], { nullable: true })
  OR: UniteEnseignementWhereInput[];

  @Field(() => [UniteEnseignementWhereInput], { nullable: true })
  NOT: UniteEnseignementWhereInput[];
}

@InputType()
export class UniteEnseignementListRelationFilter {
  every?: UniteEnseignementWhereInput;
  some?: UniteEnseignementWhereInput;
  none?: UniteEnseignementWhereInput;
}

@InputType()
export class UniteEnseignementRelationFilter {
  is?: UniteEnseignementWhereInput;
  isNot?: UniteEnseignementWhereInput;
}
