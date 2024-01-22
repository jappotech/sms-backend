import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CoursService } from './cours.service'
import { Cours } from './entity/cours.entity'
import { FindManyCoursArgs, FindUniqueCoursArgs } from './dtos/find.args'
import { CreateCoursInput } from './dtos/create-cours.input'
import { UpdateCoursInput } from './dtos/update-cours.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Resolver(() => Cours)
export class CoursResolver {
  constructor(private readonly coursService: CoursService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => Cours)
  createCours(@Args('createCoursInput') args: CreateCoursInput, @GetUser() user: GetUserType) {
    // // checkRowLevelPermission(user, args.uid)
    return this.coursService.create(args)
  }

  @Query(() => [Cours], { name: 'cours' })
  findAll(@Args() args: FindManyCoursArgs) {
    return this.coursService.findAll(args)
  }

  @Query(() => Cours, { name: 'cours' })
  findOne(@Args() args: FindUniqueCoursArgs) {
    return this.coursService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Cours)
  async updateCours(@Args('updateCoursInput') args: UpdateCoursInput, @GetUser() user: GetUserType) {
    const cours = await this.prisma.cours.findUnique({ where: { id: args.id } })
    // checkRowLevelPermission(user, cours.uid)
    return this.coursService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Cours)
  async removeCours(@Args() args: FindUniqueCoursArgs, @GetUser() user: GetUserType) {
    const cours = await this.prisma.cours.findUnique(args)
    // checkRowLevelPermission(user, cours.uid)
    return this.coursService.remove(args)
  }
}
