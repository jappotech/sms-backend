import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DiplomeOrderByWithRelationInput } from './order-by.args';
import { DiplomeWhereInput, DiplomeWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';

registerEnumType(Prisma.DiplomeScalarFieldEnum, {
  name: 'DiplomeScalarFieldEnum',
});

@ArgsType()
class FindManyDiplomeArgsStrict
  implements
    RestrictProperties<
      FindManyDiplomeArgsStrict,
      Omit<Prisma.DiplomeFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => DiplomeWhereInput, { nullable: true })
  where: DiplomeWhereInput;

  @Field(() => [DiplomeOrderByWithRelationInput], { nullable: true })
  orderBy: DiplomeOrderByWithRelationInput[];

  @Field(() => DiplomeWhereUniqueInput, { nullable: true })
  cursor: DiplomeWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;

  @Field(() => [Prisma.DiplomeScalarFieldEnum])
  distinct: Prisma.DiplomeScalarFieldEnum[];
}

@ArgsType()
export class FindManyDiplomeArgs extends PartialType(
  FindManyDiplomeArgsStrict,
) {}

@ArgsType()
export class FindUniqueDiplomeArgs {
  where: DiplomeWhereUniqueInput;
}
