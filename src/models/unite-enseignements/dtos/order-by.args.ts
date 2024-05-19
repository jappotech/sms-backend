import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { MatiereOrderByRelationAggregateInput } from 'src/models/matieres/dtos/order-by.args';
import { SemestreOrderByWithRelationInput } from 'src/models/semestres/dtos/order-by.args';

@InputType()
export class UniteEnseignementOrderByWithRelationInputStrict
  implements
  RestrictProperties<
    UniteEnseignementOrderByWithRelationInputStrict,
    Prisma.UniteEnseignementOrderByWithRelationInput
  > {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  code: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  nom: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  credit: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  numero: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  semestreId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => SemestreOrderByWithRelationInput)
  semestre: SemestreOrderByWithRelationInput;

  @Field(() => MatiereOrderByRelationAggregateInput)
  matieres: MatiereOrderByRelationAggregateInput;
}

@InputType()
export class UniteEnseignementOrderByWithRelationInput extends PartialType(
  UniteEnseignementOrderByWithRelationInputStrict,
) { }

@InputType()
export class UniteEnseignementOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
