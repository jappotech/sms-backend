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
exports.EtablissementRelationFilter = exports.EtablissementListRelationFilter = exports.EtablissementWhereInput = exports.EtablissementWhereInputStrict = exports.EtablissementWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../adresses/dtos/where.args");
const where_args_2 = require("../../classes/dtos/where.args");
const where_args_3 = require("../../contacts/dtos/where.args");
const where_args_4 = require("../../domaines/dtos/where.args");
const where_args_5 = require("../../salles/dtos/where.args");
const where_args_6 = require("../../utilisateurs/dtos/where.args");
let EtablissementWhereUniqueInput = class EtablissementWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtablissementWhereUniqueInput = EtablissementWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EtablissementWhereUniqueInput.prototype, "id", void 0);
exports.EtablissementWhereUniqueInput = EtablissementWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], EtablissementWhereUniqueInput);
let EtablissementWhereInputStrict = class EtablissementWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtablissementWhereInputStrict = EtablissementWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtablissementWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EtablissementWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EtablissementWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInputStrict.prototype, "matricule", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInputStrict.prototype, "sigle", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInputStrict.prototype, "dateCreation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInputStrict.prototype, "logo", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInputStrict.prototype, "anneeEnCours", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtablissementWhereInputStrict.prototype, "adresseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtablissementWhereInputStrict.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.AdresseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.AdresseRelationFilter)
], EtablissementWhereInputStrict.prototype, "adresse", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.ContactRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.ContactRelationFilter)
], EtablissementWhereInputStrict.prototype, "contact", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_6.UtilisateurListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_6.UtilisateurListRelationFilter)
], EtablissementWhereInputStrict.prototype, "utilisateurs", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.DomaineListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.DomaineListRelationFilter)
], EtablissementWhereInputStrict.prototype, "domaines", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.ClasseListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.ClasseListRelationFilter)
], EtablissementWhereInputStrict.prototype, "classes", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_5.SalleListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_5.SalleListRelationFilter)
], EtablissementWhereInputStrict.prototype, "salle", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtablissementWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EtablissementWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtablissementWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EtablissementWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtablissementWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EtablissementWhereInputStrict.prototype, "NOT", void 0);
exports.EtablissementWhereInputStrict = EtablissementWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], EtablissementWhereInputStrict);
let EtablissementWhereInput = class EtablissementWhereInput extends (0, graphql_1.PartialType)(EtablissementWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtablissementWhereInput = EtablissementWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtablissementWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EtablissementWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EtablissementWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInput.prototype, "matricule", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInput.prototype, "sigle", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInput.prototype, "dateCreation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInput.prototype, "logo", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtablissementWhereInput.prototype, "anneeEnCours", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtablissementWhereInput.prototype, "adresseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtablissementWhereInput.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.AdresseRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.AdresseRelationFilter)
], EtablissementWhereInput.prototype, "adresse", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.ContactRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.ContactRelationFilter)
], EtablissementWhereInput.prototype, "contact", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_6.UtilisateurListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_6.UtilisateurListRelationFilter)
], EtablissementWhereInput.prototype, "utilisateurs", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.DomaineListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.DomaineListRelationFilter)
], EtablissementWhereInput.prototype, "domaines", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.ClasseListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.ClasseListRelationFilter)
], EtablissementWhereInput.prototype, "classes", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_5.SalleListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_5.SalleListRelationFilter)
], EtablissementWhereInput.prototype, "salle", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtablissementWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EtablissementWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtablissementWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EtablissementWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtablissementWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EtablissementWhereInput.prototype, "NOT", void 0);
exports.EtablissementWhereInput = EtablissementWhereInput = __decorate([
    (0, graphql_1.InputType)()
], EtablissementWhereInput);
let EtablissementListRelationFilter = class EtablissementListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtablissementListRelationFilter = EtablissementListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => EtablissementWhereInput, { nullable: true }),
    __metadata("design:type", EtablissementWhereInput)
], EtablissementListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => EtablissementWhereInput, { nullable: true }),
    __metadata("design:type", EtablissementWhereInput)
], EtablissementListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => EtablissementWhereInput, { nullable: true }),
    __metadata("design:type", EtablissementWhereInput)
], EtablissementListRelationFilter.prototype, "none", void 0);
exports.EtablissementListRelationFilter = EtablissementListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], EtablissementListRelationFilter);
let EtablissementRelationFilter = class EtablissementRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtablissementRelationFilter = EtablissementRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => EtablissementWhereInput, { nullable: true }),
    __metadata("design:type", EtablissementWhereInput)
], EtablissementRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => EtablissementWhereInput, { nullable: true }),
    __metadata("design:type", EtablissementWhereInput)
], EtablissementRelationFilter.prototype, "isNot", void 0);
exports.EtablissementRelationFilter = EtablissementRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], EtablissementRelationFilter);
//# sourceMappingURL=where.args.js.map