import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { AnneeScolairesService } from './annee-scolaires.service'
import { AnneeScolaire } from './entity/annee-scolaire.entity'
import { FindManyAnneeScolaireArgs, FindUniqueAnneeScolaireArgs } from './dtos/find.args'
import { CreateAnneeScolaireInput } from './dtos/create-annee-scolaire.input'
import { UpdateAnneeScolaireInput } from './dtos/update-annee-scolaire.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => AnneeScolaire)
export class AnneeScolairesResolver {
  constructor(private readonly anneeScolairesService: AnneeScolairesService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => AnneeScolaire)
  createAnneeScolaire(@Args('createAnneeScolaireInput') args: CreateAnneeScolaireInput, @GetUser() user: GetUserType) {
    // checkRowLevelPermission(user, args.uid)
    return this.anneeScolairesService.create(args)
  }

  @Query(() => [AnneeScolaire], { name: 'anneeScolaires' })
  findAll(@Args() args: FindManyAnneeScolaireArgs) {
    return this.anneeScolairesService.findAll(args)
  }

  @Query(() => AnneeScolaire, { name: 'anneeScolaire' })
  findOne(@Args() args: FindUniqueAnneeScolaireArgs) {
    return this.anneeScolairesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => AnneeScolaire)
  async updateAnneeScolaire(@Args('updateAnneeScolaireInput') args: UpdateAnneeScolaireInput, @GetUser() user: GetUserType) {
    const anneeScolaire = await this.prisma.anneeScolaire.findUnique({ where: { id: args.id } })
    // checkRowLevelPermission(user, anneeScolaire.uid)
    return this.anneeScolairesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => AnneeScolaire)
  async removeAnneeScolaire(@Args() args: FindUniqueAnneeScolaireArgs, @GetUser() user: GetUserType) {
    const anneeScolaire = await this.prisma.anneeScolaire.findUnique(args)
    // checkRowLevelPermission(user, anneeScolaire.uid)
    return this.anneeScolairesService.remove(args)
  }
}
