import { Injectable } from '@nestjs/common';
import {
  FindManyNoteEtudiantArgs,
  FindUniqueNoteEtudiantArgs,
} from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateNoteEtudiantInput } from './dtos/create-note-etudiant.input';
import { UpdateNoteEtudiantInput } from './dtos/update-note-etudiant.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class NoteEtudiantsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createNoteEtudiantInput: CreateNoteEtudiantInput) {
    return this.prisma.noteEtudiant.create({
      data: createNoteEtudiantInput,
    });
  }

  findAll(args: FindManyNoteEtudiantArgs) {
    return this.prisma.noteEtudiant.findMany(args);
  }

  findAllByEtablissement(args: FindManyNoteEtudiantArgs, id: number) {
    return this.prisma.noteEtudiant.findMany({
      ...args,
      where: {
        ...args.where,
        etudiant: {
          is: {
            profile: {
              is: {
                etablissementId: {
                  equals: id,
                },
              },
            }
          },
        },
      },
    });
  }

  findOne(args: FindUniqueNoteEtudiantArgs) {
    return this.prisma.noteEtudiant.findUnique(args);
  }

  update(updateNoteEtudiantInput: UpdateNoteEtudiantInput) {
    const { id, ...data } = updateNoteEtudiantInput;
    return this.prisma.noteEtudiant.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueNoteEtudiantArgs) {
    return this.prisma.noteEtudiant.delete(args);
  }
}
