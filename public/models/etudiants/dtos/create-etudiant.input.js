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
exports.CreateEtudiantInput = exports.CreateEtudiantWithProfileInput = void 0;
const eager_import_0 = require("../../utilisateurs/dtos/create-utilisateur.input");
const graphql_1 = require("@nestjs/graphql");
const etudiant_entity_1 = require("../entity/etudiant.entity");
const create_utilisateur_input_1 = require("../../utilisateurs/dtos/create-utilisateur.input");
let CreateEtudiantWithProfileInput = class CreateEtudiantWithProfileInput extends etudiant_entity_1.Etudiant {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateEtudiantWithProfileInput = CreateEtudiantWithProfileInput;
__decorate([
    (0, graphql_1.Field)(() => require("../../utilisateurs/dtos/create-utilisateur.input").UtilisateurWithAccount, {}),
    __metadata("design:type", create_utilisateur_input_1.UtilisateurWithAccount)
], CreateEtudiantWithProfileInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], CreateEtudiantWithProfileInput.prototype, "classeId", void 0);
exports.CreateEtudiantWithProfileInput = CreateEtudiantWithProfileInput = __decorate([
    (0, graphql_1.InputType)()
], CreateEtudiantWithProfileInput);
let CreateEtudiantInput = class CreateEtudiantInput extends (0, graphql_1.PickType)(CreateEtudiantWithProfileInput, [
    'anneeBaccaleaureat',
    'baccaleaureat',
    'feuillePresencesId',
    'ine',
    'profile',
    'classeId'
], graphql_1.InputType) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateEtudiantInput = CreateEtudiantInput;
exports.CreateEtudiantInput = CreateEtudiantInput = __decorate([
    (0, graphql_1.InputType)()
], CreateEtudiantInput);
//# sourceMappingURL=create-etudiant.input.js.map