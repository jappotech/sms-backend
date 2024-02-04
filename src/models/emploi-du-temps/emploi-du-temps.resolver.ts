import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { EmploiDuTempsService } from './emploi-du-temps.service'
import { EmploiDuTemps } from './entity/emploi-du-temps.entity'
import { FindManyEmploiDuTempsArgs, FindUniqueEmploiDuTempsArgs } from './dtos/find.args'
import { CreateEmploiDuTempsInput } from './dtos/create-emploi-du-temps.input'
import { UpdateEmploiDuTempsInput } from './dtos/update-emploi-du-temps.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Resolver(() => EmploiDuTemps)
export class EmploiDuTempsResolver {
  constructor(private readonly emploiDuTempsService: EmploiDuTempsService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => EmploiDuTemps)
  createEmploiDuTemps(@Args('createEmploiDuTempsInput') args: CreateEmploiDuTempsInput, @GetUser() user: GetUserType) {
    // // checkRowLevelPermission(user, args.uid)
    return this.emploiDuTempsService.create(args)
  }

  @Query(() => [EmploiDuTemps], { name: 'emploisDuTemps' })
  findAll(@Args() args: FindManyEmploiDuTempsArgs) {
    return this.emploiDuTempsService.findAll(args)
  }

  @Query(() => EmploiDuTemps, { name: 'emploiDuTemps' })
  findOne(@Args() args: FindUniqueEmploiDuTempsArgs) {
    return this.emploiDuTempsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => EmploiDuTemps)
  async updateEmploiDuTemps(@Args('updateEmploiDuTempsInput') args: UpdateEmploiDuTempsInput, @GetUser() user: GetUserType) {
    const emploiDuTemps = await this.prisma.emploiDuTemps.findUnique({ where: { id: args.id } })
    // checkRowLevelPermission(user, emploiDuTemps.uid)
    return this.emploiDuTempsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => EmploiDuTemps)
  async removeEmploiDuTemps(@Args() args: FindUniqueEmploiDuTempsArgs, @GetUser() user: GetUserType) {
    const emploiDuTemps = await this.prisma.emploiDuTemps.findUnique(args)
    // checkRowLevelPermission(user, emploiDuTemps.uid)
    return this.emploiDuTempsService.remove(args)
  }
}
