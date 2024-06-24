import { Injectable } from '@nestjs/common';
import {
  Classe,
  PrismaClient,
  Semestre,
  UniteEnseignement,
  Specialite,
} from '@prisma/client';

@Injectable()
export class AppService {
  prisma: any;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getHello(): string {
    return 'Hello World!';
  }

  genererMatricule(): string {
    return 'MAT' + Math.floor(Math.random() * 1000000);
  }

  async genererCodeUE(id: number): Promise<string> {
    const ue: UniteEnseignement = await this.prisma.ue.findUnique(id);
    const semestre: Semestre = await this.prisma.semestre.findUnique(
      ue.semestreId,
    );
    const code_ue = ue.numero;
    const code_semestre = semestre.numero;
    const grade = semestre.grade.split(' ');
    const code_niveau = grade
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
    const classe: Classe = await this.prisma.classe.findUnique(
      semestre.classeId,
    );
    const specialite: Specialite = await this.prisma.specialite.findUnique(
      classe.specialiteId,
    );
    const code_specialite = specialite.nom
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
    const code_annee = this.getNumeroAnnee(semestre.numero);

    const code =
      code_niveau + code_specialite + code_annee + code_semestre + code_ue;
    return code;
  }

  genererCodeMatiere(id: number): string {
    return `FIL${Math.floor(Math.random() * id)}`;
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
