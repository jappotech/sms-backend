import { Injectable } from '@nestjs/common'
import { FindManyMentionArgs, FindUniqueMentionArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateMentionInput } from './dtos/create-mention.input'
import { UpdateMentionInput } from './dtos/update-mention.input'
import { Prisma } from '@prisma/client'
import slugify from 'slugify'

@Injectable()
export class MentionsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createMentionInput: CreateMentionInput) {
    const slug = slugify(`${createMentionInput.nom.toLowerCase()}`)
    return this.prisma.mention.create({
      data: { ...createMentionInput, slug },
    })
  }

  findAll(args: FindManyMentionArgs) {
    return this.prisma.mention.findMany(args)
  }

  findOne(args: FindUniqueMentionArgs) {
    return this.prisma.mention.findUnique(args)
  }

  update(updateMentionInput: UpdateMentionInput) {
    const { id, ...data } = updateMentionInput
    return this.prisma.mention.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueMentionArgs) {
    return this.prisma.mention.delete(args)
  }
}
