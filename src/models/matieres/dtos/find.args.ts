import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { MatiereOrderByWithRelationInput } from './order-by.args'
import { MatiereWhereInput, MatiereWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.MatiereScalarFieldEnum, {
  name: 'MatiereScalarFieldEnum',
})

@ArgsType()
class FindManyMatiereArgsStrict
  implements RestrictProperties<FindManyMatiereArgsStrict, Omit<Prisma.MatiereFindManyArgs, 'include' | 'select'>>
{
  where: MatiereWhereInput
  orderBy: MatiereOrderByWithRelationInput[]
  cursor: MatiereWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.MatiereScalarFieldEnum])
  distinct: Prisma.MatiereScalarFieldEnum[]
}

@ArgsType()
export class FindManyMatiereArgs extends PartialType(
  FindManyMatiereArgsStrict,
) {}

@ArgsType()
export class FindUniqueMatiereArgs {
  where: MatiereWhereUniqueInput
}