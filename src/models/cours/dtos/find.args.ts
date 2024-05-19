import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CoursOrderByWithRelationInput } from './order-by.args';
import { CoursWhereInput, CoursWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';

registerEnumType(Prisma.CoursScalarFieldEnum, {
  name: 'CoursScalarFieldEnum',
});

@ArgsType()
class FindManyCoursArgsStrict
  implements
    RestrictProperties<
      FindManyCoursArgsStrict,
      Omit<Prisma.CoursFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => CoursWhereInput, { nullable: true })
  where: CoursWhereInput;

  @Field(() => [CoursOrderByWithRelationInput], { nullable: true })
  orderBy: CoursOrderByWithRelationInput[];

  @Field(() => CoursWhereUniqueInput, { nullable: true })
  cursor: CoursWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;

  @Field(() => [Prisma.CoursScalarFieldEnum])
  distinct: Prisma.CoursScalarFieldEnum[];
}

@ArgsType()
export class FindManyCoursArgs extends PartialType(FindManyCoursArgsStrict) {}

@ArgsType()
export class FindUniqueCoursArgs {
  where: CoursWhereUniqueInput;
}
