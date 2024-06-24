"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmploiDuTempsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const emploi_du_temps_entity_1 = require("../entity/emploi-du-temps.entity");
let CreateEmploiDuTempsInput = class CreateEmploiDuTempsInput extends (0, graphql_1.PickType)(emploi_du_temps_entity_1.EmploiDuTemps, ['classeId', 'coursId', 'dateDebut', 'dateFin', 'professeurId', 'salleId'], graphql_1.InputType) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateEmploiDuTempsInput = CreateEmploiDuTempsInput;
exports.CreateEmploiDuTempsInput = CreateEmploiDuTempsInput = __decorate([
    (0, graphql_1.InputType)()
], CreateEmploiDuTempsInput);
//# sourceMappingURL=create-emploi-du-temps.input.js.map