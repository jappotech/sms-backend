import { Field, InputType, PartialType } from '@nestjs/graphql';
import { $Enums, Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';

import { UniteEnseignementListRelationFilter } from 'src/models/unite-enseignements/dtos/where.args';

@InputType()
export class SemestreWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class SemestreWhereInputStrict
  implements
  RestrictProperties<SemestreWhereInputStrict, Prisma.SemestreWhereInput> {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  numero: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  grade: Prisma.EnumTypeDiplomeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateDebut: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateFin: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  nombreSemaine: IntFilter;

  @Field(() => IntFilter, { nullable: true })

  @Field(() => IntFilter, { nullable: true })
  etablissementId: IntFilter;

  @Field(() => UniteEnseignementListRelationFilter, { nullable: true })
  uniteEnseignement: UniteEnseignementListRelationFilter;

  @Field(() => [SemestreWhereInputStrict], { nullable: true })
  AND: SemestreWhereInputStrict[];

  @Field(() => [SemestreWhereInputStrict], { nullable: true })
  OR: SemestreWhereInputStrict[];

  @Field(() => [SemestreWhereInputStrict], { nullable: true })
  NOT: SemestreWhereInputStrict[];
}

@InputType()
export class SemestreWhereInput extends PartialType(SemestreWhereInputStrict) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  numero: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  grade: Prisma.EnumTypeDiplomeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateDebut: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateFin: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  nombreSemaine: IntFilter;

  @Field(() => IntFilter, { nullable: true })

  @Field(() => IntFilter, { nullable: true })
  etablissementId: IntFilter;

  @Field(() => UniteEnseignementListRelationFilter, { nullable: true })
  uniteEnseignement: UniteEnseignementListRelationFilter;



  @Field(() => [SemestreWhereInput], { nullable: true })
  AND: SemestreWhereInput[];

  @Field(() => [SemestreWhereInput], { nullable: true })
  OR: SemestreWhereInput[];

  @Field(() => [SemestreWhereInput], { nullable: true })
  NOT: SemestreWhereInput[];
}

@InputType()
export class SemestreListRelationFilter {
  @Field(() => SemestreWhereInput, { nullable: true })
  every?: SemestreWhereInput;
  @Field(() => SemestreWhereInput, { nullable: true })
  some?: SemestreWhereInput;
  @Field(() => SemestreWhereInput, { nullable: true })
  none?: SemestreWhereInput;
}

@InputType()
export class SemestreRelationFilter {
  @Field(() => SemestreWhereInput, { nullable: true })
  is?: SemestreWhereInput;
  @Field(() => SemestreWhereInput, { nullable: true })
  isNot?: SemestreWhereInput;
}
