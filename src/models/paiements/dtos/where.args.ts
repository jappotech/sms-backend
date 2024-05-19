import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { EtudiantRelationFilter } from 'src/models/etudiants/dtos/where.args';

@InputType()
export class PaiementWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
}

@InputType()
export class PaiementWhereInputStrict
  implements
    RestrictProperties<PaiementWhereInputStrict, Prisma.PaiementWhereInput>
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  etudiantId: IntFilter;

  @Field(() => FloatFilter, { nullable: true })
  montant: FloatFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  datePaiement: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  methodePaiement: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  referencePaiement: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  typeFrais: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  statutPaiement: StringFilter;

  @Field(() => EtudiantRelationFilter, { nullable: true })
  etudiant: EtudiantRelationFilter;

  @Field(() => [PaiementWhereInputStrict], { nullable: true })
  AND: PaiementWhereInput[];

  @Field(() => [PaiementWhereInputStrict], { nullable: true })
  OR: PaiementWhereInput[];

  @Field(() => [PaiementWhereInputStrict], { nullable: true })
  NOT: PaiementWhereInput[];
}

@InputType()
export class PaiementWhereInput extends PartialType(PaiementWhereInputStrict) {
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  etudiantId: IntFilter;

  @Field(() => FloatFilter, { nullable: true })
  montant: FloatFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  datePaiement: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  methodePaiement: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  referencePaiement: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  typeFrais: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  statutPaiement: StringFilter;

  @Field(() => EtudiantRelationFilter, { nullable: true })
  etudiant: EtudiantRelationFilter;

  @Field(() => [PaiementWhereInput], { nullable: true })
  AND: PaiementWhereInput[];

  @Field(() => [PaiementWhereInput], { nullable: true })
  OR: PaiementWhereInput[];

  @Field(() => [PaiementWhereInput], { nullable: true })
  NOT: PaiementWhereInput[];
}

@InputType()
export class PaiementListRelationFilter {
  @Field(() => PaiementWhereInput, { nullable: true })
  every?: PaiementWhereInput;
  @Field(() => PaiementWhereInput, { nullable: true })
  some?: PaiementWhereInput;
  @Field(() => PaiementWhereInput, { nullable: true })
  none?: PaiementWhereInput;
}

@InputType()
export class PaiementRelationFilter {
  @Field(() => PaiementWhereInput, { nullable: true })
  is?: PaiementWhereInput;
  @Field(() => PaiementWhereInput, { nullable: true })
  isNot?: PaiementWhereInput;
}
