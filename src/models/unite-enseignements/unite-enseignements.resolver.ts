import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UniteEnseignementsService } from './unite-enseignements.service';
import { UniteEnseignement } from './entity/unite-enseignement.entity';
import {
  FindManyUniteEnseignementArgs,
  FindUniqueUniteEnseignementArgs,
} from './dtos/find.args';
import { CreateUniteEnseignementInput } from './dtos/create-unite-enseignement.input';
import { UpdateUniteEnseignementInput } from './dtos/update-unite-enseignement.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Matiere } from '../matieres/entity/matiere.entity';

@Resolver(() => UniteEnseignement)
export class UniteEnseignementsResolver {
  constructor(
    private readonly uniteEnseignementsService: UniteEnseignementsService,
    private readonly prisma: PrismaService,
  ) {}

  // @AllowAuthenticated()
  @Mutation(() => UniteEnseignement)
  createUniteEnseignement(
    @Args('createUniteEnseignementInput') args: CreateUniteEnseignementInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.uniteEnseignementsService.create(args);
  }

  @Query(() => [UniteEnseignement], { name: 'uniteEnseignements' })
  findAll(@Args() args: FindManyUniteEnseignementArgs) {
    return this.uniteEnseignementsService.findAll(args);
  }

  @Query(() => UniteEnseignement, { name: 'uniteEnseignement' })
  findOne(@Args() args: FindUniqueUniteEnseignementArgs) {
    return this.uniteEnseignementsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => UniteEnseignement)
  async updateUniteEnseignement(
    @Args('updateUniteEnseignementInput') args: UpdateUniteEnseignementInput,
    @GetUser() user: GetUserType,
  ) {
    const uniteEnseignement = await this.prisma.uniteEnseignement.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, uniteEnseignement.uid)
    return this.uniteEnseignementsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => UniteEnseignement)
  async removeUniteEnseignement(
    @Args() args: FindUniqueUniteEnseignementArgs,
    @GetUser() user: GetUserType,
  ) {
    const uniteEnseignement =
      await this.prisma.uniteEnseignement.findUnique(args);
    // checkRowLevelPermission(user, uniteEnseignement.uid)
    return this.uniteEnseignementsService.remove(args);
  }

  @ResolveField(() => [Matiere])
  async matieres(@Parent() parent: UniteEnseignement) {
    return this.prisma.matiere.findMany({
      where: { uniteEnseigmentId: parent.id },
    });
  }
}
