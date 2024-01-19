import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { SpecialitesService } from './specialites.service'
import { Specialite } from './entity/specialite.entity'
import { FindManySpecialiteArgs, FindUniqueSpecialiteArgs } from './dtos/find.args'
import { CreateSpecialiteInput } from './dtos/create-specialite.input'
import { UpdateSpecialiteInput } from './dtos/update-specialite.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Resolver(() => Specialite)
export class SpecialitesResolver {
  constructor(private readonly specialitesService: SpecialitesService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => Specialite)
  createSpecialite(@Args('createSpecialiteInput') args: CreateSpecialiteInput, @GetUser() user: GetUserType) {
    // // checkRowLevelPermission(user, args.uid)
    return this.specialitesService.create(args)
  }

  @Query(() => [Specialite], { name: 'specialites' })
  findAll(@Args() args: FindManySpecialiteArgs) {
    return this.specialitesService.findAll(args)
  }

  @Query(() => Specialite, { name: 'specialite' })
  findOne(@Args() args: FindUniqueSpecialiteArgs) {
    return this.specialitesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Specialite)
  async updateSpecialite(@Args('updateSpecialiteInput') args: UpdateSpecialiteInput, @GetUser() user: GetUserType) {
    const specialite = await this.prisma.specialite.findUnique({ where: { id: args.id } })
    // checkRowLevelPermission(user, specialite.uid)
    return this.specialitesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Specialite)
  async removeSpecialite(@Args() args: FindUniqueSpecialiteArgs, @GetUser() user: GetUserType) {
    const specialite = await this.prisma.specialite.findUnique(args)
    // checkRowLevelPermission(user, specialite.uid)
    return this.specialitesService.remove(args)
  }
}
