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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const contacts_service_1 = require("./contacts.service");
const contact_entity_1 = require("./entity/contact.entity");
const find_args_1 = require("./dtos/find.args");
const create_contact_input_1 = require("./dtos/create-contact.input");
const update_contact_input_1 = require("./dtos/update-contact.input");
const auth_decorator_1 = require("../../common/auth/auth.decorator");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let ContactsResolver = class ContactsResolver {
    constructor(contactsService, prisma) {
        this.contactsService = contactsService;
        this.prisma = prisma;
    }
    createContact(args, user) {
        return this.contactsService.create(args);
    }
    findAll(args) {
        return this.contactsService.findAll(args);
    }
    findOne(args) {
        return this.contactsService.findOne(args);
    }
    async updateContact(args, user) {
        const contact = await this.prisma.contact.findUnique({
            where: { id: args.id },
        });
        return this.contactsService.update(args);
    }
    async removeContact(args, user) {
        const contact = await this.prisma.contact.findUnique(args);
        return this.contactsService.remove(args);
    }
};
exports.ContactsResolver = ContactsResolver;
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => contact_entity_1.Contact),
    __param(0, (0, graphql_1.Args)('createContactInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_input_1.CreateContactInput, Object]),
    __metadata("design:returntype", void 0)
], ContactsResolver.prototype, "createContact", null);
__decorate([
    (0, graphql_1.Query)(() => [contact_entity_1.Contact], { name: 'contacts' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyContactArgs]),
    __metadata("design:returntype", void 0)
], ContactsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => contact_entity_1.Contact, { name: 'contact' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueContactArgs]),
    __metadata("design:returntype", void 0)
], ContactsResolver.prototype, "findOne", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => contact_entity_1.Contact),
    __param(0, (0, graphql_1.Args)('updateContactInput')),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_contact_input_1.UpdateContactInput, Object]),
    __metadata("design:returntype", Promise)
], ContactsResolver.prototype, "updateContact", null);
__decorate([
    (0, auth_decorator_1.AllowAuthenticated)(),
    (0, graphql_1.Mutation)(() => contact_entity_1.Contact),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueContactArgs, Object]),
    __metadata("design:returntype", Promise)
], ContactsResolver.prototype, "removeContact", null);
exports.ContactsResolver = ContactsResolver = __decorate([
    (0, graphql_1.Resolver)(() => contact_entity_1.Contact),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService,
        prisma_service_1.PrismaService])
], ContactsResolver);
//# sourceMappingURL=contacts.resolver.js.map