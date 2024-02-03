import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { MatieresService } from './matieres.service'
import { Matiere } from './entity/matiere.entity'
import { FindManyMatiereArgs, FindUniqueMatiereArgs } from './dtos/find.args'
import { CreateMatiereInput } from './dtos/create-matiere.input'
import { UpdateMatiereInput } from './dtos/update-matiere.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Resolver(() => Matiere)
export class MatieresResolver {
  constructor(private readonly matieresService: MatieresService,
    private readonly prisma: PrismaService) { }

  // @AllowAuthenticated()
  @Mutation(() => Matiere)
  createMatiere(@Args('createMatiereInput') args: CreateMatiereInput, @GetUser() user: GetUserType) {
    // // checkRowLevelPermission(user, args.uid)
    return this.matieresService.create(args)
  }

  @Query(() => [Matiere], { name: 'matieres' })
  findAll(@Args() args: FindManyMatiereArgs) {
    return this.matieresService.findAll(args)
  }

  @Query(() => Matiere, { name: 'matiere' })
  findOne(@Args() args: FindUniqueMatiereArgs) {
    return this.matieresService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Matiere)
  async updateMatiere(@Args('updateMatiereInput') args: UpdateMatiereInput, @GetUser() user: GetUserType) {
    const matiere = await this.prisma.matiere.findUnique({ where: { id: args.id } })
    // checkRowLevelPermission(user, matiere.uid)
    return this.matieresService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Matiere)
  async removeMatiere(@Args() args: FindUniqueMatiereArgs, @GetUser() user: GetUserType) {
    const matiere = await this.prisma.matiere.findUnique(args)
    // checkRowLevelPermission(user, matiere.uid)
    return this.matieresService.remove(args)
  }
}
