import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SemestreOrderByWithRelationInput } from './order-by.args'
import { SemestreWhereInput, SemestreWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.SemestreScalarFieldEnum, {
  name: 'SemestreScalarFieldEnum',
})

@ArgsType()
class FindManySemestreArgsStrict
  implements RestrictProperties<FindManySemestreArgsStrict, Omit<Prisma.SemestreFindManyArgs, 'include' | 'select'>>
{
  where: SemestreWhereInput
  orderBy: SemestreOrderByWithRelationInput[]
  cursor: SemestreWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.SemestreScalarFieldEnum])
  distinct: Prisma.SemestreScalarFieldEnum[]
}

@ArgsType()
export class FindManySemestreArgs extends PartialType(
  FindManySemestreArgsStrict,
) {}

@ArgsType()
export class FindUniqueSemestreArgs {
  where: SemestreWhereUniqueInput
}