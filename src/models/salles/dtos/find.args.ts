import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SalleOrderByWithRelationInput } from './order-by.args'
import { SalleWhereInput, SalleWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.SalleScalarFieldEnum, {
  name: 'SalleScalarFieldEnum',
})

@ArgsType()
class FindManySalleArgsStrict
  implements RestrictProperties<FindManySalleArgsStrict, Omit<Prisma.SalleFindManyArgs, 'include' | 'select'>>
{
  where: SalleWhereInput
  orderBy: SalleOrderByWithRelationInput[]
  cursor: SalleWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.SalleScalarFieldEnum])
  distinct: Prisma.SalleScalarFieldEnum[]
}

@ArgsType()
export class FindManySalleArgs extends PartialType(
  FindManySalleArgsStrict,
) {}

@ArgsType()
export class FindUniqueSalleArgs {
  where: SalleWhereUniqueInput
}