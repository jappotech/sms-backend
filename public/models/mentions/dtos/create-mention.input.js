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
exports.CreateMentionInput = exports.CreateMentionWithSpecialitesInput = void 0;
const eager_import_0 = require("../../specialites/dtos/create-specialite.input");
const graphql_1 = require("@nestjs/graphql");
const mention_entity_1 = require("../entity/mention.entity");
let CreateMentionWithSpecialitesInput = class CreateMentionWithSpecialitesInput extends mention_entity_1.Mention {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateMentionWithSpecialitesInput = CreateMentionWithSpecialitesInput;
__decorate([
    (0, graphql_1.Field)(() => [require("../../specialites/dtos/create-specialite.input").CreateSpecialiteInput], { nullable: true }),
    __metadata("design:type", Array)
], CreateMentionWithSpecialitesInput.prototype, "specialites", void 0);
exports.CreateMentionWithSpecialitesInput = CreateMentionWithSpecialitesInput = __decorate([
    (0, graphql_1.InputType)()
], CreateMentionWithSpecialitesInput);
let CreateMentionInput = class CreateMentionInput extends (0, graphql_1.PickType)(CreateMentionWithSpecialitesInput, ['nom', 'domaineId', 'specialites'], graphql_1.InputType) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateMentionInput = CreateMentionInput;
exports.CreateMentionInput = CreateMentionInput = __decorate([
    (0, graphql_1.InputType)()
], CreateMentionInput);
//# sourceMappingURL=create-mention.input.js.map