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
exports.CoursOrderByRelationAggregateInput = exports.CoursOrderByWithRelationInput = exports.CoursOrderByWithRelationInputStrict = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const order_by_args_1 = require("../../classes/dtos/order-by.args");
const order_by_args_2 = require("../../emploi-du-temps/dtos/order-by.args");
const order_by_args_3 = require("../../evaluation-etudiants/dtos/order-by.args");
const order_by_args_4 = require("../../feuille-presences/dtos/order-by.args");
const order_by_args_5 = require("../../matieres/dtos/order-by.args");
const order_by_args_6 = require("../../professeurs/dtos/order-by.args");
const order_by_args_7 = require("../../salles/dtos/order-by.args");
let CoursOrderByWithRelationInputStrict = class CoursOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CoursOrderByWithRelationInputStrict = CoursOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByWithRelationInputStrict.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByWithRelationInputStrict.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByWithRelationInputStrict.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CoursOrderByWithRelationInputStrict.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByWithRelationInputStrict.prototype, "dateDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByWithRelationInputStrict.prototype, "dateFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByWithRelationInputStrict.prototype, "heureDebut", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByWithRelationInputStrict.prototype, "heureFin", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByWithRelationInputStrict.prototype, "matiereId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByWithRelationInputStrict.prototype, "salleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByWithRelationInputStrict.prototype, "classeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CoursOrderByWithRelationInputStrict.prototype, "professeurId", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_5.MatiereOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_5.MatiereOrderByWithRelationInput)
], CoursOrderByWithRelationInputStrict.prototype, "matiere", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_7.SalleOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_7.SalleOrderByWithRelationInput)
], CoursOrderByWithRelationInputStrict.prototype, "salle", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_1.ClasseOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_1.ClasseOrderByWithRelationInput)
], CoursOrderByWithRelationInputStrict.prototype, "classe", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_3.EvaluationEtudiantsOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_3.EvaluationEtudiantsOrderByRelationAggregateInput)
], CoursOrderByWithRelationInputStrict.prototype, "evaluationEtudiant", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_4.FeuillePresenceOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_4.FeuillePresenceOrderByRelationAggregateInput)
], CoursOrderByWithRelationInputStrict.prototype, "feuillePresences", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_6.ProfesseurOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", order_by_args_6.ProfesseurOrderByWithRelationInput)
], CoursOrderByWithRelationInputStrict.prototype, "professeur", void 0);
__decorate([
    (0, graphql_1.Field)(() => order_by_args_2.EmploiDuTempsOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", order_by_args_2.EmploiDuTempsOrderByRelationAggregateInput)
], CoursOrderByWithRelationInputStrict.prototype, "emploiDuTemps", void 0);
exports.CoursOrderByWithRelationInputStrict = CoursOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], CoursOrderByWithRelationInputStrict);
let CoursOrderByWithRelationInput = class CoursOrderByWithRelationInput extends (0, graphql_1.PartialType)(CoursOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CoursOrderByWithRelationInput = CoursOrderByWithRelationInput;
exports.CoursOrderByWithRelationInput = CoursOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], CoursOrderByWithRelationInput);
let CoursOrderByRelationAggregateInput = class CoursOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CoursOrderByRelationAggregateInput = CoursOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], CoursOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.CoursOrderByRelationAggregateInput = CoursOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], CoursOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map