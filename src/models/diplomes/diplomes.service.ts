import { Injectable } from '@nestjs/common';
import { FindManyDiplomeArgs, FindUniqueDiplomeArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateDiplomeInput } from './dtos/create-diplome.input';
import { UpdateDiplomeInput } from './dtos/update-diplome.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class DiplomesService {
  constructor(private readonly prisma: PrismaService) { }
  create(createDiplomeInput: CreateDiplomeInput) {
    return this.prisma.diplome.create({
      data: createDiplomeInput,
    });
  }

  findAll(args: FindManyDiplomeArgs) {
    return this.prisma.diplome.findMany(args);
  }

  findAllByEtablissement(args: FindManyDiplomeArgs, etablissementId: number) {
    return this.prisma.diplome.findMany({
      ...args,
      where: {
        ...args.where,
        specialite: {
          is: {
            Classe: {
              some: {
                etablissementId: {
                  equals: etablissementId,
                }
              }
            }
          }
        }
      },
    });
  }

  findOne(args: FindUniqueDiplomeArgs) {
    return this.prisma.diplome.findUnique(args);
  }

  update(updateDiplomeInput: UpdateDiplomeInput) {
    const { id, ...data } = updateDiplomeInput;
    return this.prisma.diplome.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueDiplomeArgs) {
    return this.prisma.diplome.delete(args);
  }
}
