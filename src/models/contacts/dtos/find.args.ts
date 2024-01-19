import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ContactOrderByWithRelationInput } from './order-by.args'
import { ContactWhereInput, ContactWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ContactScalarFieldEnum, {
  name: 'ContactScalarFieldEnum',
})

@ArgsType()
class FindManyContactArgsStrict
  implements RestrictProperties<FindManyContactArgsStrict, Omit<Prisma.ContactFindManyArgs, 'include' | 'select'>>
{
  @Field(() => ContactWhereInput, { nullable: true })
  where: ContactWhereInput

  @Field(() => [ContactOrderByWithRelationInput], { nullable: true })
  orderBy: ContactOrderByWithRelationInput[]

  @Field(() => ContactWhereUniqueInput, { nullable: true })
  cursor: ContactWhereUniqueInput

  @Field(() => Number, { nullable: true })
  take: number

  @Field(() => Number, { nullable: true })
  skip: number

  @Field(() => [Prisma.ContactScalarFieldEnum])
  distinct: Prisma.ContactScalarFieldEnum[]
}

@ArgsType()
export class FindManyContactArgs extends PartialType(
  FindManyContactArgsStrict,
) { }

@ArgsType()
export class FindUniqueContactArgs {
  where: ContactWhereUniqueInput
}