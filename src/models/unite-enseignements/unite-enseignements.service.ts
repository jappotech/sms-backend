import { Injectable } from '@nestjs/common';
import {
  FindManyUniteEnseignementArgs,
  FindUniqueUniteEnseignementArgs,
} from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUniteEnseignementInput } from './dtos/create-unite-enseignement.input';
import { UpdateUniteEnseignementInput } from './dtos/update-unite-enseignement.input';
import { Classe, Prisma, Semestre, Specialite, UniteEnseignement } from '@prisma/client';

@Injectable()
export class UniteEnseignementsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createUniteEnseignementInput: CreateUniteEnseignementInput) {
    return this.prisma.uniteEnseignement.create({
      data: createUniteEnseignementInput,
    });
  }

  findAll(args: FindManyUniteEnseignementArgs) {
    return this.prisma.uniteEnseignement.findMany(args);
  }

  findAllByEtablissement(args: FindManyUniteEnseignementArgs, etablissementId: number) {
    return this.prisma.uniteEnseignement.findMany({
      ...args,
      where: {
        ...args.where,
        classe: {
          is: {
            etablissementId: {
              equals: etablissementId,
            },
          }
        }
      },
    });
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

  //
  async genererCodeUE(id: number): Promise<string> {
    const ue: UniteEnseignement = await this.prisma.uniteEnseignement.findUnique({
      where: {
        id: id
      }
    });
    const semestre: Semestre = await this.prisma.semestre.findUnique({
      where: {
        id: ue.semestreId
      }
    });
    const code_ue = ue.numero;
    const code_semestre = semestre.numero;
    const grade = semestre.grade.split(' ')
    const code_niveau = grade.map((word) => word.charAt(0).toUpperCase()).join('');
    const classe: Classe = await this.prisma.classe.findUnique({
      where: {
        id: ue.classeId
      }
    });
    const specialite: Specialite = await this.prisma.specialite.findUnique({
      where: {
        id: classe.specialiteId
      }
    });
    const code_specialite = specialite.nom.split(' ').map((word) => {
      if (word.toLocaleLowerCase() === 'et' || word.toLocaleLowerCase() === 'en' || word.toLocaleLowerCase() === 'de' || word.toLocaleLowerCase() === 'la' || word.toLocaleLowerCase() === 'du' || word.toLocaleLowerCase() === 'des' || word.toLocaleLowerCase() === 'd\'') {
        return '';
      }
      return word.charAt(0).toUpperCase()
    }).join('');
    const code_annee = this.getNumeroAnnee(semestre.numero);

    const code = code_niveau + code_specialite + code_annee + code_semestre + code_ue;
    return code;
  }

  getNumeroAnnee(numeroSemestre: number): number {
    let code_annee = 1;
    if (numeroSemestre === 1 || numeroSemestre === 2) {
      code_annee = 1;
    } else if (numeroSemestre === 3 || numeroSemestre === 4) {
      code_annee = 2;
    } else if (numeroSemestre === 5 || numeroSemestre === 6) {
      code_annee = 3;
    } else if (numeroSemestre === 7 || numeroSemestre === 8) {
      code_annee = 4;
    } else if (numeroSemestre === 9 || numeroSemestre === 10) {
      code_annee = 5;
    }

    return code_annee;
  }
}
