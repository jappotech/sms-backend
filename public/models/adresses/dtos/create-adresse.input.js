"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdresseInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const adresse_entity_1 = require("../entity/adresse.entity");
let CreateAdresseInput = class CreateAdresseInput extends (0, graphql_1.PickType)(adresse_entity_1.Adresse, ['codePostal', 'ville', 'pays', 'region', 'geolocalisation'], graphql_1.InputType) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateAdresseInput = CreateAdresseInput;
exports.CreateAdresseInput = CreateAdresseInput = __decorate([
    (0, graphql_1.InputType)()
], CreateAdresseInput);
//# sourceMappingURL=create-adresse.input.js.map