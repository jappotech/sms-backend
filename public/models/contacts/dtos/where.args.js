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
exports.ContactRelationFilter = exports.ContactListRelationFilter = exports.ContactWhereInput = exports.ContactWhereInputStrict = exports.ContactWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_input_1 = require("../../../common/dtos/common.input");
const where_args_1 = require("../../etablissements/dtos/where.args");
const where_args_2 = require("../../reseau-socials/dtos/where.args");
const where_args_3 = require("../../utilisateurs/dtos/where.args");
let ContactWhereUniqueInput = class ContactWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ContactWhereUniqueInput = ContactWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], ContactWhereUniqueInput.prototype, "id", void 0);
exports.ContactWhereUniqueInput = ContactWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], ContactWhereUniqueInput);
let ContactWhereInputStrict = class ContactWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ContactWhereInputStrict = ContactWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ContactWhereInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ContactWhereInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ContactWhereInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ContactWhereInputStrict.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ContactWhereInputStrict.prototype, "fix", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ContactWhereInputStrict.prototype, "fax", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ContactWhereInputStrict.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ContactWhereInputStrict.prototype, "siteWeb", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.ReseauSocialListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.ReseauSocialListRelationFilter)
], ContactWhereInputStrict.prototype, "reseauxSociaux", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.UtilisateurListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.UtilisateurListRelationFilter)
], ContactWhereInputStrict.prototype, "utilisateurs", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtablissementListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.EtablissementListRelationFilter)
], ContactWhereInputStrict.prototype, "etablissements", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContactWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ContactWhereInputStrict.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContactWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ContactWhereInputStrict.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContactWhereInputStrict], { nullable: true }),
    __metadata("design:type", Array)
], ContactWhereInputStrict.prototype, "NOT", void 0);
exports.ContactWhereInputStrict = ContactWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ContactWhereInputStrict);
let ContactWhereInput = class ContactWhereInput extends (0, graphql_1.PartialType)(ContactWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ContactWhereInput = ContactWhereInput;
__decorate([
    (0, graphql_1.Field)(() => common_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", common_input_1.IntFilter)
], ContactWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ContactWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", common_input_1.DateTimeFilter)
], ContactWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ContactWhereInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ContactWhereInput.prototype, "fix", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ContactWhereInput.prototype, "fax", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ContactWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", common_input_1.StringFilter)
], ContactWhereInput.prototype, "siteWeb", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_2.ReseauSocialListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_2.ReseauSocialListRelationFilter)
], ContactWhereInput.prototype, "reseauxSociaux", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_3.UtilisateurListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_3.UtilisateurListRelationFilter)
], ContactWhereInput.prototype, "utilisateurs", void 0);
__decorate([
    (0, graphql_1.Field)(() => where_args_1.EtablissementListRelationFilter, { nullable: true }),
    __metadata("design:type", where_args_1.EtablissementListRelationFilter)
], ContactWhereInput.prototype, "etablissements", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContactWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ContactWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContactWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ContactWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContactWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ContactWhereInput.prototype, "NOT", void 0);
exports.ContactWhereInput = ContactWhereInput = __decorate([
    (0, graphql_1.InputType)()
], ContactWhereInput);
let ContactListRelationFilter = class ContactListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ContactListRelationFilter = ContactListRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => ContactWhereInput, { nullable: true }),
    __metadata("design:type", ContactWhereInput)
], ContactListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => ContactWhereInput, { nullable: true }),
    __metadata("design:type", ContactWhereInput)
], ContactListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => ContactWhereInput, { nullable: true }),
    __metadata("design:type", ContactWhereInput)
], ContactListRelationFilter.prototype, "none", void 0);
exports.ContactListRelationFilter = ContactListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ContactListRelationFilter);
let ContactRelationFilter = class ContactRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ContactRelationFilter = ContactRelationFilter;
__decorate([
    (0, graphql_1.Field)(() => ContactWhereInput, { nullable: true }),
    __metadata("design:type", ContactWhereInput)
], ContactRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => ContactWhereInput, { nullable: true }),
    __metadata("design:type", ContactWhereInput)
], ContactRelationFilter.prototype, "isNot", void 0);
exports.ContactRelationFilter = ContactRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ContactRelationFilter);
//# sourceMappingURL=where.args.js.map