import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class BulletinNotesWhereUniqueInput {
  etudiantId: number
  semestreId: number
  classeId: number
}

@InputType()
export class BulletinNotesWhereInputStrict {
  @Field(() => [BulletinNotesWhereInputStrict], { nullable: true })
  AND: BulletinNotesWhereInputStrict[]

  @Field(() => [BulletinNotesWhereInputStrict], { nullable: true })
  OR: BulletinNotesWhereInputStrict[]

  @Field(() => [BulletinNotesWhereInputStrict], { nullable: true })
  NOT: BulletinNotesWhereInputStrict[]
}

@InputType()
export class BulletinNotesWhereInput extends PartialType(
  BulletinNotesWhereInputStrict,
) {
  @Field(() => Number, { nullable: false })
  classeId?: number

  @Field(() => [BulletinNotesWhereInput], { nullable: true })
  AND: BulletinNotesWhereInput[]

  @Field(() => [BulletinNotesWhereInput], { nullable: true })
  OR: BulletinNotesWhereInput[]

  @Field(() => [BulletinNotesWhereInput], { nullable: true })
  NOT: BulletinNotesWhereInput[]
}

@InputType()
export class BulletinNotesListRelationFilter {
  every?: BulletinNotesWhereInput
  some?: BulletinNotesWhereInput
  none?: BulletinNotesWhereInput
}

@InputType()
export class BulletinNotesRelationFilter {
  is?: BulletinNotesWhereInput
  isNot?: BulletinNotesWhereInput
}
