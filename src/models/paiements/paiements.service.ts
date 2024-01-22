import { Injectable } from '@nestjs/common'
import { FindManyPaiementArgs, FindUniquePaiementArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreatePaiementInput } from './dtos/create-paiement.input'
import { UpdatePaiementInput } from './dtos/update-paiement.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class PaiementsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createPaiementInput: CreatePaiementInput) {
    return this.prisma.paiement.create({
      data: createPaiementInput,
    })
  }

  findAll(args: FindManyPaiementArgs) {
    return this.prisma.paiement.findMany(args)
  }

  findOne(args: FindUniquePaiementArgs) {
    return this.prisma.paiement.findUnique(args)
  }

  update(updatePaiementInput: UpdatePaiementInput) {
    const { id, ...data } = updatePaiementInput
    return this.prisma.paiement.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniquePaiementArgs) {
    return this.prisma.paiement.delete(args)
  }
}
