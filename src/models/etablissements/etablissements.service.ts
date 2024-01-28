import { Injectable } from '@nestjs/common'
import { FindManyEtablissementArgs, FindUniqueEtablissementArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateEtablissementInput } from './dtos/create-etablissement.input'
import { UpdateEtablissementInput } from './dtos/update-etablissement.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class EtablissementsService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createEtablissementInput: CreateEtablissementInput) {
    const { domaines, ...data } = createEtablissementInput

    const etablissement = await this.prisma.etablissement.create({
      data: { ...data },
    })

    if (domaines && domaines.length > 0) {
      const domaineIds = domaines.map(domaine => domaine.id)
      await this.prisma.etablissement.update({
        where: { id: etablissement.id },
        data: {
          domaines: {
            connect: domaineIds.map(id => ({ id }))
          }
        }
      })
    }

    return etablissement
  }

  findAll(args: FindManyEtablissementArgs) {
    return this.prisma.etablissement.findMany(args)
  }

  findOne(args: FindUniqueEtablissementArgs) {
    return this.prisma.etablissement.findUnique(args)
  }

  update(updateEtablissementInput: UpdateEtablissementInput) {
    const { id, domaines, ...data } = updateEtablissementInput
    if (domaines && domaines.length > 0) {
      const domaineIds = domaines.map(domaine => domaine.id)
      return this.prisma.etablissement.update({
        where: { id },
        data: {
          ...data,
          domaines: {
            connect: domaineIds.map(id => ({ id }))
          }
        }
      })
    }
    return this.prisma.etablissement.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueEtablissementArgs) {
    return this.prisma.etablissement.delete(args)
  }
}
