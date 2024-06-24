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
exports.CoursRelationFilter = exports.CoursListRelationFilter = exports.CoursWhereInput = exports.CoursWhereInputStrict = exports.CoursWhereUniqueInput = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../annee-scolaires/dtos/where.args");
const where_args_2 = require("../../classes/dtos/where.args");
const where_args_3 = require("../../emploi-du-temps/dtos/where.args");
const where_args_4 = require("../../evaluation-etudiants/dtos/where.args");
const where_args_5 = require("../../feuille-presences/dtos/where.args");
const where_args_6 = require("../../matieres/dtos/where.args");
const where_args_7 = require("../../professeurs/dtos/where.args");
const where_args_8 = require("../../salles/dtos/where.args");
let CoursWhereUniqueInput = class CoursWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => Number } };
    }
};
exports.CoursWhereUniqueInput = CoursWhereUniqueInput;
exports.CoursWhereUniqueInput = CoursWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], CoursWhereUniqueInput);
let CoursWhereInputStrict = class CoursWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CoursWhereInputStrict = CoursWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], CoursWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], CoursWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], CoursWhereInputStrict.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInputStrict.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInputStrict.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInputStrict.prototype, "heureDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInputStrict.prototype, "heureFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], CoursWhereInputStrict.prototype, "matiereId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], CoursWhereInputStrict.prototype, "salleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], CoursWhereInputStrict.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], CoursWhereInputStrict.prototype, "professeurId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_6.MatiereRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_6.MatiereRelationFilter)
], CoursWhereInputStrict.prototype, "matiere", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_8.SalleRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_8.SalleRelationFilter)
], CoursWhereInputStrict.prototype, "salle", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.ClasseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.ClasseRelationFilter)
], CoursWhereInputStrict.prototype, "classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.EvaluationEtudiantsListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.EvaluationEtudiantsListRelationFilter)
], CoursWhereInputStrict.prototype, "evaluationEtudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_5.FeuillePresenceListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_5.FeuillePresenceListRelationFilter)
], CoursWhereInputStrict.prototype, "feuillePresences", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_7.ProfesseurRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_7.ProfesseurRelationFilter)
], CoursWhereInputStrict.prototype, "professeur", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.EmploiDuTempsListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.EmploiDuTempsListRelationFilter)
], CoursWhereInputStrict.prototype, "emploiDuTemps", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CoursWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], CoursWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CoursWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], CoursWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CoursWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], CoursWhereInputStrict.prototype, "NOT", void 0);
exports.CoursWhereInputStrict = CoursWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], CoursWhereInputStrict);
let CoursWhereInput = class CoursWhereInput extends (0, graphql_1.PartialType)(CoursWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CoursWhereInput = CoursWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], CoursWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], CoursWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], CoursWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInput.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInput.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInput.prototype, "heureDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], CoursWhereInput.prototype, "heureFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], CoursWhereInput.prototype, "matiereId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], CoursWhereInput.prototype, "salleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], CoursWhereInput.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], CoursWhereInput.prototype, "professeurId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_6.MatiereRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_6.MatiereRelationFilter)
], CoursWhereInput.prototype, "matiere", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_8.SalleRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_8.SalleRelationFilter)
], CoursWhereInput.prototype, "salle", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.ClasseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.ClasseRelationFilter)
], CoursWhereInput.prototype, "classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.EvaluationEtudiantsListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.EvaluationEtudiantsListRelationFilter)
], CoursWhereInput.prototype, "evaluationEtudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_5.FeuillePresenceListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_5.FeuillePresenceListRelationFilter)
], CoursWhereInput.prototype, "feuillePresences", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_7.ProfesseurRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_7.ProfesseurRelationFilter)
], CoursWhereInput.prototype, "professeur", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.EmploiDuTempsListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.EmploiDuTempsListRelationFilter)
], CoursWhereInput.prototype, "emploiDuTemps", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], CoursWhereInput.prototype, "anneeScolaireId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.AnneeScolaireRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.AnneeScolaireRelationFilter)
], CoursWhereInput.prototype, "AnneeScolaire", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CoursWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CoursWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CoursWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CoursWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CoursWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CoursWhereInput.prototype, "NOT", void 0);
exports.CoursWhereInput = CoursWhereInput = __decorate([
    (0, graphql_1.InputType)()
], CoursWhereInput);
let CoursListRelationFilter = class CoursListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { every: { nullable: true, type: () => require("./where.args").CoursWhereInput }, some: { nullable: true, type: () => require("./where.args").CoursWhereInput }, none: { nullable: true, type: () => require("./where.args").CoursWhereInput } };
    }
};
exports.CoursListRelationFilter = CoursListRelationFilter;
exports.CoursListRelationFilter = CoursListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], CoursListRelationFilter);
let CoursRelationFilter = class CoursRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is: { nullable: true, type: () => require("./where.args").CoursWhereInput }, isNot: { nullable: true, type: () => require("./where.args").CoursWhereInput } };
    }
};
exports.CoursRelationFilter = CoursRelationFilter;
exports.CoursRelationFilter = CoursRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], CoursRelationFilter);
//# sourceMappingURL=where.args.js.map