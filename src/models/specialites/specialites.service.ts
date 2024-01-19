import { Injectable } from '@nestjs/common'
import { FindManySpecialiteArgs, FindUniqueSpecialiteArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateSpecialiteInput } from './dtos/create-specialite.input'
import { UpdateSpecialiteInput } from './dtos/update-specialite.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class SpecialitesService {
  constructor(private readonly prisma: PrismaService) { }
  create(createSpecialiteInput: CreateSpecialiteInput) {
    return this.prisma.specialite.create({
      data: createSpecialiteInput,
    })
  }

  findAll(args: FindManySpecialiteArgs) {
    return this.prisma.specialite.findMany(args)
  }

  findOne(args: FindUniqueSpecialiteArgs) {
    return this.prisma.specialite.findUnique(args)
  }

  update(updateSpecialiteInput: UpdateSpecialiteInput) {
    const { id, ...data } = updateSpecialiteInput
    return this.prisma.specialite.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueSpecialiteArgs) {
    return this.prisma.specialite.delete(args)
  }
}
