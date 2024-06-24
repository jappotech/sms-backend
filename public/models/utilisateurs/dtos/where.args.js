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
exports.UtilisateurRelationFilter = exports.UtilisateurListRelationFilter = exports.UtilisateurWhereInput = exports.UtilisateurWhereInputStrict = exports.UtilisateurWhereUniqueInput = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../contacts/dtos/where.args");
const where_args_2 = require("../../adresses/dtos/where.args");
const where_args_3 = require("../../etablissements/dtos/where.args");
const where_args_4 = require("../../etudiants/dtos/where.args");
const where_args_5 = require("../../professeurs/dtos/where.args");
const where_args_6 = require("../../permissions/dtos/where.args");
let UtilisateurWhereUniqueInput = class UtilisateurWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UtilisateurWhereUniqueInput = UtilisateurWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], UtilisateurWhereUniqueInput.prototype, "id", void 0);
exports.UtilisateurWhereUniqueInput = UtilisateurWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], UtilisateurWhereUniqueInput);
let UtilisateurWhereInputStrict = class UtilisateurWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UtilisateurWhereInputStrict = UtilisateurWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UtilisateurWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInputStrict.prototype, "matricule", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], UtilisateurWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInputStrict.prototype, "prenom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], UtilisateurWhereInputStrict.prototype, "dateNaissance", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInputStrict.prototype, "lieuNaissance", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInputStrict.prototype, "cni", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurWhereInputStrict.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInputStrict.prototype, "nationalite", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurWhereInputStrict.prototype, "groupeSanguin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UtilisateurWhereInputStrict.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurWhereInputStrict.prototype, "statutCompte", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurWhereInputStrict.prototype, "roles", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UtilisateurWhereInputStrict.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UtilisateurWhereInputStrict.prototype, "adresseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UtilisateurWhereInputStrict.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ContactRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ContactRelationFilter)
], UtilisateurWhereInputStrict.prototype, "contact", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.AdresseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.AdresseRelationFilter)
], UtilisateurWhereInputStrict.prototype, "adresse", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.EtudiantRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.EtudiantRelationFilter)
], UtilisateurWhereInputStrict.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_6.PermissionListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_6.PermissionListRelationFilter)
], UtilisateurWhereInputStrict.prototype, "permissions", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_5.ProfesseurRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_5.ProfesseurRelationFilter)
], UtilisateurWhereInputStrict.prototype, "Professeur", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.EtablissementRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.EtablissementRelationFilter)
], UtilisateurWhereInputStrict.prototype, "etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UtilisateurWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], UtilisateurWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UtilisateurWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], UtilisateurWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UtilisateurWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], UtilisateurWhereInputStrict.prototype, "NOT", void 0);
exports.UtilisateurWhereInputStrict = UtilisateurWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], UtilisateurWhereInputStrict);
let UtilisateurWhereInput = class UtilisateurWhereInput extends (0, graphql_1.PartialType)(UtilisateurWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UtilisateurWhereInput = UtilisateurWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UtilisateurWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInput.prototype, "matricule", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], UtilisateurWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInput.prototype, "prenom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], UtilisateurWhereInput.prototype, "dateNaissance", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInput.prototype, "lieuNaissance", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInput.prototype, "cni", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurWhereInput.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UtilisateurWhereInput.prototype, "nationalite", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurWhereInput.prototype, "groupeSanguin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UtilisateurWhereInput.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurWhereInput.prototype, "statutCompte", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringListFilter, { nullable: true }),
    __metadata("design:type", Object)
], UtilisateurWhereInput.prototype, "roles", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UtilisateurWhereInput.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UtilisateurWhereInput.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UtilisateurWhereInput.prototype, "adresseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ContactRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ContactRelationFilter)
], UtilisateurWhereInput.prototype, "contact", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.AdresseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.AdresseRelationFilter)
], UtilisateurWhereInput.prototype, "adresse", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.EtudiantRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.EtudiantRelationFilter)
], UtilisateurWhereInput.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_6.PermissionListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_6.PermissionListRelationFilter)
], UtilisateurWhereInput.prototype, "permissions", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_5.ProfesseurRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_5.ProfesseurRelationFilter)
], UtilisateurWhereInput.prototype, "Professeur", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.EtablissementRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.EtablissementRelationFilter)
], UtilisateurWhereInput.prototype, "etablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UtilisateurWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], UtilisateurWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UtilisateurWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], UtilisateurWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UtilisateurWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], UtilisateurWhereInput.prototype, "NOT", void 0);
exports.UtilisateurWhereInput = UtilisateurWhereInput = __decorate([
    (0, graphql_1.InputType)()
], UtilisateurWhereInput);
let UtilisateurListRelationFilter = class UtilisateurListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { every: { nullable: true, type: () => require("./where.args").UtilisateurWhereInput }, some: { nullable: true, type: () => require("./where.args").UtilisateurWhereInput }, none: { nullable: true, type: () => require("./where.args").UtilisateurWhereInput } };
    }
};
exports.UtilisateurListRelationFilter = UtilisateurListRelationFilter;
exports.UtilisateurListRelationFilter = UtilisateurListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], UtilisateurListRelationFilter);
let UtilisateurRelationFilter = class UtilisateurRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is: { nullable: true, type: () => require("./where.args").UtilisateurWhereInput }, isNot: { nullable: true, type: () => require("./where.args").UtilisateurWhereInput } };
    }
};
exports.UtilisateurRelationFilter = UtilisateurRelationFilter;
exports.UtilisateurRelationFilter = UtilisateurRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], UtilisateurRelationFilter);
//# sourceMappingURL=where.args.js.map