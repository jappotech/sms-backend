import { Injectable } from '@nestjs/common'
import { FindManyProfesseurArgs, FindUniqueProfesseurArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateProfesseurInput } from './dtos/create-professeur.input'
import { UpdateProfesseurInput } from './dtos/update-professeur.input'
import { Prisma } from '@prisma/client'
import { UtilisateursService } from '../utilisateurs/utilisateurs.service'
import slugify from 'slugify'

@Injectable()
export class ProfesseursService {
  constructor(private readonly prisma: PrismaService, private readonly utilisateurService: UtilisateursService) { }
  async create(createProfesseurInput: CreateProfesseurInput) {
    const utilisateur = await this.utilisateurService.create(createProfesseurInput.profile)
    return this.prisma.professeur.create({
      data: { profileId: utilisateur.id },
    })
  }

  findAll(args: FindManyProfesseurArgs) {
    return this.prisma.professeur.findMany(args)
  }

  findOne(args: FindUniqueProfesseurArgs) {
    return this.prisma.professeur.findUnique(args)
  }

  update(updateProfesseurInput: UpdateProfesseurInput) {
    const { id, profile, ...data } = updateProfesseurInput
    return this.prisma.professeur.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueProfesseurArgs) {
    return this.prisma.professeur.delete(args)
  }
}
