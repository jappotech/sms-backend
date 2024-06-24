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
exports.ClasseRelationFilter = exports.ClasseListRelationFilter = exports.ClasseWhereInput = exports.ClasseWhereInputStrict = exports.ClasseWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../annee-scolaires/dtos/where.args");
const where_args_2 = require("../../cours/dtos/where.args");
const where_args_3 = require("../../emploi-du-temps/dtos/where.args");
const where_args_4 = require("../../etablissements/dtos/where.args");
const where_args_5 = require("../../inscriptions/dtos/where.args");
const where_args_6 = require("../../semestres/dtos/where.args");
const where_args_7 = require("../../specialites/dtos/where.args");
let ClasseWhereUniqueInput = class ClasseWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ClasseWhereUniqueInput = ClasseWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], ClasseWhereUniqueInput.prototype, "id", void 0);
exports.ClasseWhereUniqueInput = ClasseWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], ClasseWhereUniqueInput);
let ClasseWhereInputStrict = class ClasseWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ClasseWhereInputStrict = ClasseWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ClasseWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ClasseWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ClasseWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ClasseWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ClasseWhereInputStrict.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ClasseWhereInputStrict.prototype, "niveau", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ClasseWhereInputStrict.prototype, "anneeScolaireId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.AnneeScolaireRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.AnneeScolaireRelationFilter)
], ClasseWhereInputStrict.prototype, "AnneeScolaire", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ClasseWhereInputStrict.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ClasseWhereInputStrict.prototype, "specialiteId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.EtablissementRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.EtablissementRelationFilter)
], ClasseWhereInputStrict.prototype, "etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_6.SemestreListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_6.SemestreListRelationFilter)
], ClasseWhereInputStrict.prototype, "semestres", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_5.InscriptionListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_5.InscriptionListRelationFilter)
], ClasseWhereInputStrict.prototype, "inscriptions", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_7.SpecialiteRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_7.SpecialiteRelationFilter)
], ClasseWhereInputStrict.prototype, "specialite", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.CoursListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.CoursListRelationFilter)
], ClasseWhereInputStrict.prototype, "Cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.EmploiDuTempsListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.EmploiDuTempsListRelationFilter)
], ClasseWhereInputStrict.prototype, "EmploiDuTemps", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ClasseWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ClasseWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ClasseWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ClasseWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ClasseWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ClasseWhereInputStrict.prototype, "NOT", void 0);
exports.ClasseWhereInputStrict = ClasseWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ClasseWhereInputStrict);
let ClasseWhereInput = class ClasseWhereInput extends (0, graphql_1.PartialType)(ClasseWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ClasseWhereInput = ClasseWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ClasseWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ClasseWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ClasseWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ClasseWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ClasseWhereInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ClasseWhereInput.prototype, "niveau", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ClasseWhereInput.prototype, "anneeScolaireId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.AnneeScolaireRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.AnneeScolaireRelationFilter)
], ClasseWhereInput.prototype, "AnneeScolaire", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ClasseWhereInput.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ClasseWhereInput.prototype, "specialiteId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.EtablissementRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.EtablissementRelationFilter)
], ClasseWhereInput.prototype, "etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_6.SemestreListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_6.SemestreListRelationFilter)
], ClasseWhereInput.prototype, "semestres", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_5.InscriptionListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_5.InscriptionListRelationFilter)
], ClasseWhereInput.prototype, "inscriptions", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_7.SpecialiteRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_7.SpecialiteRelationFilter)
], ClasseWhereInput.prototype, "specialite", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.CoursListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.CoursListRelationFilter)
], ClasseWhereInput.prototype, "Cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.EmploiDuTempsListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.EmploiDuTempsListRelationFilter)
], ClasseWhereInput.prototype, "EmploiDuTemps", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ClasseWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ClasseWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ClasseWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ClasseWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ClasseWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ClasseWhereInput.prototype, "NOT", void 0);
exports.ClasseWhereInput = ClasseWhereInput = __decorate([
    (0, graphql_1.InputType)()
], ClasseWhereInput);
let ClasseListRelationFilter = class ClasseListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ClasseListRelationFilter = ClasseListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => ClasseWhereInput, { nullable: true }),
    __metadata("design:type", ClasseWhereInput)
], ClasseListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => ClasseWhereInput, { nullable: true }),
    __metadata("design:type", ClasseWhereInput)
], ClasseListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => ClasseWhereInput, { nullable: true }),
    __metadata("design:type", ClasseWhereInput)
], ClasseListRelationFilter.prototype, "none", void 0);
exports.ClasseListRelationFilter = ClasseListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ClasseListRelationFilter);
let ClasseRelationFilter = class ClasseRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ClasseRelationFilter = ClasseRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => ClasseWhereInput, { nullable: true }),
    __metadata("design:type", ClasseWhereInput)
], ClasseRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => ClasseWhereInput, { nullable: true }),
    __metadata("design:type", ClasseWhereInput)
], ClasseRelationFilter.prototype, "isNot", void 0);
exports.ClasseRelationFilter = ClasseRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ClasseRelationFilter);
//# sourceMappingURL=where.args.js.map