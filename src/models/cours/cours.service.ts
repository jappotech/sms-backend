import { Injectable } from '@nestjs/common';
import { FindManyCoursArgs, FindUniqueCoursArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateCoursInput } from './dtos/create-cours.input';
import { UpdateCoursInput } from './dtos/update-cours.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class CoursService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCoursInput: CreateCoursInput) {
    const cours = await this.prisma.cours.create({
      data: createCoursInput,
    });

    console.log('🚀 ~ CoursService ~ create ~ createCoursInput:', cours);

    return cours;
  }

  findAll(args: FindManyCoursArgs) {
    return this.prisma.cours.findMany(args);
  }

  findOne(args: FindUniqueCoursArgs) {
    return this.prisma.cours.findUnique(args);
  }

  update(updateCoursInput: UpdateCoursInput) {
    const { id, ...data } = updateCoursInput;
    return this.prisma.cours.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueCoursArgs) {
    return this.prisma.cours.delete(args);
  }
}
