"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoursInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const cours_entity_1 = require("../entity/cours.entity");
let CreateCoursInput = class CreateCoursInput extends (0, graphql_1.PickType)(cours_entity_1.Cours, [
    'classeId',
    'dateDebut',
    'dateFin',
    'description',
    'heureDebut',
    'heureFin',
    'matiereId',
    'nom',
    'professeurId',
    'salleId',
], graphql_1.InputType) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateCoursInput = CreateCoursInput;
exports.CreateCoursInput = CreateCoursInput = __decorate([
    (0, graphql_1.InputType)()
], CreateCoursInput);
//# sourceMappingURL=create-cours.input.js.map