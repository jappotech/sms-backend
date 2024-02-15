import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NoteEtudiantOrderByWithRelationInput } from './order-by.args';
import {
  NoteEtudiantWhereInput,
  NoteEtudiantWhereUniqueInput,
} from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';

registerEnumType(Prisma.NoteEtudiantScalarFieldEnum, {
  name: 'NoteEtudiantScalarFieldEnum',
});

@ArgsType()
class FindManyNoteEtudiantArgsStrict
  implements
    RestrictProperties<
      FindManyNoteEtudiantArgsStrict,
      Omit<Prisma.NoteEtudiantFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => NoteEtudiantWhereInput, { nullable: true })
  where: NoteEtudiantWhereInput;

  @Field(() => [NoteEtudiantOrderByWithRelationInput], { nullable: true })
  orderBy: NoteEtudiantOrderByWithRelationInput[];

  @Field(() => NoteEtudiantWhereUniqueInput, { nullable: true })
  cursor: NoteEtudiantWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;

  @Field(() => [Prisma.NoteEtudiantScalarFieldEnum])
  distinct: Prisma.NoteEtudiantScalarFieldEnum[];
}

@ArgsType()
export class FindManyNoteEtudiantArgs extends PartialType(
  FindManyNoteEtudiantArgsStrict,
) {}

@ArgsType()
export class FindUniqueNoteEtudiantArgs {
  where: NoteEtudiantWhereUniqueInput;
}
