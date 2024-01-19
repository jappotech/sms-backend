import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CoursOrderByRelationAggregateInput } from 'src/models/cours/dtos/order-by.args'
import { UniteEnseignementOrderByWithRelationInput } from 'src/models/unite-enseignements/dtos/order-by.args'

@InputType()
export class MatiereOrderByWithRelationInputStrict
  implements RestrictProperties<MatiereOrderByWithRelationInputStrict, Prisma.MatiereOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  code: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  nom: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  credit: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  nbHeure: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder, { nullable: true })
  uniteEnseigmentId: Prisma.SortOrder

  @Field(() => CoursOrderByRelationAggregateInput, { nullable: true })
  cours: CoursOrderByRelationAggregateInput

  @Field(() => UniteEnseignementOrderByWithRelationInput, { nullable: true })
  uniteEnseigment: UniteEnseignementOrderByWithRelationInput
}


@InputType()
export class MatiereOrderByWithRelationInput extends PartialType(
  MatiereOrderByWithRelationInputStrict,
) { }

@InputType()
export class MatiereOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
