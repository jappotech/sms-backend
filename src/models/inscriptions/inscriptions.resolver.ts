import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { InscriptionsService } from './inscriptions.service';
import { Inscription } from './entity/inscription.entity';
import {
  FindManyInscriptionArgs,
  FindUniqueInscriptionArgs,
} from './dtos/find.args';
import { CreateInscriptionInput } from './dtos/create-inscription.input';
import { UpdateInscriptionInput } from './dtos/update-inscription.input';
import { ImportInscriptionsInput } from './dtos/import-inscriptions.input';
import { checkRowLevelPermission, checkUserAffiliation } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Etudiant } from '../etudiants/entity/etudiant.entity';
import { Utilisateur } from '../utilisateurs/entity/utilisateur.entity';
import { Classe } from '../classes/entity/classe.entity';
import { Diplome } from '../diplomes/entity/diplome.entity';
import { GraphQLUpload } from 'graphql-upload-minimal';

@Resolver(() => Inscription)
export class InscriptionsResolver {
  constructor(
    private readonly inscriptionsService: InscriptionsService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => Inscription)
  createInscription(
    @Args('createInscriptionInput') args: CreateInscriptionInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.inscriptionsService.create(args);
  }

  @AllowAuthenticated()
  @Query(() => [Inscription], { name: 'inscriptions' })
  async findAll(@Args() args: FindManyInscriptionArgs, @GetUser() user: GetUserType) {
    const affiliation = await checkUserAffiliation(user);
    if (affiliation) {
      return this.inscriptionsService.findAllByEtablissement(
        args,
        affiliation.etablissementId,
      );
    }
    return this.inscriptionsService.findAll(args);
  }

  @Query(() => Inscription, { name: 'inscription' })
  findOne(@Args() args: FindUniqueInscriptionArgs) {
    return this.inscriptionsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Inscription)
  async updateInscription(
    @Args('updateInscriptionInput') args: UpdateInscriptionInput,
    @GetUser() user: GetUserType,
  ) {
    const inscription = await this.prisma.inscription.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, inscription.uid)
    return this.inscriptionsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Inscription)
  async removeInscription(
    @Args() args: FindUniqueInscriptionArgs,
    @GetUser() user: GetUserType,
  ) {
    const inscription = await this.prisma.inscription.findUnique(args);
    // checkRowLevelPermission(user, inscription.uid)
    return this.inscriptionsService.remove(args);
  }

  @ResolveField(() => Etudiant)
  async etudiant(@Parent() parent: Inscription) {
    return this.prisma.etudiant.findUnique({
      where: { id: parent.etudiantId },
      include: { profile: true },
    });
  }

  @ResolveField(() => Classe)
  async classe(@Parent() parent: Inscription) {
    return this.prisma.classe.findUnique({
      where: { id: parent.classeId },
      include: { etablissement: true },
    });
  }

  @ResolveField(() => Diplome)
  async diplome(@Parent() parent: Inscription) {
    return this.prisma.diplome.findUnique({
      where: { id: parent.diplomeId },
    });
  }

  @AllowAuthenticated()
  @Mutation(() => ImportResult)
  async importInscriptions(
    @Args('importInput') importInput: ImportInscriptionsInput,
    @GetUser() user: GetUserType,
  ) {
    // Vérifier les permissions - pour l'instant tout utilisateur authentifié peut importer
    return this.inscriptionsService.importFromFile(importInput);
  }
}

// Définition du type de résultat pour l'importation
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ImportResult {
  @Field(() => Boolean)
  success: boolean;

  @Field(() => Int)
  count: number;

  @Field(() => [Inscription])
  inscriptions: Inscription[];
}
