import { Injectable } from '@nestjs/common'
import { FindManyMentionArgs, FindUniqueMentionArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateMentionInput } from './dtos/create-mention.input'
import { UpdateMentionInput } from './dtos/update-mention.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class MentionsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createMentionInput: CreateMentionInput) {
    return this.prisma.mention.create({
      data: createMentionInput,
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
