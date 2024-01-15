import { Injectable } from '@nestjs/common'
import { FindManyUtilisateurArgs, FindUniqueUtilisateurArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateUtilisateurInput } from './dtos/create-utilisateur.input'
import { UpdateUtilisateurInput } from './dtos/update-utilisateur.input'

@Injectable()
export class UtilisateursService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUtilisateurInput: CreateUtilisateurInput) {
    return this.prisma.utilisateur.create({
      data: createUtilisateurInput,
    })
  }

  findAll(args: FindManyUtilisateurArgs) {
    return this.prisma.utilisateur.findMany(args)
  }

  findOne(args: FindUniqueUtilisateurArgs) {
    return this.prisma.utilisateur.findUnique(args)
  }

  update(updateUtilisateurInput: UpdateUtilisateurInput) {
    const { id, ...data } = updateUtilisateurInput
    return this.prisma.utilisateur.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueUtilisateurArgs) {
    return this.prisma.utilisateur.delete(args)
  }
}
