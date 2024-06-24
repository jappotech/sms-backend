"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulletinNotesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const bulletin_notes_entity_1 = require("./entity/bulletin-notes.entity");
let BulletinNotesService = class BulletinNotesService {
    constructor(prisma) {
        this.prisma = prisma;
        this.getRandomInt = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    }
    async resultatAnnuel(args) {
        const classe = await this.prisma.classe.findUnique({
            where: { id: args.where.classeId },
            include: { semestres: true, AnneeScolaire: true },
        });
        if (!classe) {
            throw new common_1.NotFoundException('Classe non trouvée');
        }
        const resultats = [];
        let semestreValide = true;
        let moyenneAnnuelle = 0;
        let totalCredit = 0;
        for (const semestre of classe.semestres) {
            const bulletin = await this.bulletinSemestre({
                where: {
                    etudiantId: args.where.etudiantId,
                    semestreId: semestre.id,
                    classeId: classe.id,
                },
            });
            moyenneAnnuelle += Number(bulletin.moyenneGenerale.moyenneSemestre);
            totalCredit += Number(bulletin.moyenneGenerale.nbCreditsObtenus);
            if (bulletin.moyenneGenerale.nbCreditsObtenus <
                bulletin.moyenneGenerale.totalCredit) {
                semestreValide = false;
            }
            resultats.push(bulletin);
        }
        const res = {
            moyenneAnnuelle: (moyenneAnnuelle / classe.semestres.length).toFixed(2),
            totalCredit,
            resultat: semestreValide ? 'Année Validée' : 'Année Invalidée',
        };
        return res;
    }
    async resultatSemestre(args) {
        if (!args.where.etudiantId ||
            !args.where.semestreId ||
            !args.where.classeId) {
            throw new common_1.BadRequestException('Veuillez renseigner les paramètres');
        }
        let semestreValide = true;
        const bulletin = await this.bulletinSemestre({
            where: {
                etudiantId: args.where.etudiantId,
                semestreId: args.where.semestreId,
                classeId: args.where.classeId,
            },
        });
        if (bulletin.moyenneGenerale.nbCreditsObtenus <
            bulletin.moyenneGenerale.totalCredit) {
            semestreValide = false;
        }
        return semestreValide ? 'Semestre Validé' : 'Semestre Invalidé';
    }
    async bulletinAnnuel(args) {
        const etudiant = await this.prisma.etudiant.findUnique({
            where: {
                id: args.where.etudiantId,
            },
            include: { inscriptions: true },
        });
        if (!etudiant) {
            throw new common_1.NotFoundException('Etudiant non trouvé');
        }
        const classe = await this.prisma.classe.findUnique({
            where: { id: args.where.classeId },
            include: { semestres: true, AnneeScolaire: true },
        });
        if (!classe) {
            throw new common_1.NotFoundException('Classe non trouvée');
        }
        const resultats = [];
        for (const semestre of classe.semestres) {
            const bulletin = await this.bulletinSemestre({
                where: {
                    etudiantId: etudiant.id,
                    semestreId: semestre.id,
                    classeId: classe.id,
                },
            });
            resultats.push(bulletin);
        }
        return resultats;
    }
    async bulletinSemestre(args) {
        const bulletinNotes = new bulletin_notes_entity_1.BulletinNotes();
        const etudiant = await this.prisma.etudiant.findUnique({
            where: { id: args.where.etudiantId },
        });
        if (!etudiant) {
            throw new common_1.NotFoundException('Etudiant non trouvé');
        }
        bulletinNotes.etudiant = etudiant;
        const donnees = [];
        let g_totalCredit = 0;
        let g_totalCoef = 0;
        let g_nbCreditsObtenus = 0;
        let g_moyenneTotalCoef = 0;
        let countMatiere = 0;
        const uniteEnseignements = await this.prisma.uniteEnseignement.findMany({
            where: { semestreId: args.where.semestreId },
        });
        for (const uniteEnseignement of uniteEnseignements) {
            const data = {
                uniteEnseignement: null,
                notes: null,
            };
            data.uniteEnseignement = uniteEnseignement;
            const notesData = [];
            const matieres = await this.prisma.matiere.findMany({
                where: { uniteEnseignementId: uniteEnseignement.id },
                include: { cours: true },
            });
            for (const matiere of matieres) {
                const noteData = {
                    matiere: null,
                    note: [],
                    moyenne: null,
                    resultat: null,
                };
                noteData.matiere = matiere;
                g_totalCredit += matiere.credit;
                g_totalCoef += matiere.coefficient;
                countMatiere++;
                const coursList = matiere.cours;
                for (const cours of coursList) {
                    const evaluationEtudiant = await this.prisma.evaluationEtudiants.findMany({
                        where: {
                            coursId: cours.id,
                            NoteEtudiant: { some: { etudiantId: etudiant.id } },
                        },
                        include: { NoteEtudiant: true },
                    });
                    const notesEtudiant = evaluationEtudiant.filter(async (evaluation) => {
                        const notes = await this.prisma.noteEtudiant.findMany({
                            where: {
                                evaluationEtudiantId: evaluation.id,
                                etudiantId: etudiant.id,
                            },
                        });
                        return notes.filter((x) => x.evaluationEtudiantId === evaluation.id);
                    });
                    const notesEtd = [];
                    if (notesEtudiant.length > 0) {
                        for (const n of notesEtudiant) {
                            if (n.NoteEtudiant && n.NoteEtudiant.length > 0) {
                                n.NoteEtudiant.forEach((ne) => {
                                    if (ne.etudiantId === etudiant.id)
                                        notesEtd.push(ne);
                                });
                            }
                        }
                        noteData.note = notesEtd;
                    }
                }
                const moyenneMatiere = noteData.note.length > 0
                    ? noteData.note.reduce((acc, note) => {
                        return acc + note.note;
                    }, 0) / noteData.note.length
                    : 0;
                noteData.moyenne = moyenneMatiere.toFixed(2);
                noteData.moyenneCoeff = (matiere.coefficient * moyenneMatiere).toFixed(2);
                noteData.resultat = noteData.moyenne >= 10 ? true : false;
                g_moyenneTotalCoef += matiere.coefficient * moyenneMatiere;
                notesData.push(noteData);
            }
            let moyenneUE = 0;
            if (notesData.length > 0) {
                moyenneUE =
                    notesData.reduce((acc, note) => {
                        return acc + parseFloat(note.moyenne);
                    }, 0) / notesData.length;
            }
            data.moyenneUE = moyenneUE.toFixed(2);
            const creditObtenu = notesData.reduce((acc, note) => {
                return note.resultat ? acc + note.matiere.credit : acc;
            }, 0);
            data.creditObtenu = creditObtenu;
            g_nbCreditsObtenus += creditObtenu;
            const totalCredit = notesData.reduce((acc, note) => {
                return acc + note.matiere.credit;
            }, 0);
            data.decision =
                parseFloat(totalCredit) > 0 &&
                    parseFloat(creditObtenu) === parseFloat(totalCredit)
                    ? 'Validé'
                    : 'Invalidé';
            data.notes = notesData;
            donnees.push(data);
        }
        bulletinNotes.donnees = donnees;
        const moyenneGenerale = {
            moyenneSemestre: null,
            totalCredit: null,
            totalCoef: null,
            nbCreditsObtenus: null,
            moyenneTotalCoef: null,
        };
        let moyenneSemestre = 0;
        if (donnees.length > 0) {
            moyenneSemestre =
                donnees.reduce((acc, ue) => {
                    return acc + parseFloat(ue.moyenneUE);
                }, 0) / donnees.length;
        }
        moyenneGenerale.moyenneSemestre = moyenneSemestre.toFixed(2);
        moyenneGenerale.totalCredit = g_totalCredit;
        moyenneGenerale.totalCoef = g_totalCoef;
        moyenneGenerale.nbCreditsObtenus = g_nbCreditsObtenus;
        moyenneGenerale.moyenneTotalCoef = Number(g_moyenneTotalCoef).toFixed(2);
        bulletinNotes.moyenneGenerale = moyenneGenerale;
        return bulletinNotes;
    }
    async generateRandomNotes(args) {
        const bulletinNotes = new bulletin_notes_entity_1.BulletinNotes();
        const etudiants = await this.prisma.etudiant.findMany({
            where: { inscriptions: { some: { classeId: args.where.classeId } } },
        });
        const listBulletinNotes = [];
        if (etudiants.length === 0) {
            throw new common_1.NotFoundException('Etudiant non trouvé');
        }
        for (const etudiant of etudiants) {
            bulletinNotes.etudiant = etudiant;
            const donnees = [];
            let g_totalCredit = 0;
            let g_totalCoef = 0;
            let g_nbCreditsObtenus = 0;
            let g_moyenneTotalCoef = 0;
            let countMatiere = 0;
            const uniteEnseignements = await this.prisma.uniteEnseignement.findMany({
                where: { semestreId: args.where.semestreId },
            });
            for (const uniteEnseignement of uniteEnseignements) {
                const data = {
                    uniteEnseignement: null,
                    notes: null,
                };
                data.uniteEnseignement = uniteEnseignement;
                const notesData = [];
                let matieres = await this.prisma.matiere.findMany({
                    where: { uniteEnseignementId: uniteEnseignement.id },
                    include: { cours: true },
                });
                for (const matiere of matieres) {
                    const noteData = {
                        matiere: null,
                        note: [],
                        moyenne: null,
                        resultat: null,
                    };
                    noteData.matiere = matiere;
                    g_totalCredit += matiere.credit;
                    g_totalCoef += matiere.coefficient;
                    countMatiere++;
                    let coursList = matiere.cours;
                    if (coursList.length === 0) {
                        const course = await this.prisma.cours.create({
                            data: {
                                nom: matiere.nom,
                                description: matiere.nom,
                                dateDebut: new Date(),
                                dateFin: new Date(),
                                heureDebut: new Date(),
                                heureFin: new Date(),
                                matiereId: matiere.id
                            },
                        });
                        coursList.push(course);
                    }
                    for (const cours of coursList) {
                        let evaluationEtudiant = [];
                        let notesEtudiant = [];
                        const cc = await this.prisma.evaluationEtudiants.create({
                            data: {
                                coursId: cours.id,
                                typeEvaluation: 'CONTROLE_CONTINU',
                                dateEvaluation: new Date(),
                                duree: 3,
                                document: 'https://www.google.com',
                                description: 'Description',
                            },
                        });
                        console.log("🚀 ~ BulletinNotesService ~ generateRandomNotes ~ cc:", cc);
                        evaluationEtudiant.push(cc);
                        const note_cc = await this.prisma.noteEtudiant.create({
                            data: {
                                evaluationEtudiantId: cc.id,
                                etudiantId: etudiant.id,
                                note: this.getRandomInt(10, 18),
                            },
                        });
                        console.log("🚀 ~ BulletinNotesService ~ generateRandomNotes ~ note_cc:", note_cc);
                        notesEtudiant.push(note_cc);
                        const exam = await this.prisma.evaluationEtudiants.create({
                            data: {
                                coursId: cours.id,
                                typeEvaluation: 'EXAMEN',
                                dateEvaluation: new Date(),
                                duree: 3,
                                document: 'https://www.google.com',
                                description: 'Description',
                            },
                        });
                        console.log("🚀 ~ BulletinNotesService ~ generateRandomNotes ~ exam:", exam);
                        evaluationEtudiant.push(exam);
                        const note_exam = await this.prisma.noteEtudiant.create({
                            data: {
                                evaluationEtudiantId: exam.id,
                                etudiantId: etudiant.id,
                                note: this.getRandomInt(10, 20),
                            },
                        });
                        console.log("🚀 ~ BulletinNotesService ~ generateRandomNotes ~ note_exam:", note_exam);
                        notesEtudiant.push(note_exam);
                        const notesEtd = [];
                        if (notesEtudiant.length > 0) {
                            for (const n of notesEtudiant) {
                                if (n.NoteEtudiant && n.NoteEtudiant.length > 0) {
                                    n.NoteEtudiant.forEach((ne) => {
                                        if (ne.etudiantId === etudiant.id)
                                            notesEtd.push(ne);
                                    });
                                }
                            }
                            noteData.note = notesEtd;
                        }
                    }
                    const moyenneMatiere = noteData.note.length > 0
                        ? noteData.note.reduce((acc, note) => {
                            return acc + note.note;
                        }, 0) / noteData.note.length
                        : 0;
                    noteData.moyenne = moyenneMatiere.toFixed(2);
                    noteData.moyenneCoeff = (matiere.coefficient * moyenneMatiere).toFixed(2);
                    noteData.resultat = noteData.moyenne >= 10 ? true : false;
                    g_moyenneTotalCoef += matiere.coefficient * moyenneMatiere;
                    notesData.push(noteData);
                }
                let moyenneUE = 0;
                if (notesData.length > 0) {
                    moyenneUE =
                        notesData.reduce((acc, note) => {
                            return acc + parseFloat(note.moyenne);
                        }, 0) / notesData.length;
                }
                data.moyenneUE = moyenneUE.toFixed(2);
                const creditObtenu = notesData.reduce((acc, note) => {
                    return note.resultat ? acc + note.matiere.credit : acc;
                }, 0);
                data.creditObtenu = creditObtenu;
                g_nbCreditsObtenus += creditObtenu;
                const totalCredit = notesData.reduce((acc, note) => {
                    return acc + note.matiere.credit;
                }, 0);
                data.decision =
                    parseFloat(totalCredit) > 0 &&
                        parseFloat(creditObtenu) === parseFloat(totalCredit)
                        ? 'Validé'
                        : 'Invalidé';
                data.notes = notesData;
                donnees.push(data);
            }
            bulletinNotes.donnees = donnees;
            const moyenneGenerale = {
                moyenneSemestre: null,
                totalCredit: null,
                totalCoef: null,
                nbCreditsObtenus: null,
                moyenneTotalCoef: null,
            };
            let moyenneSemestre = 0;
            if (donnees.length > 0) {
                moyenneSemestre =
                    donnees.reduce((acc, ue) => {
                        return acc + parseFloat(ue.moyenneUE);
                    }, 0) / donnees.length;
            }
            moyenneGenerale.moyenneSemestre = moyenneSemestre.toFixed(2);
            moyenneGenerale.totalCredit = g_totalCredit;
            moyenneGenerale.totalCoef = g_totalCoef;
            moyenneGenerale.nbCreditsObtenus = g_nbCreditsObtenus;
            moyenneGenerale.moyenneTotalCoef = Number(g_moyenneTotalCoef).toFixed(2);
            bulletinNotes.moyenneGenerale = moyenneGenerale;
            listBulletinNotes.push(bulletinNotes);
        }
        return listBulletinNotes;
    }
};
exports.BulletinNotesService = BulletinNotesService;
exports.BulletinNotesService = BulletinNotesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BulletinNotesService);
//# sourceMappingURL=bulletin-notes.service.js.map