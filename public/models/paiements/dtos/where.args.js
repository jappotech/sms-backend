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
exports.PaiementRelationFilter = exports.PaiementListRelationFilter = exports.PaiementWhereInput = exports.PaiementWhereInputStrict = exports.PaiementWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../etudiants/dtos/where.args");
let PaiementWhereUniqueInput = class PaiementWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PaiementWhereUniqueInput = PaiementWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], PaiementWhereUniqueInput.prototype, "id", void 0);
exports.PaiementWhereUniqueInput = PaiementWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], PaiementWhereUniqueInput);
let PaiementWhereInputStrict = class PaiementWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PaiementWhereInputStrict = PaiementWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], PaiementWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], PaiementWhereInputStrict.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.FloatFilter, { nullable: true }),
    __metadata("design:type", common_input_1.FloatFilter)
], PaiementWhereInputStrict.prototype, "montant", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], PaiementWhereInputStrict.prototype, "datePaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PaiementWhereInputStrict.prototype, "methodePaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PaiementWhereInputStrict.prototype, "referencePaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PaiementWhereInputStrict.prototype, "typeFrais", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PaiementWhereInputStrict.prototype, "statutPaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtudiantRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.EtudiantRelationFilter)
], PaiementWhereInputStrict.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaiementWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], PaiementWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaiementWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], PaiementWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaiementWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], PaiementWhereInputStrict.prototype, "NOT", void 0);
exports.PaiementWhereInputStrict = PaiementWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], PaiementWhereInputStrict);
let PaiementWhereInput = class PaiementWhereInput extends (0, graphql_1.PartialType)(PaiementWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PaiementWhereInput = PaiementWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], PaiementWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], PaiementWhereInput.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.FloatFilter, { nullable: true }),
    __metadata("design:type", common_input_1.FloatFilter)
], PaiementWhereInput.prototype, "montant", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], PaiementWhereInput.prototype, "datePaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PaiementWhereInput.prototype, "methodePaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PaiementWhereInput.prototype, "referencePaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PaiementWhereInput.prototype, "typeFrais", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], PaiementWhereInput.prototype, "statutPaiement", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtudiantRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.EtudiantRelationFilter)
], PaiementWhereInput.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaiementWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PaiementWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaiementWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PaiementWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaiementWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PaiementWhereInput.prototype, "NOT", void 0);
exports.PaiementWhereInput = PaiementWhereInput = __decorate([
    (0, graphql_1.InputType)()
], PaiementWhereInput);
let PaiementListRelationFilter = class PaiementListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PaiementListRelationFilter = PaiementListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => PaiementWhereInput, { nullable: true }),
    __metadata("design:type", PaiementWhereInput)
], PaiementListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => PaiementWhereInput, { nullable: true }),
    __metadata("design:type", PaiementWhereInput)
], PaiementListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => PaiementWhereInput, { nullable: true }),
    __metadata("design:type", PaiementWhereInput)
], PaiementListRelationFilter.prototype, "none", void 0);
exports.PaiementListRelationFilter = PaiementListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], PaiementListRelationFilter);
let PaiementRelationFilter = class PaiementRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PaiementRelationFilter = PaiementRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => PaiementWhereInput, { nullable: true }),
    __metadata("design:type", PaiementWhereInput)
], PaiementRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => PaiementWhereInput, { nullable: true }),
    __metadata("design:type", PaiementWhereInput)
], PaiementRelationFilter.prototype, "isNot", void 0);
exports.PaiementRelationFilter = PaiementRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], PaiementRelationFilter);
//# sourceMappingURL=where.args.js.map