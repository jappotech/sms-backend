import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ClasseOrderByWithRelationInput } from 'src/models/classes/dtos/order-by.args';
import { UniteEnseignementOrderByRelationAggregateInput } from 'src/models/unite-enseignements/dtos/order-by.args';

@InputType()
export class SemestreOrderByWithRelationInputStrict
  implements
  RestrictProperties<
    SemestreOrderByWithRelationInputStrict,
    Prisma.SemestreOrderByWithRelationInput
  > {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  numero: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  grade: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  dateDebut: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  dateFin: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  nombreSemaine: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  etablissementId: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  classeId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => UniteEnseignementOrderByRelationAggregateInput)
  uniteEnseignement: UniteEnseignementOrderByRelationAggregateInput;

  @Field(() => ClasseOrderByWithRelationInput)
  Classe: ClasseOrderByWithRelationInput;
}

@InputType()
export class SemestreOrderByWithRelationInput extends PartialType(
  SemestreOrderByWithRelationInputStrict,
) { }

@InputType()
export class SemestreOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
