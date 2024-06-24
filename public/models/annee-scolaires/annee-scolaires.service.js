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
exports.AnneeScolairesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let AnneeScolairesService = class AnneeScolairesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createAnneeScolaireInput) {
        return this.prisma.anneeScolaire.create({
            data: createAnneeScolaireInput,
        });
    }
    findAll(args) {
        return this.prisma.anneeScolaire.findMany(args);
    }
    async findAllByEtablissement(args, etablissementId) {
        const etablissement = await this.prisma.etablissement.findUnique({
            where: {
                id: etablissementId,
            },
        });
        const anneeEnCours = etablissement.anneeEnCours;
        return this.prisma.anneeScolaire.findMany({
            ...args,
            where: {
                ...args.where,
                nom: {
                    equals: anneeEnCours,
                },
            },
        });
    }
    findOne(args) {
        return this.prisma.anneeScolaire.findUnique(args);
    }
    update(updateAnneeScolaireInput) {
        const { id, ...data } = updateAnneeScolaireInput;
        return this.prisma.anneeScolaire.update({
            where: { id },
            data: data,
        });
    }
    remove(args) {
        return this.prisma.anneeScolaire.delete(args);
    }
};
exports.AnneeScolairesService = AnneeScolairesService;
exports.AnneeScolairesService = AnneeScolairesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnneeScolairesService);
//# sourceMappingURL=annee-scolaires.service.js.map