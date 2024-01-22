import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EmploiDuTempsOrderByWithRelationInput } from './order-by.args'
import { EmploiDuTempsWhereInput, EmploiDuTempsWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.EmploiDuTempsScalarFieldEnum, {
  name: 'EmploiDuTempsScalarFieldEnum',
})

@ArgsType()
class FindManyEmploiDuTempsArgsStrict
  implements RestrictProperties<FindManyEmploiDuTempsArgsStrict, Omit<Prisma.EmploiDuTempsFindManyArgs, 'include' | 'select'>>
{
  @Field(() => EmploiDuTempsWhereInput, { nullable: true })
  where: EmploiDuTempsWhereInput

  @Field(() => [EmploiDuTempsOrderByWithRelationInput], { nullable: true })
  orderBy: EmploiDuTempsOrderByWithRelationInput[]

  @Field(() => EmploiDuTempsWhereUniqueInput, { nullable: true })
  cursor: EmploiDuTempsWhereUniqueInput

  @Field(() => Number, { nullable: true })
  take: number

  @Field(() => Number, { nullable: true })
  skip: number

  @Field(() => [Prisma.EmploiDuTempsScalarFieldEnum])
  distinct: Prisma.EmploiDuTempsScalarFieldEnum[]
}

@ArgsType()
export class FindManyEmploiDuTempsArgs extends PartialType(
  FindManyEmploiDuTempsArgsStrict,
) { }

@ArgsType()
export class FindUniqueEmploiDuTempsArgs {
  where: EmploiDuTempsWhereUniqueInput
}