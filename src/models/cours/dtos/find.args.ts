import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CoursOrderByWithRelationInput } from './order-by.args'
import { CoursWhereInput, CoursWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.CoursScalarFieldEnum, {
  name: 'CoursScalarFieldEnum',
})

@ArgsType()
class FindManyCoursArgsStrict
  implements RestrictProperties<FindManyCoursArgsStrict, Omit<Prisma.CoursFindManyArgs, 'include' | 'select'>>
{
  where: CoursWhereInput
  orderBy: CoursOrderByWithRelationInput[]
  cursor: CoursWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.CoursScalarFieldEnum])
  distinct: Prisma.CoursScalarFieldEnum[]
}

@ArgsType()
export class FindManyCoursArgs extends PartialType(
  FindManyCoursArgsStrict,
) {}

@ArgsType()
export class FindUniqueCoursArgs {
  where: CoursWhereUniqueInput
}