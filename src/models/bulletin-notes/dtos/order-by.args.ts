import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class BulletinNotesOrderByWithRelationInputStrict {

  @Field(() => Prisma.SortOrder, { nullable: true })
  etudiantId?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  uniteEnseignementId?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  matiereId?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  noteId?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  moyenne?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  resultat?: Prisma.SortOrder

  @Field(() => Prisma.SortOrder, { nullable: true })
  _count?: Prisma.SortOrder
}


@InputType()
export class BulletinNotesOrderByWithRelationInput extends PartialType(
  BulletinNotesOrderByWithRelationInputStrict,
) {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count?: Prisma.SortOrder
}

@InputType()
export class BulletinNotesOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
