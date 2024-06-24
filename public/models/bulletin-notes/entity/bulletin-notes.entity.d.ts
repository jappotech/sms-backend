import { Etudiant } from '../../../models/etudiants/entity/etudiant.entity';
import { Matiere } from '../../../models/matieres/entity/matiere.entity';
import { NoteEtudiant } from '../../../models/note-etudiants/entity/note-etudiant.entity';
import { UniteEnseignement } from '../../../models/unite-enseignements/entity/unite-enseignement.entity';
declare class ListeNotes {
    uniteEnseignement: UniteEnseignement;
    notes: Note[];
    creditObtenu: number;
    moyenneUE: number;
    decision: string;
}
declare class Note {
    matiere: Matiere;
    note: NoteEtudiant[];
    moyenne: number;
    moyenneCoeff: number;
    resultat: boolean;
}
declare class MoyenneGenerale {
    moyenneSemestre: number;
    totalCredit: number;
    totalCoef: number;
    nbCreditsObtenus: number;
    moyenneTotalCoef: number;
}
export declare class BulletinNotes {
    etudiant: Etudiant;
    donnees: ListeNotes[];
    moyenneGenerale: MoyenneGenerale;
}
export declare class ResultatAnnuel {
    moyenneAnnuelle: string;
    totalCredit: number;
    resultat: string;
}
export {};
