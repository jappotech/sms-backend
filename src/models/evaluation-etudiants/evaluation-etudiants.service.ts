import { Injectable } from '@nestjs/common';
import {
  FindManyEvaluationEtudiantsArgs,
  FindUniqueEvaluationEtudiantsArgs,
} from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateEvaluationEtudiantsInput } from './dtos/create-evaluation-etudiants.input';
import { UpdateEvaluationEtudiantsInput } from './dtos/update-evaluation-etudiants.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class EvaluationEtudiantsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createEvaluationEtudiantsInput: CreateEvaluationEtudiantsInput) {
    return this.prisma.evaluationEtudiants.create({
      data: createEvaluationEtudiantsInput,
    });
  }

  findAll(args: FindManyEvaluationEtudiantsArgs) {
    return this.prisma.evaluationEtudiants.findMany(args);
  }

  findAllByEtablissement(args: FindManyEvaluationEtudiantsArgs, id: number) {
    return this.prisma.evaluationEtudiants.findMany({
      ...args,
      where: {
        ...args.where,
        cours: {
          is: {
            classe: {
              is: {
                etablissementId: {
                  equals: id,
                },
              },
            },
          },
        },
      },
    });
  }

  findOne(args: FindUniqueEvaluationEtudiantsArgs) {
    return this.prisma.evaluationEtudiants.findUnique(args);
  }

  update(updateEvaluationEtudiantsInput: UpdateEvaluationEtudiantsInput) {
    const { id, ...data } = updateEvaluationEtudiantsInput;
    return this.prisma.evaluationEtudiants.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueEvaluationEtudiantsArgs) {
    return this.prisma.evaluationEtudiants.delete(args);
  }
}
