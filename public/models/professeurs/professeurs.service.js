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
exports.ProfesseursService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const utilisateurs_service_1 = require("../utilisateurs/utilisateurs.service");
let ProfesseursService = class ProfesseursService {
    constructor(prisma, utilisateurService) {
        this.prisma = prisma;
        this.utilisateurService = utilisateurService;
    }
    async create(createProfesseurInput) {
        const utilisateur = await this.utilisateurService.create(createProfesseurInput.profile);
        return this.prisma.professeur.create({
            data: { profileId: utilisateur.id },
        });
    }
    findAll(args) {
        return this.prisma.professeur.findMany(args);
    }
    findAllByEtablissement(args, id) {
        return this.prisma.professeur.findMany({
            ...args,
            where: {
                ...args.where,
                profile: {
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
        return this.prisma.professeur.findUnique(args);
    }
    update(updateProfesseurInput) {
        const { id, profile, ...data } = updateProfesseurInput;
        return this.prisma.professeur.update({
            where: { id },
            data: data,
        });
    }
    remove(args) {
        return this.prisma.professeur.delete(args);
    }
};
exports.ProfesseursService = ProfesseursService;
exports.ProfesseursService = ProfesseursService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        utilisateurs_service_1.UtilisateursService])
], ProfesseursService);
//# sourceMappingURL=professeurs.service.js.map