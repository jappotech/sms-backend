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
exports.CreateProfesseurInput = exports.CreateProfesseurWithProfileInput = void 0;
const eager_import_0 = require("../../utilisateurs/dtos/create-utilisateur.input");
const graphql_1 = require("@nestjs/graphql");
const professeur_entity_1 = require("../entity/professeur.entity");
const create_utilisateur_input_1 = require("../../utilisateurs/dtos/create-utilisateur.input");
let CreateProfesseurWithProfileInput = class CreateProfesseurWithProfileInput extends professeur_entity_1.Professeur {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateProfesseurWithProfileInput = CreateProfesseurWithProfileInput;
__decorate([
    (0, graphql_1.Field)(() => require("../../utilisateurs/dtos/create-utilisateur.input").UtilisateurWithAccount, {}),
    __metadata("design:type", create_utilisateur_input_1.UtilisateurWithAccount)
], CreateProfesseurWithProfileInput.prototype, "profile", void 0);
exports.CreateProfesseurWithProfileInput = CreateProfesseurWithProfileInput = __decorate([
    (0, graphql_1.InputType)()
], CreateProfesseurWithProfileInput);
let CreateProfesseurInput = class CreateProfesseurInput extends (0, graphql_1.PickType)(CreateProfesseurWithProfileInput, ['profile'], graphql_1.InputType) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateProfesseurInput = CreateProfesseurInput;
exports.CreateProfesseurInput = CreateProfesseurInput = __decorate([
    (0, graphql_1.InputType)()
], CreateProfesseurInput);
//# sourceMappingURL=create-professeur.input.js.map