import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { NoteEtudiantsService } from './note-etudiants.service';
import { NoteEtudiant } from './entity/note-etudiant.entity';
import {
  FindManyNoteEtudiantArgs,
  FindUniqueNoteEtudiantArgs,
} from './dtos/find.args';
import { CreateNoteEtudiantInput } from './dtos/create-note-etudiant.input';
import { UpdateNoteEtudiantInput } from './dtos/update-note-etudiant.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Etudiant } from '../etudiants/entity/etudiant.entity';
import { EvaluationEtudiants } from '../evaluation-etudiants/entity/evaluation-etudiants.entity';

@Resolver(() => NoteEtudiant)
export class NoteEtudiantsResolver {
  constructor(
    private readonly noteEtudiantsService: NoteEtudiantsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => NoteEtudiant)
  createNoteEtudiant(
    @Args('createNoteEtudiantInput') args: CreateNoteEtudiantInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.noteEtudiantsService.create(args);
  }

  @Query(() => [NoteEtudiant], { name: 'noteEtudiants' })
  findAll(@Args() args: FindManyNoteEtudiantArgs) {
    return this.noteEtudiantsService.findAll(args);
  }

  @Query(() => NoteEtudiant, { name: 'noteEtudiant' })
  findOne(@Args() args: FindUniqueNoteEtudiantArgs) {
    return this.noteEtudiantsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => NoteEtudiant)
  async updateNoteEtudiant(
    @Args('updateNoteEtudiantInput') args: UpdateNoteEtudiantInput,
    @GetUser() user: GetUserType,
  ) {
    const noteEtudiant = await this.prisma.noteEtudiant.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, noteEtudiant.uid)
    return this.noteEtudiantsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => NoteEtudiant)
  async removeNoteEtudiant(
    @Args() args: FindUniqueNoteEtudiantArgs,
    @GetUser() user: GetUserType,
  ) {
    const noteEtudiant = await this.prisma.noteEtudiant.findUnique(args);
    // checkRowLevelPermission(user, noteEtudiant.uid)
    return this.noteEtudiantsService.remove(args);
  }

  @ResolveField(() => Etudiant)
  async etudiant(@Parent() parent: NoteEtudiant) {
    return this.prisma.etudiant.findMany({
      where: { id: parent.etudiantId },
    });
  }

  @ResolveField(() => EvaluationEtudiants)
  async evaluation(@Parent() parent: NoteEtudiant) {
    return this.prisma.evaluationEtudiants.findUnique({
      where: { id: parent.evaluationEtudiantId },
    });
  }
}
