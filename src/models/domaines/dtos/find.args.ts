import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { DomaineOrderByWithRelationInput } from './order-by.args'
import { DomaineWhereInput, DomaineWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.DomaineScalarFieldEnum, {
  name: 'DomaineScalarFieldEnum',
})

@ArgsType()
class FindManyDomaineArgsStrict
  implements RestrictProperties<FindManyDomaineArgsStrict, Omit<Prisma.DomaineFindManyArgs, 'include' | 'select'>>
{
  @Field(() => DomaineWhereInput, { nullable: true })
  where: DomaineWhereInput

  @Field(() => [DomaineOrderByWithRelationInput], { nullable: true })
  orderBy: DomaineOrderByWithRelationInput[]

  @Field(() => DomaineWhereUniqueInput, { nullable: true })
  cursor: DomaineWhereUniqueInput

  @Field(() => Number, { nullable: true })
  take: number

  @Field(() => Number, { nullable: true })
  skip: number

  @Field(() => [Prisma.DomaineScalarFieldEnum])
  distinct: Prisma.DomaineScalarFieldEnum[]
}

@ArgsType()
export class FindManyDomaineArgs extends PartialType(
  FindManyDomaineArgsStrict,
) { }

@ArgsType()
export class FindUniqueDomaineArgs {
  where: DomaineWhereUniqueInput
}