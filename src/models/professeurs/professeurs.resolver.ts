import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProfesseursService } from './professeurs.service'
import { Professeur } from './entity/professeur.entity'
import { FindManyProfesseurArgs, FindUniqueProfesseurArgs } from './dtos/find.args'
import { CreateProfesseurInput } from './dtos/create-professeur.input'
import { UpdateProfesseurInput } from './dtos/update-professeur.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Resolver(() => Professeur)
export class ProfesseursResolver {
  constructor(private readonly professeursService: ProfesseursService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => Professeur)
  createProfesseur(@Args('createProfesseurInput') args: CreateProfesseurInput, @GetUser() user: GetUserType) {
    // // checkRowLevelPermission(user, args.uid)
    return this.professeursService.create(args)
  }

  @Query(() => [Professeur], { name: 'professeurs' })
  findAll(@Args() args: FindManyProfesseurArgs) {
    return this.professeursService.findAll(args)
  }

  @Query(() => Professeur, { name: 'professeur' })
  findOne(@Args() args: FindUniqueProfesseurArgs) {
    return this.professeursService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Professeur)
  async updateProfesseur(@Args('updateProfesseurInput') args: UpdateProfesseurInput, @GetUser() user: GetUserType) {
    const professeur = await this.prisma.professeur.findUnique({ where: { id: args.id } })
    // checkRowLevelPermission(user, professeur.uid)
    return this.professeursService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Professeur)
  async removeProfesseur(@Args() args: FindUniqueProfesseurArgs, @GetUser() user: GetUserType) {
    const professeur = await this.prisma.professeur.findUnique(args)
    // checkRowLevelPermission(user, professeur.uid)
    return this.professeursService.remove(args)
  }
}
