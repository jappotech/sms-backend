import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CoursOrderByRelationAggregateInput } from 'src/models/cours/dtos/order-by.args';
import { EmploiDuTempsOrderByRelationAggregateInput } from 'src/models/emploi-du-temps/dtos/order-by.args';
import { EtablissementOrderByWithRelationInput } from 'src/models/etablissements/dtos/order-by.args';

@InputType()
export class SalleOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      SalleOrderByWithRelationInputStrict,
      Prisma.SalleOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  nom: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  capacite: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  batiment: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => Prisma.SortOrder, { nullable: true })
  etablissementId: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  estDisponible: Prisma.SortOrder;

  @Field(() => EtablissementOrderByWithRelationInput, { nullable: true })
  etablissement: EtablissementOrderByWithRelationInput;

  @Field(() => CoursOrderByRelationAggregateInput, { nullable: true })
  cours: CoursOrderByRelationAggregateInput;

  @Field(() => EmploiDuTempsOrderByRelationAggregateInput, { nullable: true })
  EmploiDuTemps: EmploiDuTempsOrderByRelationAggregateInput;
}

@InputType()
export class SalleOrderByWithRelationInput extends PartialType(
  SalleOrderByWithRelationInputStrict,
) {}

@InputType()
export class SalleOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
