import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MentionOrderByWithRelationInput } from './order-by.args';
import { MentionWhereInput, MentionWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';

registerEnumType(Prisma.MentionScalarFieldEnum, {
  name: 'MentionScalarFieldEnum',
});

@ArgsType()
class FindManyMentionArgsStrict
  implements
    RestrictProperties<
      FindManyMentionArgsStrict,
      Omit<Prisma.MentionFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => MentionWhereInput, { nullable: true })
  where: MentionWhereInput;

  @Field(() => [MentionOrderByWithRelationInput], { nullable: true })
  orderBy: MentionOrderByWithRelationInput[];

  @Field(() => MentionWhereUniqueInput, { nullable: true })
  cursor: MentionWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;

  @Field(() => [Prisma.MentionScalarFieldEnum])
  distinct: Prisma.MentionScalarFieldEnum[];
}

@ArgsType()
export class FindManyMentionArgs extends PartialType(
  FindManyMentionArgsStrict,
) {}

@ArgsType()
export class FindUniqueMentionArgs {
  where: MentionWhereUniqueInput;
}
