import { Injectable } from '@nestjs/common';
import { FindManyClasseArgs, FindUniqueClasseArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateClasseInput } from './dtos/create-classe.input';
import { UpdateClasseInput } from './dtos/update-classe.input';

@Injectable()
export class ClassesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createClasseInput: CreateClasseInput) {
    // ToDo: Add logic to generate code
    createClasseInput.code =
      createClasseInput.niveau +
      createClasseInput.specialiteId +
      createClasseInput.anneeScolaireId;
    const classe = await this.prisma.classe.create({
      data: createClasseInput,
    });

    return classe;
  }

  findAll(args: FindManyClasseArgs) {
    return this.prisma.classe.findMany(args);
  }

  findOne(args: FindUniqueClasseArgs) {
    return this.prisma.classe.findUnique(args);
  }

  update(updateClasseInput: UpdateClasseInput) {
    const { id, ...data } = updateClasseInput;
    return this.prisma.classe.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueClasseArgs) {
    return this.prisma.classe.delete(args);
  }
}
