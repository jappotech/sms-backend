import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PaiementsService } from './paiements.service'
import { Paiement } from './entity/paiement.entity'
import { FindManyPaiementArgs, FindUniquePaiementArgs } from './dtos/find.args'
import { CreatePaiementInput } from './dtos/create-paiement.input'
import { UpdatePaiementInput } from './dtos/update-paiement.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Resolver(() => Paiement)
export class PaiementsResolver {
  constructor(private readonly paiementsService: PaiementsService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => Paiement)
  createPaiement(@Args('createPaiementInput') args: CreatePaiementInput, @GetUser() user: GetUserType) {
    // // checkRowLevelPermission(user, args.uid)
    return this.paiementsService.create(args)
  }

  @Query(() => [Paiement], { name: 'paiements' })
  findAll(@Args() args: FindManyPaiementArgs) {
    return this.paiementsService.findAll(args)
  }

  @Query(() => Paiement, { name: 'paiement' })
  findOne(@Args() args: FindUniquePaiementArgs) {
    return this.paiementsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Paiement)
  async updatePaiement(@Args('updatePaiementInput') args: UpdatePaiementInput, @GetUser() user: GetUserType) {
    const paiement = await this.prisma.paiement.findUnique({ where: { id: args.id } })
    // checkRowLevelPermission(user, paiement.uid)
    return this.paiementsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Paiement)
  async removePaiement(@Args() args: FindUniquePaiementArgs, @GetUser() user: GetUserType) {
    const paiement = await this.prisma.paiement.findUnique(args)
    // checkRowLevelPermission(user, paiement.uid)
    return this.paiementsService.remove(args)
  }
}
