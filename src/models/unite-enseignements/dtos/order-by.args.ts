import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class UniteEnseignementOrderByWithRelationInputStrict
  implements RestrictProperties<UniteEnseignementOrderByWithRelationInputStrict, Prisma.UniteEnseignementOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class UniteEnseignementOrderByWithRelationInput extends PartialType(
  UniteEnseignementOrderByWithRelationInputStrict,
) {}

@InputType()
export class UniteEnseignementOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
