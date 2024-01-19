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
  @Field(() => ProfesseurWhereInput, { nullable: true })
  where: ProfesseurWhereInput

  @Field(() => [ProfesseurOrderByWithRelationInput], { nullable: true })
  orderBy: ProfesseurOrderByWithRelationInput[]

  @Field(() => ProfesseurWhereUniqueInput, { nullable: true })
  cursor: ProfesseurWhereUniqueInput

  @Field(() => Number, { nullable: true })
  take: number

  @Field(() => Number, { nullable: true })
  skip: number

  @Field(() => [Prisma.ProfesseurScalarFieldEnum])
  distinct: Prisma.ProfesseurScalarFieldEnum[]
}

@ArgsType()
export class FindManyProfesseurArgs extends PartialType(
  FindManyProfesseurArgsStrict,
) { }

@ArgsType()
export class FindUniqueProfesseurArgs {
  where: ProfesseurWhereUniqueInput
}