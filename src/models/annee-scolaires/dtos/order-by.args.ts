import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ClasseOrderByRelationAggregateInput } from 'src/models/classes/dtos/order-by.args';
import { CoursOrderByRelationAggregateInput } from 'src/models/cours/dtos/order-by.args';

@InputType()
export class AnneeScolaireOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      AnneeScolaireOrderByWithRelationInputStrict,
      Prisma.AnneeScolaireOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  dateDebut: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  dateFin: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  nom: Prisma.SortOrder;

  @Field(() => CoursOrderByRelationAggregateInput)
  classes: ClasseOrderByRelationAggregateInput;
}

@InputType()
export class AnneeScolaireOrderByWithRelationInput extends PartialType(
  AnneeScolaireOrderByWithRelationInputStrict,
) {}

@InputType()
export class AnneeScolaireOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
