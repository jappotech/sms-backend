import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeuillePresenceOrderByWithRelationInput } from './order-by.args';
import {
  FeuillePresenceWhereInput,
  FeuillePresenceWhereUniqueInput,
} from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';

registerEnumType(Prisma.FeuillePresenceScalarFieldEnum, {
  name: 'FeuillePresenceScalarFieldEnum',
});

@ArgsType()
class FindManyFeuillePresenceArgsStrict
  implements
    RestrictProperties<
      FindManyFeuillePresenceArgsStrict,
      Omit<Prisma.FeuillePresenceFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => FeuillePresenceWhereInput, { nullable: true })
  where: FeuillePresenceWhereInput;

  @Field(() => [FeuillePresenceOrderByWithRelationInput], { nullable: true })
  orderBy: FeuillePresenceOrderByWithRelationInput[];

  @Field(() => FeuillePresenceWhereUniqueInput, { nullable: true })
  cursor: FeuillePresenceWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;

  @Field(() => [Prisma.FeuillePresenceScalarFieldEnum])
  distinct: Prisma.FeuillePresenceScalarFieldEnum[];
}

@ArgsType()
export class FindManyFeuillePresenceArgs extends PartialType(
  FindManyFeuillePresenceArgsStrict,
) {}

@ArgsType()
export class FindUniqueFeuillePresenceArgs {
  where: FeuillePresenceWhereUniqueInput;
}
