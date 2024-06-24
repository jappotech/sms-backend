import { Injectable } from '@nestjs/common';
import { FindManyMatiereArgs, FindUniqueMatiereArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateMatiereInput } from './dtos/create-matiere.input';
import { UpdateMatiereInput } from './dtos/update-matiere.input';
import { Matiere, Prisma } from '@prisma/client';
import { MatiereWhereInput } from './dtos/where.args';

@Injectable()
export class MatieresService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createMatiereInput: CreateMatiereInput) {
    const res = this.prisma.matiere.create({
      data: { ...createMatiereInput, code: '' },
    });
    const matiere = await res;
    this.setNumeroMatiere(matiere.uniteEnseignementId, matiere)
    return res
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
                },
              },
            },
          },
        },
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

  async setNumeroMatiere(ueId, matiere) {
    const list: Matiere[] =
      await this.prisma.matiere.findMany({
        where: {
          uniteEnseignementId: ueId
        },
        orderBy: {
          id: 'asc'
        }
      });
    const ue = await this.prisma.uniteEnseignement.findUnique({
      where: { id: ueId }
    })
    if (list.length === 0) {
      const data: Matiere = { ...matiere, code: `${ue.code}1` }
      this.prisma.matiere.update({
        where: { id: matiere.id },
        data: data,
      });
    } else {
      list.map(async (m: Matiere, index: number) => {
        const data: Matiere = { ...m, code: `${ue.code}${index + 1}` }
        const res = await this.prisma.matiere.update({
          where: { id: m.id },
          data: data,
        });
        console.log("🚀 ~ MatieresService ~ list.map ~ res:", res)
      })
    }
  }
}
