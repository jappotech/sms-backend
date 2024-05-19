import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AccountOrderByWithRelationInput } from './order-by.args';
import { AccountWhereInput, AccountWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';

registerEnumType(Prisma.AccountScalarFieldEnum, {
  name: 'AccountScalarFieldEnum',
});

@ArgsType()
class FindManyAccountArgsStrict
  implements
    RestrictProperties<
      FindManyAccountArgsStrict,
      Omit<Prisma.AccountFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => AccountWhereInput, { nullable: true })
  where: AccountWhereInput;

  @Field(() => [AccountOrderByWithRelationInput], { nullable: true })
  orderBy: AccountOrderByWithRelationInput[];

  @Field(() => AccountWhereUniqueInput, { nullable: true })
  cursor: AccountWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;

  @Field(() => [Prisma.AccountScalarFieldEnum])
  distinct: Prisma.AccountScalarFieldEnum[];
}

@ArgsType()
export class FindManyAccountArgs extends PartialType(
  FindManyAccountArgsStrict,
) {}

@ArgsType()
export class FindUniqueAccountArgs {
  where: AccountWhereUniqueInput;
}
