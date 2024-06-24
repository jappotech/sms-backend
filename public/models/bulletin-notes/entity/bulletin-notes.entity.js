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
exports.ResultatAnnuel = exports.BulletinNotes = void 0;
const eager_import_0 = require("../../unite-enseignements/entity/unite-enseignement.entity");
const eager_import_1 = require("../../matieres/entity/matiere.entity");
const eager_import_2 = require("../../note-etudiants/entity/note-etudiant.entity");
const eager_import_3 = require("../../etudiants/entity/etudiant.entity");
const graphql_1 = require("@nestjs/graphql");
const etudiant_entity_1 = require("../../../models/etudiants/entity/etudiant.entity");
const matiere_entity_1 = require("../../../models/matieres/entity/matiere.entity");
const unite_enseignement_entity_1 = require("../../../models/unite-enseignements/entity/unite-enseignement.entity");
let ListeNotes = class ListeNotes {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => require("../../unite-enseignements/entity/unite-enseignement.entity").UniteEnseignement, { nullable: true }),
    __metadata("design:type", unite_enseignement_entity_1.UniteEnseignement)
], ListeNotes.prototype, "uniteEnseignement", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Note], { nullable: true }),
    __metadata("design:type", Array)
], ListeNotes.prototype, "notes", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], ListeNotes.prototype, "creditObtenu", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], ListeNotes.prototype, "moyenneUE", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListeNotes.prototype, "decision", void 0);
ListeNotes = __decorate([
    (0, graphql_1.ObjectType)()
], ListeNotes);
let Note = class Note {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => require("../../matieres/entity/matiere.entity").Matiere, { nullable: true }),
    __metadata("design:type", matiere_entity_1.Matiere)
], Note.prototype, "matiere", void 0);
__decorate([
    (0, graphql_1.Field)(() => [require("../../note-etudiants/entity/note-etudiant.entity").NoteEtudiant], { nullable: true }),
    __metadata("design:type", Array)
], Note.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Note.prototype, "moyenne", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Note.prototype, "moyenneCoeff", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Note.prototype, "resultat", void 0);
Note = __decorate([
    (0, graphql_1.ObjectType)()
], Note);
let MoyenneGenerale = class MoyenneGenerale {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], MoyenneGenerale.prototype, "moyenneSemestre", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], MoyenneGenerale.prototype, "totalCredit", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], MoyenneGenerale.prototype, "totalCoef", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], MoyenneGenerale.prototype, "nbCreditsObtenus", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], MoyenneGenerale.prototype, "moyenneTotalCoef", void 0);
MoyenneGenerale = __decorate([
    (0, graphql_1.ObjectType)()
], MoyenneGenerale);
let BulletinNotes = class BulletinNotes {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.BulletinNotes = BulletinNotes;
__decorate([
    (0, graphql_1.Field)(() => require("../../etudiants/entity/etudiant.entity").Etudiant, { nullable: true }),
    __metadata("design:type", etudiant_entity_1.Etudiant)
], BulletinNotes.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ListeNotes], { nullable: true }),
    __metadata("design:type", Array)
], BulletinNotes.prototype, "donnees", void 0);
__decorate([
    (0, graphql_1.Field)(() => MoyenneGenerale, { nullable: true }),
    __metadata("design:type", MoyenneGenerale)
], BulletinNotes.prototype, "moyenneGenerale", void 0);
exports.BulletinNotes = BulletinNotes = __decorate([
    (0, graphql_1.ObjectType)()
], BulletinNotes);
let ResultatAnnuel = class ResultatAnnuel {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ResultatAnnuel = ResultatAnnuel;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ResultatAnnuel.prototype, "moyenneAnnuelle", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], ResultatAnnuel.prototype, "totalCredit", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ResultatAnnuel.prototype, "resultat", void 0);
exports.ResultatAnnuel = ResultatAnnuel = __decorate([
    (0, graphql_1.ObjectType)()
], ResultatAnnuel);
//# sourceMappingURL=bulletin-notes.entity.js.map