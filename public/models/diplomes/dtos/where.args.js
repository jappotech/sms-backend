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
exports.DiplomeRelationFilter = exports.DiplomeListRelationFilter = exports.DiplomeWhereInput = exports.DiplomeWhereInputStrict = exports.DiplomeWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../inscriptions/dtos/where.args");
const where_args_2 = require("../../specialites/dtos/where.args");
let DiplomeWhereUniqueInput = class DiplomeWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DiplomeWhereUniqueInput = DiplomeWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], DiplomeWhereUniqueInput.prototype, "id", void 0);
exports.DiplomeWhereUniqueInput = DiplomeWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], DiplomeWhereUniqueInput);
let DiplomeWhereInputStrict = class DiplomeWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DiplomeWhereInputStrict = DiplomeWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], DiplomeWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DiplomeWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DiplomeWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DiplomeWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DiplomeWhereInputStrict.prototype, "finalite", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DiplomeWhereInputStrict.prototype, "entite", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DiplomeWhereInputStrict.prototype, "habilitation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringListFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringListFilter)
], DiplomeWhereInputStrict.prototype, "partenaires", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DiplomeWhereInputStrict.prototype, "dateCreation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DiplomeWhereInputStrict.prototype, "dateHabilitation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DiplomeWhereInputStrict.prototype, "dateEcheance", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], DiplomeWhereInputStrict.prototype, "duree", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], DiplomeWhereInputStrict.prototype, "specialiteId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.InscriptionListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.InscriptionListRelationFilter)
], DiplomeWhereInputStrict.prototype, "inscriptions", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.SpecialiteRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.SpecialiteRelationFilter)
], DiplomeWhereInputStrict.prototype, "specialite", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DiplomeWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], DiplomeWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DiplomeWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], DiplomeWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DiplomeWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], DiplomeWhereInputStrict.prototype, "NOT", void 0);
exports.DiplomeWhereInputStrict = DiplomeWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], DiplomeWhereInputStrict);
let DiplomeWhereInput = class DiplomeWhereInput extends (0, graphql_1.PartialType)(DiplomeWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DiplomeWhereInput = DiplomeWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], DiplomeWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DiplomeWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DiplomeWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DiplomeWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DiplomeWhereInput.prototype, "finalite", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DiplomeWhereInput.prototype, "entite", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], DiplomeWhereInput.prototype, "habilitation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringListFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringListFilter)
], DiplomeWhereInput.prototype, "partenaires", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DiplomeWhereInput.prototype, "dateCreation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DiplomeWhereInput.prototype, "dateHabilitation", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], DiplomeWhereInput.prototype, "dateEcheance", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], DiplomeWhereInput.prototype, "duree", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], DiplomeWhereInput.prototype, "specialiteId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.InscriptionListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.InscriptionListRelationFilter)
], DiplomeWhereInput.prototype, "inscriptions", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.SpecialiteRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.SpecialiteRelationFilter)
], DiplomeWhereInput.prototype, "specialite", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DiplomeWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], DiplomeWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DiplomeWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], DiplomeWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DiplomeWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], DiplomeWhereInput.prototype, "NOT", void 0);
exports.DiplomeWhereInput = DiplomeWhereInput = __decorate([
    (0, graphql_1.InputType)()
], DiplomeWhereInput);
let DiplomeListRelationFilter = class DiplomeListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DiplomeListRelationFilter = DiplomeListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => DiplomeWhereInput, { nullable: true }),
    __metadata("design:type", DiplomeWhereInput)
], DiplomeListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => DiplomeWhereInput, { nullable: true }),
    __metadata("design:type", DiplomeWhereInput)
], DiplomeListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => DiplomeWhereInput, { nullable: true }),
    __metadata("design:type", DiplomeWhereInput)
], DiplomeListRelationFilter.prototype, "none", void 0);
exports.DiplomeListRelationFilter = DiplomeListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], DiplomeListRelationFilter);
let DiplomeRelationFilter = class DiplomeRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.DiplomeRelationFilter = DiplomeRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => DiplomeWhereInput, { nullable: true }),
    __metadata("design:type", DiplomeWhereInput)
], DiplomeRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => DiplomeWhereInput, { nullable: true }),
    __metadata("design:type", DiplomeWhereInput)
], DiplomeRelationFilter.prototype, "isNot", void 0);
exports.DiplomeRelationFilter = DiplomeRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], DiplomeRelationFilter);
//# sourceMappingURL=where.args.js.map