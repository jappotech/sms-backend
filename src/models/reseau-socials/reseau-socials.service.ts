import { Injectable } from '@nestjs/common'
import { FindManyReseauSocialArgs, FindUniqueReseauSocialArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateReseauSocialInput } from './dtos/create-reseau-social.input'
import { UpdateReseauSocialInput } from './dtos/update-reseau-social.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ReseauSocialsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createReseauSocialInput: CreateReseauSocialInput) {
    return this.prisma.reseauSocial.create({
      data: createReseauSocialInput,
    })
  }

  findAll(args: FindManyReseauSocialArgs) {
    return this.prisma.reseauSocial.findMany(args)
  }

  findOne(args: FindUniqueReseauSocialArgs) {
    return this.prisma.reseauSocial.findUnique(args)
  }

  update(updateReseauSocialInput: UpdateReseauSocialInput) {
    const { id, ...data } = updateReseauSocialInput
    return this.prisma.reseauSocial.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueReseauSocialArgs) {
    return this.prisma.reseauSocial.delete(args)
  }
}
