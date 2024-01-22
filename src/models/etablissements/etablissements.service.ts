import { Injectable } from '@nestjs/common'
import { FindManyEtablissementArgs, FindUniqueEtablissementArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateEtablissementInput } from './dtos/create-etablissement.input'
import { UpdateEtablissementInput } from './dtos/update-etablissement.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class EtablissementsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createEtablissementInput: CreateEtablissementInput) {
    return this.prisma.etablissement.create({
      data: createEtablissementInput,
    })
  }

  findAll(args: FindManyEtablissementArgs) {
    return this.prisma.etablissement.findMany(args)
  }

  findOne(args: FindUniqueEtablissementArgs) {
    return this.prisma.etablissement.findUnique(args)
  }

  update(updateEtablissementInput: UpdateEtablissementInput) {
    const { id, ...data } = updateEtablissementInput
    return this.prisma.etablissement.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueEtablissementArgs) {
    return this.prisma.etablissement.delete(args)
  }
}
