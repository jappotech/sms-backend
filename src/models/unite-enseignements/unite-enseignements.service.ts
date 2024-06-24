import { Injectable } from '@nestjs/common';
import {
  FindManyUniteEnseignementArgs,
  FindUniqueUniteEnseignementArgs,
} from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUniteEnseignementInput } from './dtos/create-unite-enseignement.input';
import { UpdateUniteEnseignementInput } from './dtos/update-unite-enseignement.input';
import {
  Classe,
  Semestre,
  Specialite,
  UniteEnseignement,
} from '@prisma/client';

@Injectable()
export class UniteEnseignementsService {
  constructor(private readonly prisma: PrismaService) {
    // constructor
  }
  async create(createUniteEnseignementInput: CreateUniteEnseignementInput) {
    const ue = await this.prisma.uniteEnseignement.create({
      data: createUniteEnseignementInput,
    });

    const newUe = await ue
    this.setNumeroUe(newUe.semestreId, newUe);
    return ue;
  }

  findAll(args: FindManyUniteEnseignementArgs) {
    return this.prisma.uniteEnseignement.findMany(args);
  }

  findAllByEtablissement(
    args: FindManyUniteEnseignementArgs,
    etablissementId: number,
  ) {
    return this.prisma.uniteEnseignement.findMany({
      ...args,
      where: {
        ...args.where,
        semestre: {
          is: {
            Classe: {
              is: {
                etablissementId: {
                  equals: etablissementId,
                },
              },
            },
          },
        },
      },
      orderBy: {
        id: 'asc'
      }
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
    const ue: UniteEnseignement =
      await this.prisma.uniteEnseignement.findUnique({
        where: {
          id: id,
        },
      });
    const semestre: Semestre = await this.prisma.semestre.findUnique({
      where: {
        id: ue.semestreId,
      },
    });
    const code_ue = ue.numero;
    const code_semestre = semestre.numero;
    const code_annee = this.getNumeroAnnee(semestre.numero);

    // const code = code_niveau + code_specialite + code_annee + code_semestre + code_ue;
    const code = code_annee.toString() + code_semestre.toString() + code_ue.toString();
    return code.toString();
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

  async setNumeroUe(semestreId: number, newUe: UniteEnseignement) {
    console.log("🚀 ~ :", semestreId, newUe)
    const list: UniteEnseignement[] =
      await this.prisma.uniteEnseignement.findMany({
        where: {
          semestreId
        },
        orderBy: {
          id: 'asc'
        }
      });
    console.log("🚀 ~ UniteEnseignementsService ~ setNumeroUe ~ list:", list)
    const semestre = await this.prisma.semestre.findUnique({ where: { id: semestreId } })
    if (list.length === 0) {
      const data: UniteEnseignement = { ...newUe, numero: 1, code: `${this.getNumeroAnnee(semestre.numero)}${semestre.numero}1` }
      this.prisma.uniteEnseignement.update({
        where: { id: newUe.id },
        data: data,
      });
    } else {
      list.map(async (ue, index) => {
        const data: UniteEnseignement = { ...ue, numero: index + 1, code: `${this.getNumeroAnnee(semestre.numero)}${semestre.numero}${index + 1}` }
        const res = await this.prisma.uniteEnseignement.update({
          where: { id: ue.id },
          data: data,
        });
        console.log("🚀 ~ res:", res)
      })
    }
  }
}
