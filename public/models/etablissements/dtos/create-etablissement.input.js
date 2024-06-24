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
exports.CreateEtablissementInput = exports.etablissementWithDomaines = void 0;
const eager_import_0 = require("../../domaines/dtos/create-domaine.input");
const graphql_1 = require("@nestjs/graphql");
const etablissement_entity_1 = require("../entity/etablissement.entity");
let etablissementWithDomaines = class etablissementWithDomaines extends etablissement_entity_1.Etablissement {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.etablissementWithDomaines = etablissementWithDomaines;
__decorate([
    (0, graphql_1.Field)(() => [require("../../domaines/dtos/create-domaine.input").CreateDomaineInputWithId], { nullable: true }),
    __metadata("design:type", Array)
], etablissementWithDomaines.prototype, "domaines", void 0);
exports.etablissementWithDomaines = etablissementWithDomaines = __decorate([
    (0, graphql_1.InputType)()
], etablissementWithDomaines);
let CreateEtablissementInput = class CreateEtablissementInput extends (0, graphql_1.PickType)(etablissementWithDomaines, [
    'adresseId',
    'contactId',
    'dateCreation',
    'logo',
    'matricule',
    'nom',
    'sigle',
    'domaines',
    'anneeEnCours',
], graphql_1.InputType) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateEtablissementInput = CreateEtablissementInput;
exports.CreateEtablissementInput = CreateEtablissementInput = __decorate([
    (0, graphql_1.InputType)()
], CreateEtablissementInput);
//# sourceMappingURL=create-etablissement.input.js.map