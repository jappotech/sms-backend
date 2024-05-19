import { Injectable } from '@nestjs/common';
import { FindManySalleArgs, FindUniqueSalleArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateSalleInput } from './dtos/create-salle.input';
import { UpdateSalleInput } from './dtos/update-salle.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class SallesService {
  constructor(private readonly prisma: PrismaService) { }
  create(createSalleInput: CreateSalleInput) {
    return this.prisma.salle.create({
      data: createSalleInput,
    });
  }

  findAll(args: FindManySalleArgs) {
    return this.prisma.salle.findMany(args);
  }

  findAllByEtablissement(args: FindManySalleArgs, etablissementId: number) {
    return this.prisma.salle.findMany({
      ...args,
      where: {
        ...args.where,
        etablissementId: {
          equals: etablissementId,
        },
      },
    });
  }

  findOne(args: FindUniqueSalleArgs) {
    return this.prisma.salle.findUnique(args);
  }

  update(updateSalleInput: UpdateSalleInput) {
    const { id, ...data } = updateSalleInput;
    return this.prisma.salle.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueSalleArgs) {
    return this.prisma.salle.delete(args);
  }
}
