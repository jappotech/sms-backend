import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { DomainesService } from './domaines.service';
import { Domaine } from './entity/domaine.entity';
import { FindManyDomaineArgs, FindUniqueDomaineArgs } from './dtos/find.args';
import { CreateDomaineInput } from './dtos/create-domaine.input';
import { UpdateDomaineInput } from './dtos/update-domaine.input';
import { checkRowLevelPermission, checkUserAffiliation } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Res } from '@nestjs/common';
import { Mention } from '../mentions/entity/mention.entity';

@Resolver(() => Domaine)
export class DomainesResolver {
  constructor(
    private readonly domainesService: DomainesService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => Domaine)
  createDomaine(
    @Args('createDomaineInput') args: CreateDomaineInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.domainesService.create(args);
  }

  @AllowAuthenticated()
  @Query(() => [Domaine], { name: 'domaines' })
  async findAll(@Args() args: FindManyDomaineArgs, @GetUser() user: GetUserType) {
    return this.domainesService.findAll(args);
  }

  @AllowAuthenticated()
  @Query(() => [Domaine], { name: 'domaines_etablissement' })
  async findAllByEtablissement(@Args() args: FindManyDomaineArgs, @GetUser() user: GetUserType) {
    const affiliation = await checkUserAffiliation(user);
    if (affiliation) {
      return this.domainesService.findAllByEtablissement(
        args,
        affiliation.etablissementId,
      );
    }
    return this.domainesService.findAll(args);
  }

  @AllowAuthenticated()
  @Query(() => Domaine, { name: 'domaine' })
  findOne(@Args() args: FindUniqueDomaineArgs) {
    return this.domainesService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Domaine)
  async updateDomaine(
    @Args('updateDomaineInput') args: UpdateDomaineInput,
    @GetUser() user: GetUserType,
  ) {
    const domaine = await this.prisma.domaine.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, domaine.uid)
    return this.domainesService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Domaine)
  async removeDomaine(
    @Args() args: FindUniqueDomaineArgs,
    @GetUser() user: GetUserType,
  ) {
    const domaine = await this.prisma.domaine.findUnique(args);
    // checkRowLevelPermission(user, domaine.uid)
    return this.domainesService.remove(args);
  }

  @AllowAuthenticated()
  @ResolveField(() => [Mention])
  async mentions(@Parent() parent: Domaine, @GetUser() user: GetUserType,) {
    const affiliation = await checkUserAffiliation(user);
    return this.prisma.mention.findMany({
      where: {
        AND: [
          {
            domaineId: parent.id,
          },
          {
            domaine: {
              etablissements: {
                some: {
                  id: affiliation.etablissementId,
                },
              },
            },
          },
        ]
      },
    });
  }
}
