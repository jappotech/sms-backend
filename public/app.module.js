"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./common/prisma/prisma.module");
const utilisateurs_module_1 = require("./models/utilisateurs/utilisateurs.module");
const adresses_module_1 = require("./models/adresses/adresses.module");
const classes_module_1 = require("./models/classes/classes.module");
const contacts_module_1 = require("./models/contacts/contacts.module");
const cours_module_1 = require("./models/cours/cours.module");
const diplomes_module_1 = require("./models/diplomes/diplomes.module");
const domaines_module_1 = require("./models/domaines/domaines.module");
const emploi_du_temps_module_1 = require("./models/emploi-du-temps/emploi-du-temps.module");
const etablissements_module_1 = require("./models/etablissements/etablissements.module");
const etudiants_module_1 = require("./models/etudiants/etudiants.module");
const evaluation_etudiants_module_1 = require("./models/evaluation-etudiants/evaluation-etudiants.module");
const feuille_presences_module_1 = require("./models/feuille-presences/feuille-presences.module");
const inscriptions_module_1 = require("./models/inscriptions/inscriptions.module");
const matieres_module_1 = require("./models/matieres/matieres.module");
const mentions_module_1 = require("./models/mentions/mentions.module");
const note_etudiants_module_1 = require("./models/note-etudiants/note-etudiants.module");
const paiements_module_1 = require("./models/paiements/paiements.module");
const permissions_module_1 = require("./models/permissions/permissions.module");
const professeurs_module_1 = require("./models/professeurs/professeurs.module");
const reseau_socials_module_1 = require("./models/reseau-socials/reseau-socials.module");
const salles_module_1 = require("./models/salles/salles.module");
const semestres_module_1 = require("./models/semestres/semestres.module");
const specialites_module_1 = require("./models/specialites/specialites.module");
const unite_enseignements_module_1 = require("./models/unite-enseignements/unite-enseignements.module");
const jwt_1 = require("@nestjs/jwt");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const auth_module_1 = require("./auth/auth.module");
const accounts_module_1 = require("./models/accounts/accounts.module");
const annee_scolaires_module_1 = require("./models/annee-scolaires/annee-scolaires.module");
const bulletin_notes_module_1 = require("./models/bulletin-notes/bulletin-notes.module");
const graphql_upload_ts_1 = require("graphql-upload-ts");
const file_upload_resolver_1 = require("./common/utils/file-upload.resolver");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply((0, graphql_upload_ts_1.graphqlUploadExpress)({ maxFileSize: 10000000, maxFiles: 1 }))
            .forRoutes('graphql');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                fieldResolverEnhancers: ['guards'],
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                introspection: true,
                playground: false,
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
            }),
            prisma_module_1.PrismaModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: 'jwtConstants.secret',
                signOptions: { expiresIn: '45d' },
            }),
            accounts_module_1.AccountsModule,
            adresses_module_1.AdressesModule,
            annee_scolaires_module_1.AnneeScolairesModule,
            bulletin_notes_module_1.BulletinNotesModule,
            classes_module_1.ClassesModule,
            contacts_module_1.ContactsModule,
            cours_module_1.CoursModule,
            diplomes_module_1.DiplomesModule,
            domaines_module_1.DomainesModule,
            emploi_du_temps_module_1.EmploiDuTempsModule,
            etablissements_module_1.EtablissementsModule,
            etudiants_module_1.EtudiantsModule,
            evaluation_etudiants_module_1.EvaluationEtudiantsModule,
            feuille_presences_module_1.FeuillePresencesModule,
            inscriptions_module_1.InscriptionsModule,
            matieres_module_1.MatieresModule,
            mentions_module_1.MentionsModule,
            note_etudiants_module_1.NoteEtudiantsModule,
            paiements_module_1.PaiementsModule,
            permissions_module_1.PermissionsModule,
            professeurs_module_1.ProfesseursModule,
            reseau_socials_module_1.ReseauSocialsModule,
            salles_module_1.SallesModule,
            semestres_module_1.SemestresModule,
            specialites_module_1.SpecialitesModule,
            unite_enseignements_module_1.UniteEnseignementsModule,
            utilisateurs_module_1.UtilisateursModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, file_upload_resolver_1.FileUploadResolver],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map