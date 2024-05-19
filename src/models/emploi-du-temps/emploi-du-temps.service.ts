import { Injectable } from '@nestjs/common';
import {
  FindManyEmploiDuTempsArgs,
  FindUniqueEmploiDuTempsArgs,
} from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateEmploiDuTempsInput } from './dtos/create-emploi-du-temps.input';
import { UpdateEmploiDuTempsInput } from './dtos/update-emploi-du-temps.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmploiDuTempsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createEmploiDuTempsInput: CreateEmploiDuTempsInput) {
    return this.prisma.emploiDuTemps.create({
      data: createEmploiDuTempsInput,
    });
  }

  findAll(args: FindManyEmploiDuTempsArgs) {
    return this.prisma.emploiDuTemps.findMany(args);
  }

  findAllByEtablissement(args: FindManyEmploiDuTempsArgs, etablissementId: number) {
    return this.prisma.emploiDuTemps.findMany({
      ...args,
      where: {
        ...args.where,
        classe: {
          is: {
            etablissementId: {
              equals: etablissementId,
            }
          }
        }
      },
    });
  }

  findOne(args: FindUniqueEmploiDuTempsArgs) {
    return this.prisma.emploiDuTemps.findUnique(args);
  }

  update(updateEmploiDuTempsInput: UpdateEmploiDuTempsInput) {
    const { id, ...data } = updateEmploiDuTempsInput;
    return this.prisma.emploiDuTemps.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueEmploiDuTempsArgs) {
    return this.prisma.emploiDuTemps.delete(args);
  }
}
