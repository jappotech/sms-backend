import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EtudiantOrderByWithRelationInput } from './order-by.args';
import { EtudiantWhereInput, EtudiantWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';

registerEnumType(Prisma.EtudiantScalarFieldEnum, {
  name: 'EtudiantScalarFieldEnum',
});

@ArgsType()
class FindManyEtudiantArgsStrict
  implements
    RestrictProperties<
      FindManyEtudiantArgsStrict,
      Omit<Prisma.EtudiantFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => EtudiantWhereInput, { nullable: true })
  where: EtudiantWhereInput;

  @Field(() => [EtudiantOrderByWithRelationInput], { nullable: true })
  orderBy: EtudiantOrderByWithRelationInput[];

  @Field(() => EtudiantWhereUniqueInput, { nullable: true })
  cursor: EtudiantWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;

  @Field(() => [Prisma.EtudiantScalarFieldEnum])
  distinct: Prisma.EtudiantScalarFieldEnum[];
}

@ArgsType()
export class FindManyEtudiantArgs extends PartialType(
  FindManyEtudiantArgsStrict,
) {}

@ArgsType()
export class FindUniqueEtudiantArgs {
  where: EtudiantWhereUniqueInput;
}
