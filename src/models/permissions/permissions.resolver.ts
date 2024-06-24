import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PermissionsService } from './permissions.service';
import { Permission } from './entity/permission.entity';
import {
  FindManyPermissionArgs,
  FindUniquePermissionArgs,
} from './dtos/find.args';
import { CreatePermissionInput } from './dtos/create-permission.input';
import { UpdatePermissionInput } from './dtos/update-permission.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Resolver(() => Permission)
export class PermissionsResolver {
  constructor(
    private readonly permissionsService: PermissionsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Permission)
  createPermission(
    @Args('createPermissionInput') args: CreatePermissionInput,
    @GetUser() user: GetUserType,
  ) {
    // // checkRowLevelPermission(user, args.uid)
    return this.permissionsService.create(args);
  }

  @Query(() => [Permission], { name: 'permissions' })
  findAll(@Args() args: FindManyPermissionArgs) {
    return this.permissionsService.findAll(args);
  }

  @Query(() => Permission, { name: 'permission' })
  findOne(@Args() args: FindUniquePermissionArgs) {
    return this.permissionsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Permission)
  async updatePermission(
    @Args('updatePermissionInput') args: UpdatePermissionInput,
    @GetUser() user: GetUserType,
  ) {
    const permission = await this.prisma.permission.findUnique({
      where: { id: args.id },
    });
    // checkRowLevelPermission(user, permission.uid)
    return this.permissionsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Permission)
  async removePermission(
    @Args() args: FindUniquePermissionArgs,
    @GetUser() user: GetUserType,
  ) {
    const permission = await this.prisma.permission.findUnique(args);
    // checkRowLevelPermission(user, permission.uid)
    return this.permissionsService.remove(args);
  }
}
