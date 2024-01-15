import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ClasseOrderByWithRelationInput } from './order-by.args'
import { ClasseWhereInput, ClasseWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ClasseScalarFieldEnum, {
  name: 'ClasseScalarFieldEnum',
})

@ArgsType()
class FindManyClasseArgsStrict
  implements RestrictProperties<FindManyClasseArgsStrict, Omit<Prisma.ClasseFindManyArgs, 'include' | 'select'>>
{
  where: ClasseWhereInput
  orderBy: ClasseOrderByWithRelationInput[]
  cursor: ClasseWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ClasseScalarFieldEnum])
  distinct: Prisma.ClasseScalarFieldEnum[]
}

@ArgsType()
export class FindManyClasseArgs extends PartialType(
  FindManyClasseArgsStrict,
) {}

@ArgsType()
export class FindUniqueClasseArgs {
  where: ClasseWhereUniqueInput
}