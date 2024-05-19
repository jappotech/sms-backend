import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionOrderByWithRelationInput } from './order-by.args';
import { PermissionWhereInput, PermissionWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';

registerEnumType(Prisma.PermissionScalarFieldEnum, {
  name: 'PermissionScalarFieldEnum',
});

@ArgsType()
class FindManyPermissionArgsStrict
  implements
    RestrictProperties<
      FindManyPermissionArgsStrict,
      Omit<Prisma.PermissionFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => PermissionWhereInput, { nullable: true })
  where: PermissionWhereInput;

  @Field(() => [PermissionOrderByWithRelationInput], { nullable: true })
  orderBy: PermissionOrderByWithRelationInput[];

  @Field(() => PermissionWhereUniqueInput, { nullable: true })
  cursor: PermissionWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;

  @Field(() => [Prisma.PermissionScalarFieldEnum])
  distinct: Prisma.PermissionScalarFieldEnum[];
}

@ArgsType()
export class FindManyPermissionArgs extends PartialType(
  FindManyPermissionArgsStrict,
) {}

@ArgsType()
export class FindUniquePermissionArgs {
  where: PermissionWhereUniqueInput;
}
