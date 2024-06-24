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
exports.AnneeScolaireRelationFilter = exports.AnneeScolaireListRelationFilter = exports.AnneeScolaireWhereInput = exports.AnneeScolaireWhereInputStrict = exports.AnneeScolaireWhereUniqueInput = void 0;
const eager_import_0 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../classes/dtos/where.args");
let AnneeScolaireWhereUniqueInput = class AnneeScolaireWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => Number } };
    }
};
exports.AnneeScolaireWhereUniqueInput = AnneeScolaireWhereUniqueInput;
exports.AnneeScolaireWhereUniqueInput = AnneeScolaireWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], AnneeScolaireWhereUniqueInput);
let AnneeScolaireWhereInputStrict = class AnneeScolaireWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AnneeScolaireWhereInputStrict = AnneeScolaireWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], AnneeScolaireWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], AnneeScolaireWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], AnneeScolaireWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], AnneeScolaireWhereInputStrict.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], AnneeScolaireWhereInputStrict.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AnneeScolaireWhereInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseListRelationFilter)
], AnneeScolaireWhereInputStrict.prototype, "classes", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AnneeScolaireWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], AnneeScolaireWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AnneeScolaireWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], AnneeScolaireWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AnneeScolaireWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], AnneeScolaireWhereInputStrict.prototype, "NOT", void 0);
exports.AnneeScolaireWhereInputStrict = AnneeScolaireWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], AnneeScolaireWhereInputStrict);
let AnneeScolaireWhereInput = class AnneeScolaireWhereInput extends (0, graphql_1.PartialType)(AnneeScolaireWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.AnneeScolaireWhereInput = AnneeScolaireWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], AnneeScolaireWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], AnneeScolaireWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], AnneeScolaireWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], AnneeScolaireWhereInput.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], AnneeScolaireWhereInput.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], AnneeScolaireWhereInput.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.ClasseListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.ClasseListRelationFilter)
], AnneeScolaireWhereInput.prototype, "classes", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AnneeScolaireWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], AnneeScolaireWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AnneeScolaireWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], AnneeScolaireWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AnneeScolaireWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], AnneeScolaireWhereInput.prototype, "NOT", void 0);
exports.AnneeScolaireWhereInput = AnneeScolaireWhereInput = __decorate([
    (0, graphql_1.InputType)()
], AnneeScolaireWhereInput);
let AnneeScolaireListRelationFilter = class AnneeScolaireListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { every: { nullable: true, type: () => require("./where.args").AnneeScolaireWhereInput }, some: { nullable: true, type: () => require("./where.args").AnneeScolaireWhereInput }, none: { nullable: true, type: () => require("./where.args").AnneeScolaireWhereInput } };
    }
};
exports.AnneeScolaireListRelationFilter = AnneeScolaireListRelationFilter;
exports.AnneeScolaireListRelationFilter = AnneeScolaireListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], AnneeScolaireListRelationFilter);
let AnneeScolaireRelationFilter = class AnneeScolaireRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is: { nullable: true, type: () => require("./where.args").AnneeScolaireWhereInput }, isNot: { nullable: true, type: () => require("./where.args").AnneeScolaireWhereInput } };
    }
};
exports.AnneeScolaireRelationFilter = AnneeScolaireRelationFilter;
exports.AnneeScolaireRelationFilter = AnneeScolaireRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], AnneeScolaireRelationFilter);
//# sourceMappingURL=where.args.js.map