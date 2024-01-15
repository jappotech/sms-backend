import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { PermissionOrderByWithRelationInput } from './order-by.args'
import { PermissionWhereInput, PermissionWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.PermissionScalarFieldEnum, {
  name: 'PermissionScalarFieldEnum',
})

@ArgsType()
class FindManyPermissionArgsStrict
  implements RestrictProperties<FindManyPermissionArgsStrict, Omit<Prisma.PermissionFindManyArgs, 'include' | 'select'>>
{
  where: PermissionWhereInput
  orderBy: PermissionOrderByWithRelationInput[]
  cursor: PermissionWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.PermissionScalarFieldEnum])
  distinct: Prisma.PermissionScalarFieldEnum[]
}

@ArgsType()
export class FindManyPermissionArgs extends PartialType(
  FindManyPermissionArgsStrict,
) {}

@ArgsType()
export class FindUniquePermissionArgs {
  where: PermissionWhereUniqueInput
}