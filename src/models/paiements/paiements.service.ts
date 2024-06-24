import { Injectable } from '@nestjs/common';
import { FindManyPaiementArgs, FindUniquePaiementArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreatePaiementInput } from './dtos/create-paiement.input';
import { UpdatePaiementInput } from './dtos/update-paiement.input';
import { Prisma } from '@prisma/client';
import { uniqueId } from 'lodash';
import slugify from 'slugify';

@Injectable()
export class PaiementsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPaiementInput: CreatePaiementInput) {
    createPaiementInput.referencePaiement = uniqueId(
      slugify(
        `${createPaiementInput.etudiantId} ${createPaiementInput.methodePaiement}`,
      ),
    );
    return this.prisma.paiement.create({
      data: createPaiementInput,
    });
  }

  findAll(args: FindManyPaiementArgs) {
    return this.prisma.paiement.findMany(args);
  }

  findAllByEtablissement(args: FindManyPaiementArgs, etablissementId: number) {
    return this.prisma.paiement.findMany({
      ...args,
      where: {
        ...args.where,
        etudiant: {
          is: {
            profile: {
              is: {
                etablissementId: {
                  equals: etablissementId,
                },
              },
            },
          },
        },
      },
    });
  }

  findOne(args: FindUniquePaiementArgs) {
    return this.prisma.paiement.findUnique(args);
  }

  update(updatePaiementInput: UpdatePaiementInput) {
    const { id, ...data } = updatePaiementInput;
    return this.prisma.paiement.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniquePaiementArgs) {
    return this.prisma.paiement.delete(args);
  }
}
