import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { FeuillePresencesService } from './feuille-presences.service'
import { FeuillePresence } from './entity/feuille-presence.entity'
import { FindManyFeuillePresenceArgs, FindUniqueFeuillePresenceArgs } from './dtos/find.args'
import { CreateFeuillePresenceInput } from './dtos/create-feuille-presence.input'
import { UpdateFeuillePresenceInput } from './dtos/update-feuille-presence.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => FeuillePresence)
export class FeuillePresencesResolver {
  constructor(private readonly feuillePresencesService: FeuillePresencesService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => FeuillePresence)
  createFeuillePresence(@Args('createFeuillePresenceInput') args: CreateFeuillePresenceInput, @GetUser() user: GetUserType) {
    // checkRowLevelPermission(user, args.uid)
    return this.feuillePresencesService.create(args)
  }

  @Query(() => [FeuillePresence], { name: 'feuillePresences' })
  findAll(@Args() args: FindManyFeuillePresenceArgs) {
    return this.feuillePresencesService.findAll(args)
  }

  @Query(() => FeuillePresence, { name: 'feuillePresence' })
  findOne(@Args() args: FindUniqueFeuillePresenceArgs) {
    return this.feuillePresencesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => FeuillePresence)
  async updateFeuillePresence(@Args('updateFeuillePresenceInput') args: UpdateFeuillePresenceInput, @GetUser() user: GetUserType) {
    const feuillePresence = await this.prisma.feuillePresence.findUnique({ where: { id: args.id } })
    checkRowLevelPermission(user, feuillePresence.uid)
    return this.feuillePresencesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => FeuillePresence)
  async removeFeuillePresence(@Args() args: FindUniqueFeuillePresenceArgs, @GetUser() user: GetUserType) {
    const feuillePresence = await this.prisma.feuillePresence.findUnique(args)
    checkRowLevelPermission(user, feuillePresence.uid)
    return this.feuillePresencesService.remove(args)
  }
}
