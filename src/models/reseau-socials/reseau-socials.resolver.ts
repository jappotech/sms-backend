import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ReseauSocialsService } from './reseau-socials.service'
import { ReseauSocial } from './entity/reseau-social.entity'
import { FindManyReseauSocialArgs, FindUniqueReseauSocialArgs } from './dtos/find.args'
import { CreateReseauSocialInput } from './dtos/create-reseau-social.input'
import { UpdateReseauSocialInput } from './dtos/update-reseau-social.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Resolver(() => ReseauSocial)
export class ReseauSocialsResolver {
  constructor(private readonly reseauSocialsService: ReseauSocialsService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => ReseauSocial)
  createReseauSocial(@Args('createReseauSocialInput') args: CreateReseauSocialInput, @GetUser() user: GetUserType) {
    // // checkRowLevelPermission(user, args.uid)
    return this.reseauSocialsService.create(args)
  }

  @Query(() => [ReseauSocial], { name: 'reseauSocials' })
  findAll(@Args() args: FindManyReseauSocialArgs) {
    return this.reseauSocialsService.findAll(args)
  }

  @Query(() => ReseauSocial, { name: 'reseauSocial' })
  findOne(@Args() args: FindUniqueReseauSocialArgs) {
    return this.reseauSocialsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ReseauSocial)
  async updateReseauSocial(@Args('updateReseauSocialInput') args: UpdateReseauSocialInput, @GetUser() user: GetUserType) {
    const reseauSocial = await this.prisma.reseauSocial.findUnique({ where: { id: args.id } })
    // checkRowLevelPermission(user, reseauSocial.uid)
    return this.reseauSocialsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ReseauSocial)
  async removeReseauSocial(@Args() args: FindUniqueReseauSocialArgs, @GetUser() user: GetUserType) {
    const reseauSocial = await this.prisma.reseauSocial.findUnique(args)
    // checkRowLevelPermission(user, reseauSocial.uid)
    return this.reseauSocialsService.remove(args)
  }
}
