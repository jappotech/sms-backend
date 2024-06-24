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
exports.UniteEnseignementRelationFilter = exports.UniteEnseignementListRelationFilter = exports.UniteEnseignementWhereInput = exports.UniteEnseignementWhereInputStrict = exports.UniteEnseignementWhereUniqueInput = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../matieres/dtos/where.args");
const where_args_2 = require("../../semestres/dtos/where.args");
let UniteEnseignementWhereUniqueInput = class UniteEnseignementWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UniteEnseignementWhereUniqueInput = UniteEnseignementWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], UniteEnseignementWhereUniqueInput.prototype, "id", void 0);
exports.UniteEnseignementWhereUniqueInput = UniteEnseignementWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], UniteEnseignementWhereUniqueInput);
let UniteEnseignementWhereInputStrict = class UniteEnseignementWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UniteEnseignementWhereInputStrict = UniteEnseignementWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UniteEnseignementWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UniteEnseignementWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], UniteEnseignementWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UniteEnseignementWhereInputStrict.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UniteEnseignementWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UniteEnseignementWhereInputStrict.prototype, "credit", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UniteEnseignementWhereInputStrict.prototype, "numero", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UniteEnseignementWhereInputStrict.prototype, "semestreId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.SemestreRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.SemestreRelationFilter)
], UniteEnseignementWhereInputStrict.prototype, "semestre", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.MatiereListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.MatiereListRelationFilter)
], UniteEnseignementWhereInputStrict.prototype, "matieres", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UniteEnseignementWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], UniteEnseignementWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UniteEnseignementWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], UniteEnseignementWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UniteEnseignementWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], UniteEnseignementWhereInputStrict.prototype, "NOT", void 0);
exports.UniteEnseignementWhereInputStrict = UniteEnseignementWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], UniteEnseignementWhereInputStrict);
let UniteEnseignementWhereInput = class UniteEnseignementWhereInput extends (0, graphql_1.PartialType)(UniteEnseignementWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UniteEnseignementWhereInput = UniteEnseignementWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UniteEnseignementWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UniteEnseignementWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], UniteEnseignementWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UniteEnseignementWhereInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], UniteEnseignementWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UniteEnseignementWhereInput.prototype, "credit", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UniteEnseignementWhereInput.prototype, "numero", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], UniteEnseignementWhereInput.prototype, "semestreId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.SemestreRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.SemestreRelationFilter)
], UniteEnseignementWhereInput.prototype, "semestre", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.MatiereListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.MatiereListRelationFilter)
], UniteEnseignementWhereInput.prototype, "matieres", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UniteEnseignementWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], UniteEnseignementWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UniteEnseignementWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], UniteEnseignementWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UniteEnseignementWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], UniteEnseignementWhereInput.prototype, "NOT", void 0);
exports.UniteEnseignementWhereInput = UniteEnseignementWhereInput = __decorate([
    (0, graphql_1.InputType)()
], UniteEnseignementWhereInput);
let UniteEnseignementListRelationFilter = class UniteEnseignementListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { every: { nullable: true, type: () => require("./where.args").UniteEnseignementWhereInput }, some: { nullable: true, type: () => require("./where.args").UniteEnseignementWhereInput }, none: { nullable: true, type: () => require("./where.args").UniteEnseignementWhereInput } };
    }
};
exports.UniteEnseignementListRelationFilter = UniteEnseignementListRelationFilter;
exports.UniteEnseignementListRelationFilter = UniteEnseignementListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], UniteEnseignementListRelationFilter);
let UniteEnseignementRelationFilter = class UniteEnseignementRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is: { nullable: true, type: () => require("./where.args").UniteEnseignementWhereInput }, isNot: { nullable: true, type: () => require("./where.args").UniteEnseignementWhereInput } };
    }
};
exports.UniteEnseignementRelationFilter = UniteEnseignementRelationFilter;
exports.UniteEnseignementRelationFilter = UniteEnseignementRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], UniteEnseignementRelationFilter);
//# sourceMappingURL=where.args.js.map