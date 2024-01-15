import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class EtudiantWhereUniqueInput {
  id: number
}

@InputType()
export class EtudiantWhereInputStrict implements RestrictProperties<EtudiantWhereInputStrict, Prisma.EtudiantWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: EtudiantWhereInput[]
  OR: EtudiantWhereInput[]
  NOT: EtudiantWhereInput[]
}

@InputType()
export class EtudiantWhereInput extends PartialType(
  EtudiantWhereInputStrict,
) {}

@InputType()
export class EtudiantListRelationFilter {
  every?: EtudiantWhereInput
  some?: EtudiantWhereInput
  none?: EtudiantWhereInput
}

@InputType()
export class EtudiantRelationFilter {
  is?: EtudiantWhereInput
  isNot?: EtudiantWhereInput
}
