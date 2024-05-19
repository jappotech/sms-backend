import { Injectable } from '@nestjs/common';
import {
  FindManyFeuillePresenceArgs,
  FindUniqueFeuillePresenceArgs,
} from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateFeuillePresenceInput } from './dtos/create-feuille-presence.input';
import { UpdateFeuillePresenceInput } from './dtos/update-feuille-presence.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class FeuillePresencesService {
  constructor(private readonly prisma: PrismaService) { }
  create(createFeuillePresenceInput: CreateFeuillePresenceInput) {
    return this.prisma.feuillePresence.create({
      data: createFeuillePresenceInput,
    });
  }

  findAll(args: FindManyFeuillePresenceArgs) {
    return this.prisma.feuillePresence.findMany(args);
  }

  findAllByEtablissement(args: FindManyFeuillePresenceArgs, id: number) {
    return this.prisma.feuillePresence.findMany({
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
              }
            }
          }
        }
      },
    });
  }

  findOne(args: FindUniqueFeuillePresenceArgs) {
    return this.prisma.feuillePresence.findUnique(args);
  }

  update(updateFeuillePresenceInput: UpdateFeuillePresenceInput) {
    const { id, ...data } = updateFeuillePresenceInput;
    return this.prisma.feuillePresence.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueFeuillePresenceArgs) {
    return this.prisma.feuillePresence.delete(args);
  }
}
