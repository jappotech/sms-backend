import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { SallesService } from './salles.service'
import { Salle } from './entity/salle.entity'
import { FindManySalleArgs, FindUniqueSalleArgs } from './dtos/find.args'
import { CreateSalleInput } from './dtos/create-salle.input'
import { UpdateSalleInput } from './dtos/update-salle.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Resolver(() => Salle)
export class SallesResolver {
  constructor(private readonly sallesService: SallesService,
    private readonly prisma: PrismaService) { }

  // @AllowAuthenticated()
  @Mutation(() => Salle)
  createSalle(@Args('createSalleInput') args: CreateSalleInput, @GetUser() user: GetUserType) {
    // // checkRowLevelPermission(user, args.uid)
    return this.sallesService.create(args)
  }

  @Query(() => [Salle], { name: 'salles' })
  findAll(@Args() args: FindManySalleArgs) {
    return this.sallesService.findAll(args)
  }

  @Query(() => Salle, { name: 'salle' })
  findOne(@Args() args: FindUniqueSalleArgs) {
    return this.sallesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Salle)
  async updateSalle(@Args('updateSalleInput') args: UpdateSalleInput, @GetUser() user: GetUserType) {
    const salle = await this.prisma.salle.findUnique({ where: { id: args.id } })
    // checkRowLevelPermission(user, salle.uid)
    return this.sallesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Salle)
  async removeSalle(@Args() args: FindUniqueSalleArgs, @GetUser() user: GetUserType) {
    const salle = await this.prisma.salle.findUnique(args)
    // checkRowLevelPermission(user, salle.uid)
    return this.sallesService.remove(args)
  }
}
