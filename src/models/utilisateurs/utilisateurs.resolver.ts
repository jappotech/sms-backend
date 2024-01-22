import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UtilisateursService } from './utilisateurs.service'
import { Utilisateur } from './entity/utilisateur.entity'
import { FindManyUtilisateurArgs, FindUniqueUtilisateurArgs } from './dtos/find.args'
import { CreateUtilisateurInput } from './dtos/create-utilisateur.input'
import { UpdateUtilisateurInput } from './dtos/update-utilisateur.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Resolver(() => Utilisateur)
export class UtilisateursResolver {
  constructor(private readonly utilisateursService: UtilisateursService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => Utilisateur)
  createUtilisateur(@Args('createUtilisateurInput') args: CreateUtilisateurInput, @GetUser() user: GetUserType) {
    // // // checkRowLevelPermission(user, args.uid)
    return this.utilisateursService.create(args)
  }

  @AllowAuthenticated()
  @Query(() => [Utilisateur], { name: 'utilisateurs' })
  findAll(@Args() args: FindManyUtilisateurArgs) {
    return this.utilisateursService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => Utilisateur, { name: 'utilisateur' })
  findOne(@Args() args: FindUniqueUtilisateurArgs) {
    return this.utilisateursService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Utilisateur)
  async updateUtilisateur(@Args('updateUtilisateurInput') args: UpdateUtilisateurInput, @GetUser() user: GetUserType) {
    const utilisateur = await this.prisma.utilisateur.findUnique({ where: { id: args.id } })
    // // checkRowLevelPermission(user, utilisateur.uid)
    return this.utilisateursService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Utilisateur)
  async removeUtilisateur(@Args() args: FindUniqueUtilisateurArgs, @GetUser() user: GetUserType) {
    const utilisateur = await this.prisma.utilisateur.findUnique(args)
    // // checkRowLevelPermission(user, utilisateur.uid)
    return this.utilisateursService.remove(args)
  }
}
