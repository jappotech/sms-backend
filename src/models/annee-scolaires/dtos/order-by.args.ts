import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class AnneeScolaireOrderByWithRelationInputStrict
  implements RestrictProperties<AnneeScolaireOrderByWithRelationInputStrict, Prisma.AnneeScolaireOrderByWithRelationInput>
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  nom: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  classes: Prisma.ClasseOrderByRelationAggregateInput
}


@InputType()
export class AnneeScolaireOrderByWithRelationInput extends PartialType(
  AnneeScolaireOrderByWithRelationInputStrict,
) { }

@InputType()
export class AnneeScolaireOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
