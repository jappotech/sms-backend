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
exports.EtudiantRelationFilter = exports.EtudiantListRelationFilter = exports.EtudiantWhereInput = exports.EtudiantWhereInputStrict = exports.EtudiantWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../feuille-presences/dtos/where.args");
const where_args_2 = require("../../inscriptions/dtos/where.args");
const where_args_3 = require("../../note-etudiants/dtos/where.args");
const where_args_4 = require("../../paiements/dtos/where.args");
const where_args_5 = require("../../utilisateurs/dtos/where.args");
let EtudiantWhereUniqueInput = class EtudiantWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtudiantWhereUniqueInput = EtudiantWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EtudiantWhereUniqueInput.prototype, "id", void 0);
exports.EtudiantWhereUniqueInput = EtudiantWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], EtudiantWhereUniqueInput);
let EtudiantWhereInputStrict = class EtudiantWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtudiantWhereInputStrict = EtudiantWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtudiantWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EtudiantWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EtudiantWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtudiantWhereInputStrict.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtudiantWhereInputStrict.prototype, "ine", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtudiantWhereInputStrict.prototype, "baccaleaureat", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtudiantWhereInputStrict.prototype, "anneeBaccaleaureat", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtudiantWhereInputStrict.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtudiantWhereInputStrict.prototype, "feuillePresencesId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_5.UtilisateurRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_5.UtilisateurRelationFilter)
], EtudiantWhereInputStrict.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.InscriptionListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.InscriptionListRelationFilter)
], EtudiantWhereInputStrict.prototype, "inscriptions", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.NoteEtudiantListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.NoteEtudiantListRelationFilter)
], EtudiantWhereInputStrict.prototype, "notes", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.FeuillePresenceListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.FeuillePresenceListRelationFilter)
], EtudiantWhereInputStrict.prototype, "feuillePresences", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.PaiementListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.PaiementListRelationFilter)
], EtudiantWhereInputStrict.prototype, "Paiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtudiantWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EtudiantWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtudiantWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EtudiantWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtudiantWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], EtudiantWhereInputStrict.prototype, "NOT", void 0);
exports.EtudiantWhereInputStrict = EtudiantWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], EtudiantWhereInputStrict);
let EtudiantWhereInput = class EtudiantWhereInput extends (0, graphql_1.PartialType)(EtudiantWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtudiantWhereInput = EtudiantWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtudiantWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EtudiantWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], EtudiantWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtudiantWhereInput.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtudiantWhereInput.prototype, "ine", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], EtudiantWhereInput.prototype, "baccaleaureat", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtudiantWhereInput.prototype, "anneeBaccaleaureat", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtudiantWhereInput.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], EtudiantWhereInput.prototype, "feuillePresencesId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_5.UtilisateurRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_5.UtilisateurRelationFilter)
], EtudiantWhereInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.InscriptionListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.InscriptionListRelationFilter)
], EtudiantWhereInput.prototype, "inscriptions", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.NoteEtudiantListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.NoteEtudiantListRelationFilter)
], EtudiantWhereInput.prototype, "notes", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.FeuillePresenceListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.FeuillePresenceListRelationFilter)
], EtudiantWhereInput.prototype, "feuillePresences", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_4.PaiementListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_4.PaiementListRelationFilter)
], EtudiantWhereInput.prototype, "Paiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtudiantWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EtudiantWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtudiantWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EtudiantWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EtudiantWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EtudiantWhereInput.prototype, "NOT", void 0);
exports.EtudiantWhereInput = EtudiantWhereInput = __decorate([
    (0, graphql_1.InputType)()
], EtudiantWhereInput);
let EtudiantListRelationFilter = class EtudiantListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtudiantListRelationFilter = EtudiantListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => EtudiantWhereInput, { nullable: true }),
    __metadata("design:type", EtudiantWhereInput)
], EtudiantListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => EtudiantWhereInput, { nullable: true }),
    __metadata("design:type", EtudiantWhereInput)
], EtudiantListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => EtudiantWhereInput, { nullable: true }),
    __metadata("design:type", EtudiantWhereInput)
], EtudiantListRelationFilter.prototype, "none", void 0);
exports.EtudiantListRelationFilter = EtudiantListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], EtudiantListRelationFilter);
let EtudiantRelationFilter = class EtudiantRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtudiantRelationFilter = EtudiantRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => EtudiantWhereInput, { nullable: true }),
    __metadata("design:type", EtudiantWhereInput)
], EtudiantRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => EtudiantWhereInput, { nullable: true }),
    __metadata("design:type", EtudiantWhereInput)
], EtudiantRelationFilter.prototype, "isNot", void 0);
exports.EtudiantRelationFilter = EtudiantRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], EtudiantRelationFilter);
//# sourceMappingURL=where.args.js.map