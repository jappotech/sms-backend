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
exports.InscriptionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const crypto_1 = require("crypto");
let InscriptionsService = class InscriptionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createInscriptionInput) {
        createInscriptionInput.reference =
            `${createInscriptionInput.etudiantId}-${(0, crypto_1.randomUUID)().split('-')[0]}`.toUpperCase();
        return this.prisma.inscription.create({
            data: createInscriptionInput,
        });
    }
    findAll(args) {
        return this.prisma.inscription.findMany(args);
    }
    findAllByEtablissement(args, id) {
        return this.prisma.inscription.findMany({
            ...args,
            where: {
                ...args.where,
                classe: {
                    is: {
                        etablissementId: {
                            equals: id,
                        },
                    },
                },
            },
        });
    }
    findOne(args) {
        return this.prisma.inscription.findUnique(args);
    }
    update(updateInscriptionInput) {
        const { id, ...data } = updateInscriptionInput;
        return this.prisma.inscription.update({
            where: { id },
            data: data,
        });
    }
    remove(args) {
        return this.prisma.inscription.delete(args);
    }
};
exports.InscriptionsService = InscriptionsService;
exports.InscriptionsService = InscriptionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InscriptionsService);
//# sourceMappingURL=inscriptions.service.js.map