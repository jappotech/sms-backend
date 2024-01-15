import { Injectable } from '@nestjs/common'
import { FindManyPermissionArgs, FindUniquePermissionArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreatePermissionInput } from './dtos/create-permission.input'
import { UpdatePermissionInput } from './dtos/update-permission.input'

@Injectable()
export class PermissionsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPermissionInput: CreatePermissionInput) {
    return this.prisma.permission.create({
      data: createPermissionInput,
    })
  }

  findAll(args: FindManyPermissionArgs) {
    return this.prisma.permission.findMany(args)
  }

  findOne(args: FindUniquePermissionArgs) {
    return this.prisma.permission.findUnique(args)
  }

  update(updatePermissionInput: UpdatePermissionInput) {
    const { id, ...data } = updatePermissionInput
    return this.prisma.permission.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniquePermissionArgs) {
    return this.prisma.permission.delete(args)
  }
}
