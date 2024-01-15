import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class EtablissementOrderByWithRelationInputStrict
  implements RestrictProperties<EtablissementOrderByWithRelationInputStrict, Prisma.EtablissementOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class EtablissementOrderByWithRelationInput extends PartialType(
  EtablissementOrderByWithRelationInputStrict,
) {}

@InputType()
export class EtablissementOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
