import { Injectable } from '@nestjs/common'
import { FindManyInscriptionArgs, FindUniqueInscriptionArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateInscriptionInput } from './dtos/create-inscription.input'
import { UpdateInscriptionInput } from './dtos/update-inscription.input'

@Injectable()
export class InscriptionsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createInscriptionInput: CreateInscriptionInput) {
    return this.prisma.inscription.create({
      data: createInscriptionInput,
    })
  }

  findAll(args: FindManyInscriptionArgs) {
    return this.prisma.inscription.findMany(args)
  }

  findOne(args: FindUniqueInscriptionArgs) {
    return this.prisma.inscription.findUnique(args)
  }

  update(updateInscriptionInput: UpdateInscriptionInput) {
    const { id, ...data } = updateInscriptionInput
    return this.prisma.inscription.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueInscriptionArgs) {
    return this.prisma.inscription.delete(args)
  }
}
