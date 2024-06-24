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
exports.InscriptionOrderByRelationAggregateInput = exports.InscriptionOrderByWithRelationInput = exports.InscriptionOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../classes/dtos/order-by.args");
const order_by_args_2 = require("../../diplomes/dtos/order-by.args");
const order_by_args_3 = require("../../etudiants/dtos/order-by.args");
let InscriptionOrderByWithRelationInputStrict = class InscriptionOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.InscriptionOrderByWithRelationInputStrict = InscriptionOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], InscriptionOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], InscriptionOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], InscriptionOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], InscriptionOrderByWithRelationInputStrict.prototype, "reference", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], InscriptionOrderByWithRelationInputStrict.prototype, "premiereInscription", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], InscriptionOrderByWithRelationInputStrict.prototype, "dernierDiplome", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], InscriptionOrderByWithRelationInputStrict.prototype, "autreEtablissement", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], InscriptionOrderByWithRelationInputStrict.prototype, "activiteProfessionnel", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], InscriptionOrderByWithRelationInputStrict.prototype, "niveau", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], InscriptionOrderByWithRelationInputStrict.prototype, "statut", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], InscriptionOrderByWithRelationInputStrict.prototype, "diplomeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], InscriptionOrderByWithRelationInputStrict.prototype, "etudiantId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], InscriptionOrderByWithRelationInputStrict.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.DiplomeOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.DiplomeOrderByWithRelationInput)
], InscriptionOrderByWithRelationInputStrict.prototype, "diplome", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_3.EtudiantOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_3.EtudiantOrderByWithRelationInput)
], InscriptionOrderByWithRelationInputStrict.prototype, "etudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.ClasseOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.ClasseOrderByWithRelationInput)
], InscriptionOrderByWithRelationInputStrict.prototype, "classe", void 0);
exports.InscriptionOrderByWithRelationInputStrict = InscriptionOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], InscriptionOrderByWithRelationInputStrict);
let InscriptionOrderByWithRelationInput = class InscriptionOrderByWithRelationInput extends (0, graphql_1.PartialType)(InscriptionOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.InscriptionOrderByWithRelationInput = InscriptionOrderByWithRelationInput;
exports.InscriptionOrderByWithRelationInput = InscriptionOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], InscriptionOrderByWithRelationInput);
let InscriptionOrderByRelationAggregateInput = class InscriptionOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.InscriptionOrderByRelationAggregateInput = InscriptionOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], InscriptionOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.InscriptionOrderByRelationAggregateInput = InscriptionOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], InscriptionOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map