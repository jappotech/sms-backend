"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const account_entity_1 = require("../entity/account.entity");
let CreateAccountInput = class CreateAccountInput extends (0, graphql_1.PickType)(account_entity_1.Account, ['username', 'password', 'roles', 'userId'], graphql_1.InputType) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateAccountInput = CreateAccountInput;
exports.CreateAccountInput = CreateAccountInput = __decorate([
    (0, graphql_1.InputType)()
], CreateAccountInput);
//# sourceMappingURL=create-account.input.js.map