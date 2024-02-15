import { Injectable } from '@nestjs/common';
import {
  FindManyUniteEnseignementArgs,
  FindUniqueUniteEnseignementArgs,
} from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUniteEnseignementInput } from './dtos/create-unite-enseignement.input';
import { UpdateUniteEnseignementInput } from './dtos/update-unite-enseignement.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class UniteEnseignementsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUniteEnseignementInput: CreateUniteEnseignementInput) {
    return this.prisma.uniteEnseignement.create({
      data: createUniteEnseignementInput,
    });
  }

  findAll(args: FindManyUniteEnseignementArgs) {
    return this.prisma.uniteEnseignement.findMany(args);
  }

  findOne(args: FindUniqueUniteEnseignementArgs) {
    return this.prisma.uniteEnseignement.findUnique(args);
  }

  update(updateUniteEnseignementInput: UpdateUniteEnseignementInput) {
    const { id, ...data } = updateUniteEnseignementInput;
    return this.prisma.uniteEnseignement.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueUniteEnseignementArgs) {
    return this.prisma.uniteEnseignement.delete(args);
  }
}
