import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CoursOrderByWithRelationInput } from 'src/models/cours/dtos/order-by.args';
import { EtudiantOrderByWithRelationInput } from 'src/models/etudiants/dtos/order-by.args';

@InputType()
export class FeuillePresenceOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      FeuillePresenceOrderByWithRelationInputStrict,
      Prisma.FeuillePresenceOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  date: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  heureDebut: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  heureFin: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  coursId: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  etudiantId: Prisma.SortOrder | Prisma.SortOrderInput;

  @Field(() => CoursOrderByWithRelationInput, { nullable: true })
  cours: CoursOrderByWithRelationInput;

  @Field(() => EtudiantOrderByWithRelationInput, { nullable: true })
  etudiant: EtudiantOrderByWithRelationInput;
}

@InputType()
export class FeuillePresenceOrderByWithRelationInput extends PartialType(
  FeuillePresenceOrderByWithRelationInputStrict,
) {}

@InputType()
export class FeuillePresenceOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
