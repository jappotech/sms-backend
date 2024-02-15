import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
} from 'src/common/dtos/common.input';
import { CoursListRelationFilter } from 'src/models/cours/dtos/where.args';
import { EmploiDuTempsListRelationFilter } from 'src/models/emploi-du-temps/dtos/where.args';
import { UtilisateurRelationFilter } from 'src/models/utilisateurs/dtos/where.args';

@InputType()
export class ProfesseurWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class ProfesseurWhereInputStrict
  implements
    RestrictProperties<ProfesseurWhereInputStrict, Prisma.ProfesseurWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  profileId: IntFilter;

  @Field(() => UtilisateurRelationFilter, { nullable: true })
  profile: UtilisateurRelationFilter;

  @Field(() => CoursListRelationFilter, { nullable: true })
  cours: CoursListRelationFilter;

  @Field(() => EmploiDuTempsListRelationFilter, { nullable: true })
  EmploiDuTemps: EmploiDuTempsListRelationFilter;

  @Field(() => [ProfesseurWhereInputStrict], { nullable: true })
  AND: ProfesseurWhereInputStrict[];

  @Field(() => [ProfesseurWhereInputStrict], { nullable: true })
  OR: ProfesseurWhereInputStrict[];

  @Field(() => [ProfesseurWhereInputStrict], { nullable: true })
  NOT: ProfesseurWhereInputStrict[];
}

@InputType()
export class ProfesseurWhereInput extends PartialType(
  ProfesseurWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  profileId: IntFilter;

  @Field(() => UtilisateurRelationFilter, { nullable: true })
  profile: UtilisateurRelationFilter;

  @Field(() => CoursListRelationFilter, { nullable: true })
  cours: CoursListRelationFilter;

  @Field(() => EmploiDuTempsListRelationFilter, { nullable: true })
  EmploiDuTemps: EmploiDuTempsListRelationFilter;

  @Field(() => [ProfesseurWhereInput], { nullable: true })
  AND: ProfesseurWhereInput[];

  @Field(() => [ProfesseurWhereInput], { nullable: true })
  OR: ProfesseurWhereInput[];

  @Field(() => [ProfesseurWhereInput], { nullable: true })
  NOT: ProfesseurWhereInput[];
}

@InputType()
export class ProfesseurListRelationFilter {
  @Field(() => ProfesseurWhereInput, { nullable: true })
  every?: ProfesseurWhereInput;
  @Field(() => ProfesseurWhereInput, { nullable: true })
  some?: ProfesseurWhereInput;
  @Field(() => ProfesseurWhereInput, { nullable: true })
  none?: ProfesseurWhereInput;
}

@InputType()
export class ProfesseurRelationFilter {
  @Field(() => ProfesseurWhereInput, { nullable: true })
  is?: ProfesseurWhereInput;
  @Field(() => ProfesseurWhereInput, { nullable: true })
  isNot?: ProfesseurWhereInput;
}
