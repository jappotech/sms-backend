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
exports.FeuillePresenceRelationFilter = exports.FeuillePresenceListRelationFilter = exports.FeuillePresenceWhereInput = exports.FeuillePresenceWhereInputStrict = exports.FeuillePresenceWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../cours/dtos/where.args");
const where_args_2 = require("../../etudiants/dtos/where.args");
let FeuillePresenceWhereUniqueInput = class FeuillePresenceWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FeuillePresenceWhereUniqueInput = FeuillePresenceWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], FeuillePresenceWhereUniqueInput.prototype, "id", void 0);
exports.FeuillePresenceWhereUniqueInput = FeuillePresenceWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], FeuillePresenceWhereUniqueInput);
let FeuillePresenceWhereInputStrict = class FeuillePresenceWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FeuillePresenceWhereInputStrict = FeuillePresenceWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], FeuillePresenceWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], FeuillePresenceWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], FeuillePresenceWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], FeuillePresenceWhereInputStrict.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], FeuillePresenceWhereInputStrict.prototype, "heureDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], FeuillePresenceWhereInputStrict.prototype, "heureFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], FeuillePresenceWhereInputStrict.prototype, "coursId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], FeuillePresenceWhereInputStrict.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.CoursRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.CoursRelationFilter)
], FeuillePresenceWhereInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.EtudiantRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.EtudiantRelationFilter)
], FeuillePresenceWhereInputStrict.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FeuillePresenceWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], FeuillePresenceWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FeuillePresenceWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], FeuillePresenceWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FeuillePresenceWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], FeuillePresenceWhereInputStrict.prototype, "NOT", void 0);
exports.FeuillePresenceWhereInputStrict = FeuillePresenceWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], FeuillePresenceWhereInputStrict);
let FeuillePresenceWhereInput = class FeuillePresenceWhereInput extends (0, graphql_1.PartialType)(FeuillePresenceWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FeuillePresenceWhereInput = FeuillePresenceWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], FeuillePresenceWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], FeuillePresenceWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], FeuillePresenceWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], FeuillePresenceWhereInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], FeuillePresenceWhereInput.prototype, "heureDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], FeuillePresenceWhereInput.prototype, "heureFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], FeuillePresenceWhereInput.prototype, "coursId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], FeuillePresenceWhereInput.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.CoursRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.CoursRelationFilter)
], FeuillePresenceWhereInput.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.EtudiantRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.EtudiantRelationFilter)
], FeuillePresenceWhereInput.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FeuillePresenceWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], FeuillePresenceWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FeuillePresenceWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], FeuillePresenceWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FeuillePresenceWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], FeuillePresenceWhereInput.prototype, "NOT", void 0);
exports.FeuillePresenceWhereInput = FeuillePresenceWhereInput = __decorate([
    (0, graphql_1.InputType)()
], FeuillePresenceWhereInput);
let FeuillePresenceListRelationFilter = class FeuillePresenceListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FeuillePresenceListRelationFilter = FeuillePresenceListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => FeuillePresenceWhereInput, { nullable: true }),
    __metadata("design:type", FeuillePresenceWhereInput)
], FeuillePresenceListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => FeuillePresenceWhereInput, { nullable: true }),
    __metadata("design:type", FeuillePresenceWhereInput)
], FeuillePresenceListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => FeuillePresenceWhereInput, { nullable: true }),
    __metadata("design:type", FeuillePresenceWhereInput)
], FeuillePresenceListRelationFilter.prototype, "none", void 0);
exports.FeuillePresenceListRelationFilter = FeuillePresenceListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], FeuillePresenceListRelationFilter);
let FeuillePresenceRelationFilter = class FeuillePresenceRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FeuillePresenceRelationFilter = FeuillePresenceRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => FeuillePresenceWhereInput, { nullable: true }),
    __metadata("design:type", FeuillePresenceWhereInput)
], FeuillePresenceRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => FeuillePresenceWhereInput, { nullable: true }),
    __metadata("design:type", FeuillePresenceWhereInput)
], FeuillePresenceRelationFilter.prototype, "isNot", void 0);
exports.FeuillePresenceRelationFilter = FeuillePresenceRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], FeuillePresenceRelationFilter);
//# sourceMappingURL=where.args.js.map