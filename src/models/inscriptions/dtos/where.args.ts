import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  BoolFilter,
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { ClasseRelationFilter } from 'src/models/classes/dtos/where.args';
import { DiplomeRelationFilter } from 'src/models/diplomes/dtos/where.args';
import { EtudiantRelationFilter } from 'src/models/etudiants/dtos/where.args';

@InputType()
export class InscriptionWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class InscriptionWhereInputStrict
  implements
    RestrictProperties<
      InscriptionWhereInputStrict,
      Prisma.InscriptionWhereInput
    >
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  reference: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  premiereInscription: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  dernierDiplome: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  autreEtablissement: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  activiteProfessionnel: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  niveau: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  statut: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  diplomeId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  etudiantId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  classeId: IntFilter;

  @Field(() => DiplomeRelationFilter, { nullable: true })
  diplome: DiplomeRelationFilter;

  @Field(() => EtudiantRelationFilter, { nullable: true })
  etudiant: EtudiantRelationFilter;

  @Field(() => ClasseRelationFilter, { nullable: true })
  classe: ClasseRelationFilter;

  @Field(() => [InscriptionWhereInputStrict], { nullable: true })
  AND: InscriptionWhereInputStrict[];

  @Field(() => [InscriptionWhereInputStrict], { nullable: true })
  OR: InscriptionWhereInputStrict[];

  @Field(() => [InscriptionWhereInputStrict], { nullable: true })
  NOT: InscriptionWhereInputStrict[];
}

@InputType()
export class InscriptionWhereInput extends PartialType(
  InscriptionWhereInputStrict,
) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  reference: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  premiereInscription: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  dernierDiplome: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  autreEtablissement: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  activiteProfessionnel: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  niveau: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  statut: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  diplomeId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  etudiantId: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  classeId: IntFilter;

  @Field(() => DiplomeRelationFilter, { nullable: true })
  diplome: DiplomeRelationFilter;

  @Field(() => EtudiantRelationFilter, { nullable: true })
  etudiant: EtudiantRelationFilter;

  @Field(() => ClasseRelationFilter, { nullable: true })
  classe: ClasseRelationFilter;

  @Field(() => [InscriptionWhereInput], { nullable: true })
  AND: InscriptionWhereInput[];

  @Field(() => [InscriptionWhereInput], { nullable: true })
  OR: InscriptionWhereInput[];

  @Field(() => [InscriptionWhereInput], { nullable: true })
  NOT: InscriptionWhereInput[];
}

@InputType()
export class InscriptionListRelationFilter {
  @Field(() => InscriptionWhereInput, { nullable: true })
  every?: InscriptionWhereInput;
  @Field(() => InscriptionWhereInput, { nullable: true })
  some?: InscriptionWhereInput;
  @Field(() => InscriptionWhereInput, { nullable: true })
  none?: InscriptionWhereInput;
}

@InputType()
export class InscriptionRelationFilter {
  @Field(() => InscriptionWhereInput, { nullable: true })
  is?: InscriptionWhereInput;
  @Field(() => InscriptionWhereInput, { nullable: true })
  isNot?: InscriptionWhereInput;
}
