import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DiplomeOrderByWithRelationInput } from './order-by.args'
import { DiplomeWhereInput, DiplomeWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.DiplomeScalarFieldEnum, {
  name: 'DiplomeScalarFieldEnum',
})

@ArgsType()
class FindManyDiplomeArgsStrict
  implements RestrictProperties<FindManyDiplomeArgsStrict, Omit<Prisma.DiplomeFindManyArgs, 'include' | 'select'>>
{
  where: DiplomeWhereInput
  orderBy: DiplomeOrderByWithRelationInput[]
  cursor: DiplomeWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.DiplomeScalarFieldEnum])
  distinct: Prisma.DiplomeScalarFieldEnum[]
}

@ArgsType()
export class FindManyDiplomeArgs extends PartialType(
  FindManyDiplomeArgsStrict,
) {}

@ArgsType()
export class FindUniqueDiplomeArgs {
  where: DiplomeWhereUniqueInput
}