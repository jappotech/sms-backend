import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class MatiereWhereUniqueInput {
  id: number
}

@InputType()
export class MatiereWhereInputStrict implements RestrictProperties<MatiereWhereInputStrict, Prisma.MatiereWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: MatiereWhereInput[]
  OR: MatiereWhereInput[]
  NOT: MatiereWhereInput[]
}

@InputType()
export class MatiereWhereInput extends PartialType(
  MatiereWhereInputStrict,
) {}

@InputType()
export class MatiereListRelationFilter {
  every?: MatiereWhereInput
  some?: MatiereWhereInput
  none?: MatiereWhereInput
}

@InputType()
export class MatiereRelationFilter {
  is?: MatiereWhereInput
  isNot?: MatiereWhereInput
}
