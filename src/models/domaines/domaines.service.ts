import { Injectable } from '@nestjs/common'
import { FindManyDomaineArgs, FindUniqueDomaineArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateDomaineInput } from './dtos/create-domaine.input'
import { UpdateDomaineInput } from './dtos/update-domaine.input'
import { Prisma } from '@prisma/client'
import slugify from 'slugify'

@Injectable()
export class DomainesService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createDomaineInput: CreateDomaineInput) {
    const { mentions, ...data } = createDomaineInput

    const slug = slugify(`${data.nom.toLowerCase()}`)
    const domaine = await this.prisma.domaine.create({
      data: { ...data, slug },
    })

    let createMentions;
    if (mentions.length > 0) {
      const mentionsData = mentions.map(mention => ({
        ...mention,
        slug: slugify(`${mention.nom.toLowerCase()}`),
        domaineId: domaine.id
      }))
      createMentions = await this.prisma.mention.createMany({
        data: mentionsData
      })
    }

    return domaine
  }

  findAll(args: FindManyDomaineArgs) {
    return this.prisma.domaine.findMany(args)
  }

  findOne(args: FindUniqueDomaineArgs) {
    return this.prisma.domaine.findUnique(args)
  }

  update(updateDomaineInput: UpdateDomaineInput) {
    const { id, mentions, ...data } = updateDomaineInput
    return this.prisma.domaine.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueDomaineArgs) {
    return this.prisma.domaine.delete(args)
  }
}
