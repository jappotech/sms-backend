import { Injectable } from '@nestjs/common'
import { FindManyAnneeScolaireArgs, FindUniqueAnneeScolaireArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateAnneeScolaireInput } from './dtos/create-annee-scolaire.input'
import { UpdateAnneeScolaireInput } from './dtos/update-annee-scolaire.input'

@Injectable()
export class AnneeScolairesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAnneeScolaireInput: CreateAnneeScolaireInput) {
    return this.prisma.anneeScolaire.create({
      data: createAnneeScolaireInput,
    })
  }

  findAll(args: FindManyAnneeScolaireArgs) {
    return this.prisma.anneeScolaire.findMany(args)
  }

  findOne(args: FindUniqueAnneeScolaireArgs) {
    return this.prisma.anneeScolaire.findUnique(args)
  }

  update(updateAnneeScolaireInput: UpdateAnneeScolaireInput) {
    const { id, ...data } = updateAnneeScolaireInput
    return this.prisma.anneeScolaire.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueAnneeScolaireArgs) {
    return this.prisma.anneeScolaire.delete(args)
  }
}
