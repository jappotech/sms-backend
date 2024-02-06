import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AnneeScolaireOrderByWithRelationInput } from './order-by.args'
import { AnneeScolaireWhereInput, AnneeScolaireWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.AnneeScolaireScalarFieldEnum, {
  name: 'AnneeScolaireScalarFieldEnum',
})

@ArgsType()
class FindManyAnneeScolaireArgsStrict
  implements RestrictProperties<FindManyAnneeScolaireArgsStrict, Omit<Prisma.AnneeScolaireFindManyArgs, 'include' | 'select'>>
{
  @Field(() => AnneeScolaireWhereInput, { nullable: true })
  where: AnneeScolaireWhereInput

  @Field(() => [AnneeScolaireOrderByWithRelationInput], { nullable: true })
  orderBy: AnneeScolaireOrderByWithRelationInput[]

  @Field(() => AnneeScolaireWhereUniqueInput, { nullable: true })
  cursor: AnneeScolaireWhereUniqueInput

  @Field(() => Number, { nullable: true })
  take: number

  @Field(() => Number, { nullable: true })
  skip: number

  @Field(() => [Prisma.AnneeScolaireScalarFieldEnum])
  distinct: Prisma.AnneeScolaireScalarFieldEnum[]
}

@ArgsType()
export class FindManyAnneeScolaireArgs extends PartialType(
  FindManyAnneeScolaireArgsStrict,
) { }

@ArgsType()
export class FindUniqueAnneeScolaireArgs {
  where: AnneeScolaireWhereUniqueInput
}