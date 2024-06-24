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
exports.PaiementsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const lodash_1 = require("lodash");
const slugify_1 = require("slugify");
let PaiementsService = class PaiementsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createPaiementInput) {
        createPaiementInput.referencePaiement = (0, lodash_1.uniqueId)((0, slugify_1.default)(`${createPaiementInput.etudiantId} ${createPaiementInput.methodePaiement}`));
        return this.prisma.paiement.create({
            data: createPaiementInput,
        });
    }
    findAll(args) {
        return this.prisma.paiement.findMany(args);
    }
    findAllByEtablissement(args, etablissementId) {
        return this.prisma.paiement.findMany({
            ...args,
            where: {
                ...args.where,
                etudiant: {
                    is: {
                        profile: {
                            is: {
                                etablissementId: {
                                    equals: etablissementId,
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    findOne(args) {
        return this.prisma.paiement.findUnique(args);
    }
    update(updatePaiementInput) {
        const { id, ...data } = updatePaiementInput;
        return this.prisma.paiement.update({
            where: { id },
            data: data,
        });
    }
    remove(args) {
        return this.prisma.paiement.delete(args);
    }
};
exports.PaiementsService = PaiementsService;
exports.PaiementsService = PaiementsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaiementsService);
//# sourceMappingURL=paiements.service.js.map