import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql'
import { EtudiantsService } from './etudiants.service'
import { Etudiant } from './entity/etudiant.entity'
import { FindManyEtudiantArgs, FindUniqueEtudiantArgs } from './dtos/find.args'
import { CreateEtudiantInput } from './dtos/create-etudiant.input'
import { UpdateEtudiantInput } from './dtos/update-etudiant.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { Utilisateur } from '../utilisateurs/entity/utilisateur.entity'
import { NoteEtudiant } from '../note-etudiants/entity/note-etudiant.entity'
import { Inscription } from '../inscriptions/entity/inscription.entity'

@Resolver(() => Etudiant)
export class EtudiantsResolver {
  constructor(private readonly etudiantsService: EtudiantsService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => Etudiant)
  createEtudiant(@Args('createEtudiantInput') args: CreateEtudiantInput, @GetUser() user: GetUserType) {
    // // checkRowLevelPermission(user, args.uid)
    return this.etudiantsService.create(args)
  }

  @AllowAuthenticated()
  @Query(() => [Etudiant], { name: 'etudiants' })
  findAll(@Args() args: FindManyEtudiantArgs) {
    return this.etudiantsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => Etudiant, { name: 'etudiant' })
  findOne(@Args() args: FindUniqueEtudiantArgs) {
    return this.etudiantsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Etudiant)
  async updateEtudiant(@Args('updateEtudiantInput') args: UpdateEtudiantInput, @GetUser() user: GetUserType) {
    const etudiant = await this.prisma.etudiant.findUnique({ where: { id: args.id } })
    // checkRowLevelPermission(user, etudiant.uid)
    return this.etudiantsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Etudiant)
  async removeEtudiant(@Args() args: FindUniqueEtudiantArgs, @GetUser() user: GetUserType) {
    const etudiant = await this.prisma.etudiant.findUnique(args)
    // checkRowLevelPermission(user, etudiant.uid)
    return this.etudiantsService.remove(args)
  }

  @ResolveField(() => Utilisateur)
  async profile(@Parent() parent: Etudiant) {
    return this.prisma.utilisateur.findUnique({
      where: { id: parent.profileId }
    })
  }

  @ResolveField(() => [NoteEtudiant])
  async notes(@Parent() parent: Etudiant) {
    return this.prisma.noteEtudiant.findMany({
      where: { etudiantId: parent.id }
    })
  }

  @ResolveField(() => [Inscription])
  async inscriptions(@Parent() parent: Etudiant) {
    return this.prisma.inscription.findMany({
      where: { etudiantId: parent.id }
    })
  }
}
