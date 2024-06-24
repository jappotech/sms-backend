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
exports.AdresseRelationFilter = exports.AdresseListRelationFilter = exports.AdresseWhereInput = exports.AdresseWhereInputStrict = exports.AdresseWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../etablissements/dtos/where.args");
const where_args_2 = require("../../utilisateurs/dtos/where.args");
let AdresseWhereUniqueInput = class AdresseWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AdresseWhereUniqueInput = AdresseWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], AdresseWhereUniqueInput.prototype, "id", void 0);
exports.AdresseWhereUniqueInput = AdresseWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], AdresseWhereUniqueInput);
let AdresseWhereInputStrict = class AdresseWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AdresseWhereInputStrict = AdresseWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], AdresseWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AdresseWhereInputStrict.prototype, "pays", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AdresseWhereInputStrict.prototype, "region", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AdresseWhereInputStrict.prototype, "ville", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AdresseWhereInputStrict.prototype, "codePostal", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AdresseWhereInputStrict.prototype, "geolocalisation", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.UtilisateurListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.UtilisateurListRelationFilter)
], AdresseWhereInputStrict.prototype, "utilisateurs", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtablissementListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.EtablissementListRelationFilter)
], AdresseWhereInputStrict.prototype, "etablissements", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AdresseWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], AdresseWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AdresseWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], AdresseWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AdresseWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], AdresseWhereInputStrict.prototype, "NOT", void 0);
exports.AdresseWhereInputStrict = AdresseWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], AdresseWhereInputStrict);
let AdresseWhereInput = class AdresseWhereInput extends (0, graphql_1.PartialType)(AdresseWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AdresseWhereInput = AdresseWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], AdresseWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AdresseWhereInput.prototype, "pays", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AdresseWhereInput.prototype, "region", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AdresseWhereInput.prototype, "ville", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AdresseWhereInput.prototype, "codePostal", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AdresseWhereInput.prototype, "geolocalisation", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.UtilisateurListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.UtilisateurListRelationFilter)
], AdresseWhereInput.prototype, "utilisateurs", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtablissementListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.EtablissementListRelationFilter)
], AdresseWhereInput.prototype, "etablissements", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AdresseWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], AdresseWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AdresseWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], AdresseWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AdresseWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], AdresseWhereInput.prototype, "NOT", void 0);
exports.AdresseWhereInput = AdresseWhereInput = __decorate([
    (0, graphql_1.InputType)()
], AdresseWhereInput);
let AdresseListRelationFilter = class AdresseListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AdresseListRelationFilter = AdresseListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => [AdresseWhereInput], { nullable: true }),
    __metadata("design:type", AdresseWhereInput)
], AdresseListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AdresseWhereInput], { nullable: true }),
    __metadata("design:type", AdresseWhereInput)
], AdresseListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AdresseWhereInput], { nullable: true }),
    __metadata("design:type", AdresseWhereInput)
], AdresseListRelationFilter.prototype, "none", void 0);
exports.AdresseListRelationFilter = AdresseListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], AdresseListRelationFilter);
let AdresseRelationFilter = class AdresseRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AdresseRelationFilter = AdresseRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => [AdresseWhereInput], { nullable: true }),
    __metadata("design:type", AdresseWhereInput)
], AdresseRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AdresseWhereInput], { nullable: true }),
    __metadata("design:type", AdresseWhereInput)
], AdresseRelationFilter.prototype, "isNot", void 0);
exports.AdresseRelationFilter = AdresseRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], AdresseRelationFilter);
//# sourceMappingURL=where.args.js.map