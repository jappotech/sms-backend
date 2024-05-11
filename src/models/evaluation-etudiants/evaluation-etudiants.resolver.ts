import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { EvaluationEtudiantsService } from './evaluation-etudiants.service';
import { EvaluationEtudiants } from './entity/evaluation-etudiants.entity';
import {
  FindManyEvaluationEtudiantsArgs,
  FindUniqueEvaluationEtudiantsArgs,
} from './dtos/find.args';
import { CreateEvaluationEtudiantsInput } from './dtos/create-evaluation-etudiants.input';
import { UpdateEvaluationEtudiantsInput } from './dtos/update-evaluation-etudiants.input';
import { checkRowLevelPermission, checkUserAffiliation } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { NoteEtudiant } from '../note-etudiants/entity/note-etudiant.entity';
import { Cours } from '../cours/entity/cours.entity';

@Resolver(() => EvaluationEtudiants)
export class EvaluationEtudiantsResolver {
  constructor(
    private readonly evaluationEtudiantsService: EvaluationEtudiantsService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => EvaluationEtudiants)
  createEvaluationEtudiants(
    @Args('createEvaluationEtudiantsInput')
    args: CreateEvaluationEtudiantsInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.evaluationEtudiantsService.create(args);
  }

  @AllowAuthenticated()
  @Query(() => [EvaluationEtudiants], { name: 'evaluationsEtudiants' })
  async findAll(@Args() args: FindManyEvaluationEtudiantsArgs, @GetUser() user: GetUserType) {
    const affiliation = await checkUserAffiliation(user);
    if (affiliation) {
      return this.evaluationEtudiantsService.findAllByEtablissement(
        args,
        affiliation.etablissementId,
      );
    }
    return this.evaluationEtudiantsService.findAll(args);
  }

  @Query(() => EvaluationEtudiants, { name: 'evaluationEtudiants' })
  findOne(@Args() args: FindUniqueEvaluationEtudiantsArgs) {
    return this.evaluationEtudiantsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => EvaluationEtudiants)
  async updateEvaluationEtudiants(
    @Args('updateEvaluationEtudiantsInput')
    args: UpdateEvaluationEtudiantsInput,
    @GetUser() user: GetUserType,
  ) {
    const evaluationEtudiants =
      await this.prisma.evaluationEtudiants.findUnique({
        where: { id: args.id },
      });
    // checkRowLevelPermission(user, evaluationEtudiants.uid)
    return this.evaluationEtudiantsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => EvaluationEtudiants)
  async removeEvaluationEtudiants(
    @Args() args: FindUniqueEvaluationEtudiantsArgs,
    @GetUser() user: GetUserType,
  ) {
    const evaluationEtudiants =
      await this.prisma.evaluationEtudiants.findUnique(args);
    // checkRowLevelPermission(user, evaluationEtudiants.uid)
    return this.evaluationEtudiantsService.remove(args);
  }

  @ResolveField(() => [NoteEtudiant])
  async NoteEtudiant(@Parent() parent: EvaluationEtudiants) {
    return this.prisma.noteEtudiant.findMany({
      where: { evaluationEtudiantId: parent.id },
    });
  }

  @ResolveField(() => Cours)
  async Cours(@Parent() parent: EvaluationEtudiants) {
    return this.prisma.cours.findUnique({
      where: { id: parent.coursId },
    });
  }
}
