import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CoursOrderByWithRelationInput } from 'src/models/cours/dtos/order-by.args';
import { ClasseOrderByWithRelationInput } from 'src/models/classes/dtos/order-by.args';
import { ProfesseurOrderByWithRelationInput } from 'src/models/professeurs/dtos/order-by.args';
import { SalleOrderByWithRelationInput } from 'src/models/salles/dtos/order-by.args';

@InputType()
export class EmploiDuTempsOrderByWithRelationInputStrict
  implements RestrictProperties<EmploiDuTempsOrderByWithRelationInputStrict, Prisma.EmploiDuTempsOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  title: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  daysOfWeek: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  startTime: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  endTime: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  color: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  startRecur: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  endRecur: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  coursId: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  classeId: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  professeurId: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  salleId: Prisma.SortOrder;

  @Field(() => CoursOrderByWithRelationInput, { nullable: true })
  cours: CoursOrderByWithRelationInput;

  @Field(() => ClasseOrderByWithRelationInput, { nullable: true })
  classe: ClasseOrderByWithRelationInput;

  @Field(() => ProfesseurOrderByWithRelationInput, { nullable: true })
  professeur: ProfesseurOrderByWithRelationInput;

  @Field(() => SalleOrderByWithRelationInput, { nullable: true })
  salle: SalleOrderByWithRelationInput;
}


@InputType()
export class EmploiDuTempsOrderByWithRelationInput extends PartialType(
  EmploiDuTempsOrderByWithRelationInputStrict,
) {}

@InputType()
export class EmploiDuTempsOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

