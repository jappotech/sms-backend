import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class NoteEtudiantOrderByWithRelationInputStrict
  implements RestrictProperties<NoteEtudiantOrderByWithRelationInputStrict, Prisma.NoteEtudiantOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class NoteEtudiantOrderByWithRelationInput extends PartialType(
  NoteEtudiantOrderByWithRelationInputStrict,
) {}

@InputType()
export class NoteEtudiantOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
