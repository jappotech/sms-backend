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
exports.ProfesseurRelationFilter = exports.ProfesseurListRelationFilter = exports.ProfesseurWhereInput = exports.ProfesseurWhereInputStrict = exports.ProfesseurWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../cours/dtos/where.args");
const where_args_2 = require("../../emploi-du-temps/dtos/where.args");
const where_args_3 = require("../../utilisateurs/dtos/where.args");
let ProfesseurWhereUniqueInput = class ProfesseurWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProfesseurWhereUniqueInput = ProfesseurWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], ProfesseurWhereUniqueInput.prototype, "id", void 0);
exports.ProfesseurWhereUniqueInput = ProfesseurWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], ProfesseurWhereUniqueInput);
let ProfesseurWhereInputStrict = class ProfesseurWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProfesseurWhereInputStrict = ProfesseurWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ProfesseurWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ProfesseurWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ProfesseurWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ProfesseurWhereInputStrict.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.UtilisateurRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.UtilisateurRelationFilter)
], ProfesseurWhereInputStrict.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.CoursListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.CoursListRelationFilter)
], ProfesseurWhereInputStrict.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.EmploiDuTempsListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.EmploiDuTempsListRelationFilter)
], ProfesseurWhereInputStrict.prototype, "EmploiDuTemps", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfesseurWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ProfesseurWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfesseurWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ProfesseurWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfesseurWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ProfesseurWhereInputStrict.prototype, "NOT", void 0);
exports.ProfesseurWhereInputStrict = ProfesseurWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ProfesseurWhereInputStrict);
let ProfesseurWhereInput = class ProfesseurWhereInput extends (0, graphql_1.PartialType)(ProfesseurWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProfesseurWhereInput = ProfesseurWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ProfesseurWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ProfesseurWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ProfesseurWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ProfesseurWhereInput.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.UtilisateurRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.UtilisateurRelationFilter)
], ProfesseurWhereInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.CoursListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.CoursListRelationFilter)
], ProfesseurWhereInput.prototype, "cours", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.EmploiDuTempsListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.EmploiDuTempsListRelationFilter)
], ProfesseurWhereInput.prototype, "EmploiDuTemps", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfesseurWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ProfesseurWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfesseurWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ProfesseurWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProfesseurWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ProfesseurWhereInput.prototype, "NOT", void 0);
exports.ProfesseurWhereInput = ProfesseurWhereInput = __decorate([
    (0, graphql_1.InputType)()
], ProfesseurWhereInput);
let ProfesseurListRelationFilter = class ProfesseurListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProfesseurListRelationFilter = ProfesseurListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => ProfesseurWhereInput, { nullable: true }),
    __metadata("design:type", ProfesseurWhereInput)
], ProfesseurListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProfesseurWhereInput, { nullable: true }),
    __metadata("design:type", ProfesseurWhereInput)
], ProfesseurListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProfesseurWhereInput, { nullable: true }),
    __metadata("design:type", ProfesseurWhereInput)
], ProfesseurListRelationFilter.prototype, "none", void 0);
exports.ProfesseurListRelationFilter = ProfesseurListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ProfesseurListRelationFilter);
let ProfesseurRelationFilter = class ProfesseurRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProfesseurRelationFilter = ProfesseurRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => ProfesseurWhereInput, { nullable: true }),
    __metadata("design:type", ProfesseurWhereInput)
], ProfesseurRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => ProfesseurWhereInput, { nullable: true }),
    __metadata("design:type", ProfesseurWhereInput)
], ProfesseurRelationFilter.prototype, "isNot", void 0);
exports.ProfesseurRelationFilter = ProfesseurRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ProfesseurRelationFilter);
//# sourceMappingURL=where.args.js.map