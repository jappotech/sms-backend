import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class ProfesseurOrderByWithRelationInputStrict
  implements RestrictProperties<ProfesseurOrderByWithRelationInputStrict, Prisma.ProfesseurOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class ProfesseurOrderByWithRelationInput extends PartialType(
  ProfesseurOrderByWithRelationInputStrict,
) {}

@InputType()
export class ProfesseurOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
