import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class EvaluationEtudiantsOrderByWithRelationInputStrict
  implements RestrictProperties<EvaluationEtudiantsOrderByWithRelationInputStrict, Prisma.EvaluationEtudiantsOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class EvaluationEtudiantsOrderByWithRelationInput extends PartialType(
  EvaluationEtudiantsOrderByWithRelationInputStrict,
) {}

@InputType()
export class EvaluationEtudiantsOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
