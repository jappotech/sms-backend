import { Injectable } from '@nestjs/common'
import { FindManyDomaineArgs, FindUniqueDomaineArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateDomaineInput } from './dtos/create-domaine.input'
import { UpdateDomaineInput } from './dtos/update-domaine.input'

@Injectable()
export class DomainesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createDomaineInput: CreateDomaineInput) {
    return this.prisma.domaine.create({
      data: createDomaineInput,
    })
  }

  findAll(args: FindManyDomaineArgs) {
    return this.prisma.domaine.findMany(args)
  }

  findOne(args: FindUniqueDomaineArgs) {
    return this.prisma.domaine.findUnique(args)
  }

  update(updateDomaineInput: UpdateDomaineInput) {
    const { id, ...data } = updateDomaineInput
    return this.prisma.domaine.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueDomaineArgs) {
    return this.prisma.domaine.delete(args)
  }
}
