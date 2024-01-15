import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class ClasseOrderByWithRelationInputStrict
  implements RestrictProperties<ClasseOrderByWithRelationInputStrict, Prisma.ClasseOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class ClasseOrderByWithRelationInput extends PartialType(
  ClasseOrderByWithRelationInputStrict,
) {}

@InputType()
export class ClasseOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
