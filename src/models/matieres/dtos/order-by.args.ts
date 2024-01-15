import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class MatiereOrderByWithRelationInputStrict
  implements RestrictProperties<MatiereOrderByWithRelationInputStrict, Prisma.MatiereOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class MatiereOrderByWithRelationInput extends PartialType(
  MatiereOrderByWithRelationInputStrict,
) {}

@InputType()
export class MatiereOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
