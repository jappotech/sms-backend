import { Injectable } from '@nestjs/common'
import { FindManyProfesseurArgs, FindUniqueProfesseurArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateProfesseurInput } from './dtos/create-professeur.input'
import { UpdateProfesseurInput } from './dtos/update-professeur.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ProfesseursService {
  constructor(private readonly prisma: PrismaService) { }
  create(createProfesseurInput: CreateProfesseurInput) {
    return this.prisma.professeur.create({
      data: createProfesseurInput,
    })
  }

  findAll(args: FindManyProfesseurArgs) {
    return this.prisma.professeur.findMany(args)
  }

  findOne(args: FindUniqueProfesseurArgs) {
    return this.prisma.professeur.findUnique(args)
  }

  update(updateProfesseurInput: UpdateProfesseurInput) {
    const { id, ...data } = updateProfesseurInput
    return this.prisma.professeur.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueProfesseurArgs) {
    return this.prisma.professeur.delete(args)
  }
}
