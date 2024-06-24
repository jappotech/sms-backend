import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DiplomesService } from './diplomes.service';
import { Diplome } from './entity/diplome.entity';
import { FindManyDiplomeArgs, FindUniqueDiplomeArgs } from './dtos/find.args';
import { CreateDiplomeInput } from './dtos/create-diplome.input';
import { UpdateDiplomeInput } from './dtos/update-diplome.input';
import {
  checkRowLevelPermission,
  checkUserAffiliation,
} from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Resolver(() => Diplome)
export class DiplomesResolver {
  constructor(
    private readonly diplomesService: DiplomesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Diplome)
  createDiplome(
    @Args('createDiplomeInput') args: CreateDiplomeInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.diplomesService.create(args);
  }

  @AllowAuthenticated()
  @Query(() => [Diplome], { name: 'diplomes' })
  async findAll(
    @Args() args: FindManyDiplomeArgs,
    @GetUser() user: GetUserType,
  ) {
    /* const affiliation = await checkUserAffiliation(user);
    if (affiliation) {
      return this.diplomesService.findAllByEtablissement(
        args,
        affiliation.etablissementId,
      );
    } */
    return this.diplomesService.findAll(args);
  }

  @Query(() => Diplome, { name: 'diplome' })
  findOne(@Args() args: FindUniqueDiplomeArgs) {
    return this.diplomesService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Diplome)
  async updateDiplome(
    @Args('updateDiplomeInput') args: UpdateDiplomeInput,
    @GetUser() user: GetUserType,
  ) {
    const diplome = await this.prisma.diplome.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, diplome.uid)
    return this.diplomesService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Diplome)
  async removeDiplome(
    @Args() args: FindUniqueDiplomeArgs,
    @GetUser() user: GetUserType,
  ) {
    const diplome = await this.prisma.diplome.findUnique(args);
    // checkRowLevelPermission(user, diplome.uid)
    return this.diplomesService.remove(args);
  }
}
