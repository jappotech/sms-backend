import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { EtablissementsService } from './etablissements.service';
import { Etablissement } from './entity/etablissement.entity';
import {
  FindManyEtablissementArgs,
  FindUniqueEtablissementArgs,
} from './dtos/find.args';
import { CreateEtablissementInput } from './dtos/create-etablissement.input';
import { UpdateEtablissementInput } from './dtos/update-etablissement.input';
import { checkRowLevelPermission, checkUserAffiliation } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Domaine } from '../domaines/entity/domaine.entity';
import { AnneeScolaire } from '../annee-scolaires/entity/annee-scolaire.entity';
import { Adresse } from '../adresses/entity/adresse.entity';
import { Contact } from '../contacts/entity/contact.entity';

@Resolver(() => Etablissement)
export class EtablissementsResolver {
  constructor(
    private readonly etablissementsService: EtablissementsService,
    private readonly prisma: PrismaService,
  ) { }

  // @AllowAuthenticated()
  @Mutation(() => Etablissement)
  createEtablissement(
    @Args('createEtablissementInput') args: CreateEtablissementInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.etablissementsService.create(args);
  }

  @AllowAuthenticated()
  @Query(() => [Etablissement], { name: 'etablissements' })
  async findAll(@Args() args: FindManyEtablissementArgs, @GetUser() user: GetUserType) {
    const affiliation = await checkUserAffiliation(user);
    if (affiliation) {
      return this.etablissementsService.findAll({
        ...args,
        where: {
          ...args.where,
          id: {
            equals: affiliation.etablissementId,
          },
        },
      });
    }
    return this.etablissementsService.findAll(args);
  }

  @Query(() => Etablissement, { name: 'etablissement' })
  findOne(@Args() args: FindUniqueEtablissementArgs) {
    return this.etablissementsService.findOne(args);
  }

  // @AllowAuthenticated()
  @Mutation(() => Etablissement)
  async updateEtablissement(
    @Args('updateEtablissementInput') args: UpdateEtablissementInput,
    @GetUser() user: GetUserType,
  ) {
    const etablissement = await this.prisma.etablissement.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, etablissement.uid)
    return this.etablissementsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Etablissement)
  async removeEtablissement(
    @Args() args: FindUniqueEtablissementArgs,
    @GetUser() user: GetUserType,
  ) {
    const etablissement = await this.prisma.etablissement.findUnique(args);
    // checkRowLevelPermission(user, etablissement.uid)
    return this.etablissementsService.remove(args);
  }

  @ResolveField(() => [Domaine])
  async domaines(@Parent() parent: Etablissement) {
    return this.prisma.domaine.findMany({
      where: {
        etablissements: {
          some: {
            id: parent.id,
          },
        },
      },
    });
  }

  @ResolveField(() => Adresse)
  async adresse(@Parent() parent: Etablissement) {
    if (!parent.adresseId) {
      return {};
    }
    return this.prisma.adresse.findUnique({
      where: { id: parent.adresseId },
    });
  }

  @ResolveField(() => Contact)
  async contact(@Parent() parent: Etablissement) {
    if (!parent.contactId) {
      return {};
    }
    return this.prisma.contact.findUnique({
      where: { id: parent.contactId },
    });
  }
}
