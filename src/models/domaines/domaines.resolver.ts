import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { DomainesService } from './domaines.service'
import { Domaine } from './entity/domaine.entity'
import { FindManyDomaineArgs, FindUniqueDomaineArgs } from './dtos/find.args'
import { CreateDomaineInput } from './dtos/create-domaine.input'
import { UpdateDomaineInput } from './dtos/update-domaine.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Domaine)
export class DomainesResolver {
  constructor(private readonly domainesService: DomainesService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => Domaine)
  createDomaine(@Args('createDomaineInput') args: CreateDomaineInput, @GetUser() user: GetUserType) {
    // checkRowLevelPermission(user, args.uid)
    return this.domainesService.create(args)
  }

  @Query(() => [Domaine], { name: 'domaines' })
  findAll(@Args() args: FindManyDomaineArgs) {
    return this.domainesService.findAll(args)
  }

  @Query(() => Domaine, { name: 'domaine' })
  findOne(@Args() args: FindUniqueDomaineArgs) {
    return this.domainesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Domaine)
  async updateDomaine(@Args('updateDomaineInput') args: UpdateDomaineInput, @GetUser() user: GetUserType) {
    const domaine = await this.prisma.domaine.findUnique({ where: { id: args.id } })
    checkRowLevelPermission(user, domaine.uid)
    return this.domainesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Domaine)
  async removeDomaine(@Args() args: FindUniqueDomaineArgs, @GetUser() user: GetUserType) {
    const domaine = await this.prisma.domaine.findUnique(args)
    checkRowLevelPermission(user, domaine.uid)
    return this.domainesService.remove(args)
  }
}
