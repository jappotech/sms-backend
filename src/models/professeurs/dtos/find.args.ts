import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ProfesseurOrderByWithRelationInput } from './order-by.args'
import { ProfesseurWhereInput, ProfesseurWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ProfesseurScalarFieldEnum, {
  name: 'ProfesseurScalarFieldEnum',
})

@ArgsType()
class FindManyProfesseurArgsStrict
  implements RestrictProperties<FindManyProfesseurArgsStrict, Omit<Prisma.ProfesseurFindManyArgs, 'include' | 'select'>>
{
  where: ProfesseurWhereInput
  orderBy: ProfesseurOrderByWithRelationInput[]
  cursor: ProfesseurWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ProfesseurScalarFieldEnum])
  distinct: Prisma.ProfesseurScalarFieldEnum[]
}

@ArgsType()
export class FindManyProfesseurArgs extends PartialType(
  FindManyProfesseurArgsStrict,
) {}

@ArgsType()
export class FindUniqueProfesseurArgs {
  where: ProfesseurWhereUniqueInput
}