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
exports.EtudiantsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const utilisateurs_service_1 = require("../utilisateurs/utilisateurs.service");
const slugify_1 = require("slugify");
const lodash_1 = require("lodash");
let EtudiantsService = class EtudiantsService {
    constructor(prisma, utilisateurService) {
        this.prisma = prisma;
        this.utilisateurService = utilisateurService;
    }
    async create(createEtudiantInput) {
        const utilisateur = await this.utilisateurService.create(createEtudiantInput.profile);
        const { profile, classeId, ...studentData } = createEtudiantInput;
        const slug = (0, slugify_1.default)(`${profile.nom.toLowerCase()} ${utilisateur.accountId} ${profile.prenom.toLowerCase()}`);
        const etudiant = this.prisma.etudiant.create({
            data: {
                ...studentData,
                profileId: utilisateur.id,
                slug,
                ine: studentData.ine || slug,
            },
        });
        if (createEtudiantInput.classeId) {
            const etudiantId = (await etudiant).id;
            const inscription = await this.prisma.inscription.create({
                data: {
                    etudiantId: etudiantId,
                    classeId: createEtudiantInput.classeId,
                    diplomeId: 1,
                    reference: (0, lodash_1.uniqueId)('2024_'),
                    premiereInscription: true,
                    dernierDiplome: null,
                    autreEtablissement: null,
                    activiteProfessionnel: null,
                    niveau: null,
                    statut: null,
                },
            });
        }
        return etudiant;
    }
    findAll(args) {
        return this.prisma.etudiant.findMany(args);
    }
    findAllByEtablissement(args, id) {
        return this.prisma.etudiant.findMany({
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
        return this.prisma.etudiant.findUnique(args);
    }
    async update(updateEtudiantInput) {
        const { id, profile, ...data } = updateEtudiantInput;
        if (profile.id)
            await this.utilisateurService.update({ id: profile.id, ...profile });
        return this.prisma.etudiant.update({
            where: { id },
            data: { ...data, profileId: profile.id },
        });
    }
    remove(args) {
        return this.prisma.etudiant.delete(args);
    }
};
exports.EtudiantsService = EtudiantsService;
exports.EtudiantsService = EtudiantsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        utilisateurs_service_1.UtilisateursService])
], EtudiantsService);
//# sourceMappingURL=etudiants.service.js.map