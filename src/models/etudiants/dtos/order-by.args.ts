import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class EtudiantOrderByWithRelationInputStrict
  implements RestrictProperties<EtudiantOrderByWithRelationInputStrict, Prisma.EtudiantOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class EtudiantOrderByWithRelationInput extends PartialType(
  EtudiantOrderByWithRelationInputStrict,
) {}

@InputType()
export class EtudiantOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
