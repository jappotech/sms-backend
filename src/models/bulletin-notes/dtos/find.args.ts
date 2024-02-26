import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BulletinNotesOrderByWithRelationInput } from './order-by.args';
import {
  BulletinNotesAnnuelWhereUniqueInput,
  BulletinNotesWhereInput,
  BulletinNotesWhereUniqueInput,
} from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ArgsType()
class FindManyBulletinNotesArgsStrict {
  @Field(() => BulletinNotesWhereInput, { nullable: false })
  where: BulletinNotesWhereInput;

  @Field(() => [BulletinNotesOrderByWithRelationInput], { nullable: true })
  orderBy: BulletinNotesOrderByWithRelationInput[];

  @Field(() => BulletinNotesWhereUniqueInput, { nullable: true })
  cursor: BulletinNotesWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;
}

@ArgsType()
export class FindManyBulletinNotesArgs extends PartialType(
  FindManyBulletinNotesArgsStrict,
) { }

@ArgsType()
export class FindUniqueBulletinNotesArgs {
  where: BulletinNotesWhereUniqueInput;
}

@ArgsType()
export class FindUniqueBulletinNotesAnnuelArgs {
  where: BulletinNotesAnnuelWhereUniqueInput;
}
