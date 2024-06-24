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
exports.CreateUtilisateurInput = exports.UtilisateurWithAccount = void 0;
const eager_import_0 = require("../../accounts/dtos/create-account.input");
const graphql_1 = require("@nestjs/graphql");
const create_account_input_1 = require("../../accounts/dtos/create-account.input");
const client_1 = require("@prisma/client");
let UtilisateurWithAccount = class UtilisateurWithAccount {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UtilisateurWithAccount = UtilisateurWithAccount;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], UtilisateurWithAccount.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurWithAccount.prototype, "matricule", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], UtilisateurWithAccount.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], UtilisateurWithAccount.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurWithAccount.prototype, "prenom", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurWithAccount.prototype, "nom", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], UtilisateurWithAccount.prototype, "dateNaissance", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurWithAccount.prototype, "lieuNaissance", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurWithAccount.prototype, "cni", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false, defaultValue: client_1.$Enums.Genre.Masculin }),
    __metadata("design:type", String)
], UtilisateurWithAccount.prototype, "genre", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurWithAccount.prototype, "nationalite", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurWithAccount.prototype, "groupeSanguin", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], UtilisateurWithAccount.prototype, "etablissementId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UtilisateurWithAccount.prototype, "statutCompte", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], UtilisateurWithAccount.prototype, "roles", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], UtilisateurWithAccount.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], UtilisateurWithAccount.prototype, "accountId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], UtilisateurWithAccount.prototype, "adresseId", void 0);
__decorate([
    (0, graphql_1.Field)(() => require("../../accounts/dtos/create-account.input").CreateAccountInput, { nullable: true }),
    __metadata("design:type", create_account_input_1.CreateAccountInput)
], UtilisateurWithAccount.prototype, "account", void 0);
exports.UtilisateurWithAccount = UtilisateurWithAccount = __decorate([
    (0, graphql_1.InputType)()
], UtilisateurWithAccount);
let CreateUtilisateurInput = class CreateUtilisateurInput extends (0, graphql_1.PickType)(UtilisateurWithAccount, [
    'adresseId',
    'nationalite',
    'nom',
    'prenom',
    'roles',
    'statutCompte',
    'cni',
    'account',
    'contactId',
    'dateNaissance',
    'etablissementId',
    'genre',
    'nom',
    'groupeSanguin',
    'lieuNaissance',
    'matricule',
], graphql_1.InputType) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateUtilisateurInput = CreateUtilisateurInput;
exports.CreateUtilisateurInput = CreateUtilisateurInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUtilisateurInput);
//# sourceMappingURL=create-utilisateur.input.js.map