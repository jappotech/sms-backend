import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ClassesService } from './classes.service'
import { Classe } from './entity/classe.entity'
import { FindManyClasseArgs, FindUniqueClasseArgs } from './dtos/find.args'
import { CreateClasseInput } from './dtos/create-classe.input'
import { UpdateClasseInput } from './dtos/update-classe.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Classe)
export class ClassesResolver {
  constructor(private readonly classesService: ClassesService,
    private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @Mutation(() => Classe)
  createClasse(@Args('createClasseInput') args: CreateClasseInput, @GetUser() user: GetUserType) {
    // checkRowLevelPermission(user, args.uid)
    return this.classesService.create(args)
  }

  @Query(() => [Classe], { name: 'classes' })
  findAll(@Args() args: FindManyClasseArgs) {
    return this.classesService.findAll(args)
  }

  @Query(() => Classe, { name: 'classe' })
  findOne(@Args() args: FindUniqueClasseArgs) {
    return this.classesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Classe)
  async updateClasse(@Args('updateClasseInput') args: UpdateClasseInput, @GetUser() user: GetUserType) {
    const classe = await this.prisma.classe.findUnique({ where: { id: args.id } })
    checkRowLevelPermission(user, classe.uid)
    return this.classesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Classe)
  async removeClasse(@Args() args: FindUniqueClasseArgs, @GetUser() user: GetUserType) {
    const classe = await this.prisma.classe.findUnique(args)
    checkRowLevelPermission(user, classe.uid)
    return this.classesService.remove(args)
  }
}
