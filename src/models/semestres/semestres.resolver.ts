import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { SemestresService } from './semestres.service';
import { Semestre } from './entity/semestre.entity';
import { FindManySemestreArgs, FindUniqueSemestreArgs } from './dtos/find.args';
import { CreateSemestreInput } from './dtos/create-semestre.input';
import { UpdateSemestreInput } from './dtos/update-semestre.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UniteEnseignement } from '../unite-enseignements/entity/unite-enseignement.entity';
import { Matiere } from '../matieres/entity/matiere.entity';

@Resolver(() => Semestre)
export class SemestresResolver {
  constructor(
    private readonly semestresService: SemestresService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Semestre)
  createSemestre(
    @Args('createSemestreInput') args: CreateSemestreInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.semestresService.create(args);
  }

  @Query(() => [Semestre], { name: 'semestres' })
  findAll(@Args() args: FindManySemestreArgs) {
    return this.semestresService.findAll(args);
  }

  @Query(() => Semestre, { name: 'semestre' })
  findOne(@Args() args: FindUniqueSemestreArgs) {
    return this.semestresService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Semestre)
  async updateSemestre(
    @Args('updateSemestreInput') args: UpdateSemestreInput,
    @GetUser() user: GetUserType,
  ) {
    const semestre = await this.prisma.semestre.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, semestre.uid)
    return this.semestresService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Semestre)
  async removeSemestre(
    @Args() args: FindUniqueSemestreArgs,
    @GetUser() user: GetUserType,
  ) {
    const semestre = await this.prisma.semestre.findUnique(args);
    // checkRowLevelPermission(user, semestre.uid)
    return this.semestresService.remove(args);
  }

  @ResolveField(() => [UniteEnseignement])
  async uniteEnseignements(@Parent() parent: Semestre) {
    return this.prisma.uniteEnseignement.findMany({
      where: { semestreId: parent.id },
      include: {
        matieres: true,
      },
    });
  }
}
