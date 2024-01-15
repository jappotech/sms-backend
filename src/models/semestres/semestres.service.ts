import { Injectable } from '@nestjs/common'
import { FindManySemestreArgs, FindUniqueSemestreArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateSemestreInput } from './dtos/create-semestre.input'
import { UpdateSemestreInput } from './dtos/update-semestre.input'

@Injectable()
export class SemestresService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSemestreInput: CreateSemestreInput) {
    return this.prisma.semestre.create({
      data: createSemestreInput,
    })
  }

  findAll(args: FindManySemestreArgs) {
    return this.prisma.semestre.findMany(args)
  }

  findOne(args: FindUniqueSemestreArgs) {
    return this.prisma.semestre.findUnique(args)
  }

  update(updateSemestreInput: UpdateSemestreInput) {
    const { id, ...data } = updateSemestreInput
    return this.prisma.semestre.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueSemestreArgs) {
    return this.prisma.semestre.delete(args)
  }
}
