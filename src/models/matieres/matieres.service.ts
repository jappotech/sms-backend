import { Injectable } from '@nestjs/common';
import { FindManyMatiereArgs, FindUniqueMatiereArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateMatiereInput } from './dtos/create-matiere.input';
import { UpdateMatiereInput } from './dtos/update-matiere.input';
import { Prisma } from '@prisma/client';
import { MatiereWhereInput } from './dtos/where.args';

@Injectable()
export class MatieresService {
  constructor(private readonly prisma: PrismaService) { }
  create(createMatiereInput: CreateMatiereInput) {
    return this.prisma.matiere.create({
      data: createMatiereInput,
    });
  }

  findAll(args: FindManyMatiereArgs) {
    return this.prisma.matiere.findMany(args);
  }

  findAllByEtablissement(args: FindManyMatiereArgs, etablissementId: number) {
    return this.prisma.matiere.findMany({
      ...args,
      where: {
        ...args.where,
        uniteEnseignement: {
          is: {
            semestre: {
              is: {
                Classe: {
                  is: {
                    etablissementId: {
                      equals: etablissementId,
                    },
                  },
                }
              }
            }
          }
        }
      },
    });
  }

  findOne(args: FindUniqueMatiereArgs) {
    return this.prisma.matiere.findUnique(args);
  }

  update(updateMatiereInput: UpdateMatiereInput) {
    const { id, ...data } = updateMatiereInput;
    return this.prisma.matiere.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueMatiereArgs) {
    return this.prisma.matiere.delete(args);
  }
}
