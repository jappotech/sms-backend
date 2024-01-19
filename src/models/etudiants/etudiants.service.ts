import { Injectable } from '@nestjs/common'
import { FindManyEtudiantArgs, FindUniqueEtudiantArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateEtudiantInput } from './dtos/create-etudiant.input'
import { UpdateEtudiantInput } from './dtos/update-etudiant.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class EtudiantsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createEtudiantInput: CreateEtudiantInput) {
    return this.prisma.etudiant.create({
      data: createEtudiantInput,
    })
  }

  findAll(args: FindManyEtudiantArgs) {
    return this.prisma.etudiant.findMany(args)
  }

  findOne(args: FindUniqueEtudiantArgs) {
    return this.prisma.etudiant.findUnique(args)
  }

  update(updateEtudiantInput: UpdateEtudiantInput) {
    const { id, ...data } = updateEtudiantInput
    return this.prisma.etudiant.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueEtudiantArgs) {
    return this.prisma.etudiant.delete(args)
  }
}
