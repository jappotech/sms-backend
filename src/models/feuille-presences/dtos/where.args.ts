import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
} from 'src/common/dtos/common.input';
import { CoursRelationFilter } from 'src/models/cours/dtos/where.args';
import { EtudiantRelationFilter } from 'src/models/etudiants/dtos/where.args';

@InputType()
export class FeuillePresenceWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class FeuillePresenceWhereInputStrict
  implements
    RestrictProperties<
      FeuillePresenceWhereInputStrict,
      Prisma.FeuillePresenceWhereInput
    >
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  date: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  heureDebut: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  heureFin: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  coursId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  etudiantId: IntFilter;

  @Field(() => CoursRelationFilter, { nullable: true })
  cours: CoursRelationFilter;

  @Field(() => EtudiantRelationFilter, { nullable: true })
  etudiant: EtudiantRelationFilter;

  @Field(() => [FeuillePresenceWhereInputStrict], { nullable: true })
  AND: FeuillePresenceWhereInputStrict[];

  @Field(() => [FeuillePresenceWhereInputStrict], { nullable: true })
  OR: FeuillePresenceWhereInputStrict[];

  @Field(() => [FeuillePresenceWhereInputStrict], { nullable: true })
  NOT: FeuillePresenceWhereInputStrict[];
}

@InputType()
export class FeuillePresenceWhereInput extends PartialType(
  FeuillePresenceWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  date: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  heureDebut: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  heureFin: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  coursId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  etudiantId: IntFilter;

  @Field(() => CoursRelationFilter, { nullable: true })
  cours: CoursRelationFilter;

  @Field(() => EtudiantRelationFilter, { nullable: true })
  etudiant: EtudiantRelationFilter;

  @Field(() => [FeuillePresenceWhereInput], { nullable: true })
  AND: FeuillePresenceWhereInput[];

  @Field(() => [FeuillePresenceWhereInput], { nullable: true })
  OR: FeuillePresenceWhereInput[];

  @Field(() => [FeuillePresenceWhereInput], { nullable: true })
  NOT: FeuillePresenceWhereInput[];
}

@InputType()
export class FeuillePresenceListRelationFilter {
  @Field(() => FeuillePresenceWhereInput, { nullable: true })
  every?: FeuillePresenceWhereInput;
  @Field(() => FeuillePresenceWhereInput, { nullable: true })
  some?: FeuillePresenceWhereInput;
  @Field(() => FeuillePresenceWhereInput, { nullable: true })
  none?: FeuillePresenceWhereInput;
}

@InputType()
export class FeuillePresenceRelationFilter {
  @Field(() => FeuillePresenceWhereInput, { nullable: true })
  is?: FeuillePresenceWhereInput;
  @Field(() => FeuillePresenceWhereInput, { nullable: true })
  isNot?: FeuillePresenceWhereInput;
}
