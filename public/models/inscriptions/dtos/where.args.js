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
exports.InscriptionRelationFilter = exports.InscriptionListRelationFilter = exports.InscriptionWhereInput = exports.InscriptionWhereInputStrict = exports.InscriptionWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../classes/dtos/where.args");
const where_args_2 = require("../../diplomes/dtos/where.args");
const where_args_3 = require("../../etudiants/dtos/where.args");
let InscriptionWhereUniqueInput = class InscriptionWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.InscriptionWhereUniqueInput = InscriptionWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], InscriptionWhereUniqueInput.prototype, "id", void 0);
exports.InscriptionWhereUniqueInput = InscriptionWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], InscriptionWhereUniqueInput);
let InscriptionWhereInputStrict = class InscriptionWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.InscriptionWhereInputStrict = InscriptionWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], InscriptionWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], InscriptionWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], InscriptionWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInputStrict.prototype, "reference", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", common_input_1.BoolFilter)
], InscriptionWhereInputStrict.prototype, "premiereInscription", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInputStrict.prototype, "dernierDiplome", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInputStrict.prototype, "autreEtablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInputStrict.prototype, "activiteProfessionnel", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInputStrict.prototype, "niveau", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInputStrict.prototype, "statut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], InscriptionWhereInputStrict.prototype, "diplomeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], InscriptionWhereInputStrict.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], InscriptionWhereInputStrict.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.DiplomeRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.DiplomeRelationFilter)
], InscriptionWhereInputStrict.prototype, "diplome", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.EtudiantRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.EtudiantRelationFilter)
], InscriptionWhereInputStrict.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseRelationFilter)
], InscriptionWhereInputStrict.prototype, "classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InscriptionWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], InscriptionWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InscriptionWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], InscriptionWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InscriptionWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], InscriptionWhereInputStrict.prototype, "NOT", void 0);
exports.InscriptionWhereInputStrict = InscriptionWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], InscriptionWhereInputStrict);
let InscriptionWhereInput = class InscriptionWhereInput extends (0, graphql_1.PartialType)(InscriptionWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.InscriptionWhereInput = InscriptionWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], InscriptionWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], InscriptionWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], InscriptionWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInput.prototype, "reference", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", common_input_1.BoolFilter)
], InscriptionWhereInput.prototype, "premiereInscription", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInput.prototype, "dernierDiplome", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInput.prototype, "autreEtablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInput.prototype, "activiteProfessionnel", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInput.prototype, "niveau", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], InscriptionWhereInput.prototype, "statut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], InscriptionWhereInput.prototype, "diplomeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], InscriptionWhereInput.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], InscriptionWhereInput.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.DiplomeRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.DiplomeRelationFilter)
], InscriptionWhereInput.prototype, "diplome", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.EtudiantRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.EtudiantRelationFilter)
], InscriptionWhereInput.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseRelationFilter)
], InscriptionWhereInput.prototype, "classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InscriptionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], InscriptionWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InscriptionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], InscriptionWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InscriptionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], InscriptionWhereInput.prototype, "NOT", void 0);
exports.InscriptionWhereInput = InscriptionWhereInput = __decorate([
    (0, graphql_1.InputType)()
], InscriptionWhereInput);
let InscriptionListRelationFilter = class InscriptionListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.InscriptionListRelationFilter = InscriptionListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => InscriptionWhereInput, { nullable: true }),
    __metadata("design:type", InscriptionWhereInput)
], InscriptionListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => InscriptionWhereInput, { nullable: true }),
    __metadata("design:type", InscriptionWhereInput)
], InscriptionListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => InscriptionWhereInput, { nullable: true }),
    __metadata("design:type", InscriptionWhereInput)
], InscriptionListRelationFilter.prototype, "none", void 0);
exports.InscriptionListRelationFilter = InscriptionListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], InscriptionListRelationFilter);
let InscriptionRelationFilter = class InscriptionRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.InscriptionRelationFilter = InscriptionRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => InscriptionWhereInput, { nullable: true }),
    __metadata("design:type", InscriptionWhereInput)
], InscriptionRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => InscriptionWhereInput, { nullable: true }),
    __metadata("design:type", InscriptionWhereInput)
], InscriptionRelationFilter.prototype, "isNot", void 0);
exports.InscriptionRelationFilter = InscriptionRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], InscriptionRelationFilter);
//# sourceMappingURL=where.args.js.map