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
exports.EtudiantOrderByRelationAggregateInput = exports.EtudiantOrderByWithRelationInput = exports.EtudiantOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../feuille-presences/dtos/order-by.args");
const order_by_args_2 = require("../../inscriptions/dtos/order-by.args");
const order_by_args_3 = require("../../note-etudiants/dtos/order-by.args");
const order_by_args_4 = require("../../paiements/dtos/order-by.args");
const order_by_args_5 = require("../../utilisateurs/dtos/order-by.args");
let EtudiantOrderByWithRelationInputStrict = class EtudiantOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtudiantOrderByWithRelationInputStrict = EtudiantOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EtudiantOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EtudiantOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EtudiantOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EtudiantOrderByWithRelationInputStrict.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EtudiantOrderByWithRelationInputStrict.prototype, "ine", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EtudiantOrderByWithRelationInputStrict.prototype, "baccaleaureat", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EtudiantOrderByWithRelationInputStrict.prototype, "anneeBaccaleaureat", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EtudiantOrderByWithRelationInputStrict.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EtudiantOrderByWithRelationInputStrict.prototype, "feuillePresencesId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_5.UtilisateurOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_5.UtilisateurOrderByWithRelationInput)
], EtudiantOrderByWithRelationInputStrict.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.InscriptionOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.InscriptionOrderByRelationAggregateInput)
], EtudiantOrderByWithRelationInputStrict.prototype, "inscriptions", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_3.NoteEtudiantOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_3.NoteEtudiantOrderByRelationAggregateInput)
], EtudiantOrderByWithRelationInputStrict.prototype, "notes", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.FeuillePresenceOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.FeuillePresenceOrderByRelationAggregateInput)
], EtudiantOrderByWithRelationInputStrict.prototype, "feuillePresences", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_4.PaiementOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_4.PaiementOrderByRelationAggregateInput)
], EtudiantOrderByWithRelationInputStrict.prototype, "Paiement", void 0);
exports.EtudiantOrderByWithRelationInputStrict = EtudiantOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], EtudiantOrderByWithRelationInputStrict);
let EtudiantOrderByWithRelationInput = class EtudiantOrderByWithRelationInput extends (0, graphql_1.PartialType)(EtudiantOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtudiantOrderByWithRelationInput = EtudiantOrderByWithRelationInput;
exports.EtudiantOrderByWithRelationInput = EtudiantOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], EtudiantOrderByWithRelationInput);
let EtudiantOrderByRelationAggregateInput = class EtudiantOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.EtudiantOrderByRelationAggregateInput = EtudiantOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], EtudiantOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.EtudiantOrderByRelationAggregateInput = EtudiantOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], EtudiantOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map