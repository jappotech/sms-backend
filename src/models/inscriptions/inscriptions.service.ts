import { Injectable } from '@nestjs/common';
import {
  FindManyInscriptionArgs,
  FindUniqueInscriptionArgs,
} from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateInscriptionInput } from './dtos/create-inscription.input';
import { UpdateInscriptionInput } from './dtos/update-inscription.input';
import { Prisma } from '@prisma/client';
import { randomUUID } from 'crypto';
import { CreateEtudiantInput } from '../etudiants/dtos/create-etudiant.input';

@Injectable()
export class InscriptionsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createInscriptionInput: CreateInscriptionInput) {
    createInscriptionInput.reference =
      `${createInscriptionInput.etudiantId}-${randomUUID().split('-')[0]}`.toUpperCase();
    return this.prisma.inscription.create({
      data: createInscriptionInput,
    });
  }

  /* async bulkCreation(etudiants: CreateEtudiantInput) {
    // TODO: optimize
  } */

  findAll(args: FindManyInscriptionArgs) {
    return this.prisma.inscription.findMany(args);
  }

  findAllByEtablissement(args: FindManyInscriptionArgs, id: number) {
    return this.prisma.inscription.findMany({
      ...args,
      where: {
        ...args.where,
        classe: {
          is: {
            etablissementId: {
              equals: id,
            },
          },
        },
      },
    });
  }

  findOne(args: FindUniqueInscriptionArgs) {
    return this.prisma.inscription.findUnique(args);
  }

  update(updateInscriptionInput: UpdateInscriptionInput) {
    const { id, ...data } = updateInscriptionInput;
    return this.prisma.inscription.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueInscriptionArgs) {
    return this.prisma.inscription.delete(args);
  }
}
