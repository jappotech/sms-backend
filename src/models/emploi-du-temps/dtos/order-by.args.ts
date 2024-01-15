import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class EmploiDuTempsOrderByWithRelationInputStrict
  implements RestrictProperties<EmploiDuTempsOrderByWithRelationInputStrict, Prisma.EmploiDuTempsOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
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
