import { Injectable } from '@nestjs/common';
import { FindManyAdresseArgs, FindUniqueAdresseArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateAdresseInput } from './dtos/create-adresse.input';
import { UpdateAdresseInput } from './dtos/update-adresse.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class AdressesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAdresseInput: CreateAdresseInput) {
    return this.prisma.adresse.create({
      data: createAdresseInput,
    });
  }

  findAll(args: FindManyAdresseArgs) {
    return this.prisma.adresse.findMany(args);
  }

  findOne(args: FindUniqueAdresseArgs) {
    return this.prisma.adresse.findUnique(args);
  }

  update(updateAdresseInput: UpdateAdresseInput) {
    const { id, ...data } = updateAdresseInput;
    return this.prisma.adresse.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueAdresseArgs) {
    return this.prisma.adresse.delete(args);
  }
}
