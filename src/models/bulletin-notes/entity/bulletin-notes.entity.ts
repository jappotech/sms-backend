import { Field, ObjectType } from '@nestjs/graphql';
import { Etudiant } from '../../../models/etudiants/entity/etudiant.entity';
import { Matiere } from '../../../models/matieres/entity/matiere.entity';
import { NoteEtudiant } from '../../../models/note-etudiants/entity/note-etudiant.entity';
import { UniteEnseignement } from '../../../models/unite-enseignements/entity/unite-enseignement.entity';

@ObjectType()
class ListeNotes {
  @Field({ nullable: true })
  uniteEnseignement: UniteEnseignement;

  @Field({ nullable: true })
  notes: Note[];

  @Field({ nullable: true })
  creditObtenu: number;

  @Field({ nullable: true })
  moyenneUE: number;

  @Field({ nullable: true })
  decision: string;
}

@ObjectType()
class Note {
  @Field({ nullable: true })
  matiere: Matiere;

  @Field({ nullable: true })
  note: NoteEtudiant[];

  @Field({ nullable: true })
  moyenne: number;

  @Field({ nullable: true })
  moyenneCoeff: number;

  @Field({ nullable: true })
  resultat: boolean;
}

@ObjectType()
class MoyenneGenerale {
  @Field({ nullable: true })
  moyenneSemestre: number;

  @Field({ nullable: true })
  totalCredit: number;

  @Field({ nullable: true })
  totalCoef: number;

  @Field({ nullable: true })
  nbCreditsObtenus: number;

  @Field({ nullable: true })
  moyenneTotalCoef: number;
}

@ObjectType()
export class BulletinNotes {
  @Field({ nullable: true })
  etudiant: Etudiant;

  @Field({ nullable: true })
  donnees: ListeNotes[];

  @Field({ nullable: true })
  moyenneGenerale: MoyenneGenerale;
}

@ObjectType()
export class ResultatAnnuel {
  @Field({ nullable: true })
  moyenneAnnuelle: string;

  @Field({ nullable: true })
  totalCredit: number;

  @Field({ nullable: true })
  resultat: string;
}
