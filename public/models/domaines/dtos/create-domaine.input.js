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
exports.CreateDomaineInputWithId = exports.CreateDomaineInput = exports.CreateDomaineWithMentionsInput = void 0;
const eager_import_0 = require("../../mentions/dtos/create-mention.input");
const graphql_1 = require("@nestjs/graphql");
const domaine_entity_1 = require("../entity/domaine.entity");
let CreateDomaineWithMentionsInput = class CreateDomaineWithMentionsInput extends domaine_entity_1.Domaine {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateDomaineWithMentionsInput = CreateDomaineWithMentionsInput;
__decorate([
    (0, graphql_1.Field)(() => [require("../../mentions/dtos/create-mention.input").CreateMentionInput], { nullable: true }),
    __metadata("design:type", Array)
], CreateDomaineWithMentionsInput.prototype, "mentions", void 0);
exports.CreateDomaineWithMentionsInput = CreateDomaineWithMentionsInput = __decorate([
    (0, graphql_1.InputType)()
], CreateDomaineWithMentionsInput);
let CreateDomaineInput = class CreateDomaineInput extends (0, graphql_1.PickType)(CreateDomaineWithMentionsInput, ['nom', 'mentions'], graphql_1.InputType) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateDomaineInput = CreateDomaineInput;
exports.CreateDomaineInput = CreateDomaineInput = __decorate([
    (0, graphql_1.InputType)()
], CreateDomaineInput);
let CreateDomaineInputWithId = class CreateDomaineInputWithId extends (0, graphql_1.PickType)(CreateDomaineWithMentionsInput, ['nom', 'id'], graphql_1.InputType) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateDomaineInputWithId = CreateDomaineInputWithId;
exports.CreateDomaineInputWithId = CreateDomaineInputWithId = __decorate([
    (0, graphql_1.InputType)()
], CreateDomaineInputWithId);
//# sourceMappingURL=create-domaine.input.js.map