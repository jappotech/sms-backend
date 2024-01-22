import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { AccountsService } from './accounts.service'
import { Account } from './entity/account.entity'
import { FindManyAccountArgs, FindUniqueAccountArgs } from './dtos/find.args'
import { CreateAccountInput } from './dtos/create-account.input'
import { UpdateAccountInput } from './dtos/update-account.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Account)
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService,
    private readonly prisma: PrismaService) { }

  // @AllowAuthenticated()
  @Mutation(() => Account)
  createAccount(@Args('createAccountInput') args: CreateAccountInput, @GetUser() user: GetUserType) {
    // checkRowLevelPermission(user, args.uid)
    return this.accountsService.create(args)
  }

  @AllowAuthenticated()
  @Query(() => [Account], { name: 'accounts' })
  findAll(@Args() args: FindManyAccountArgs, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, user.uid, ['ADMIN'])
    return this.accountsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => Account, { name: 'account' })
  findOne(@Args() args: FindUniqueAccountArgs, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, user.uid)
    return this.accountsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Account)
  async updateAccount(@Args('updateAccountInput') args: UpdateAccountInput, @GetUser() user: GetUserType) {
    const account = await this.prisma.account.findUnique({ where: { id: args.id } })
    checkRowLevelPermission(user, account.uid)
    return this.accountsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Account)
  async removeAccount(@Args() args: FindUniqueAccountArgs, @GetUser() user: GetUserType) {
    const account = await this.prisma.account.findUnique(args)
    checkRowLevelPermission(user, user.uid, ['ADMIN'])
    return this.accountsService.remove(args)
  }
}
