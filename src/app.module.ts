import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './common/prisma/prisma.module';
import { UtilisateursModule } from './models/utilisateurs/utilisateurs.module';
import { AdressesModule } from './models/adresses/adresses.module';
import { ClassesModule } from './models/classes/classes.module';
import { ContactsModule } from './models/contacts/contacts.module';
import { CoursModule } from './models/cours/cours.module';
import { DiplomesModule } from './models/diplomes/diplomes.module';
import { DomainesModule } from './models/domaines/domaines.module';
import { EmploiDuTempsModule } from './models/emploi-du-temps/emploi-du-temps.module';
import { EtablissementsModule } from './models/etablissements/etablissements.module';
import { EtudiantsModule } from './models/etudiants/etudiants.module';
import { EvaluationEtudiantsModule } from './models/evaluation-etudiants/evaluation-etudiants.module';
import { FeuillePresencesModule } from './models/feuille-presences/feuille-presences.module';
import { InscriptionsModule } from './models/inscriptions/inscriptions.module';
import { MatieresModule } from './models/matieres/matieres.module';
import { MentionsModule } from './models/mentions/mentions.module';
import { NoteEtudiantsModule } from './models/note-etudiants/note-etudiants.module';
import { PaiementsModule } from './models/paiements/paiements.module';
import { PermissionsModule } from './models/permissions/permissions.module';
import { ProfesseursModule } from './models/professeurs/professeurs.module';
import { ReseauSocialsModule } from './models/reseau-socials/reseau-socials.module';
import { SallesModule } from './models/salles/salles.module';
import { SemestresModule } from './models/semestres/semestres.module';
import { SpecialitesModule } from './models/specialites/specialites.module';
import { UniteEnseignementsModule } from './models/unite-enseignements/unite-enseignements.module';
import { JwtModule } from '@nestjs/jwt';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './models/accounts/accounts.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),

    PrismaModule,
    JwtModule.register({
      global: true,
      secret: 'jwtConstants.secret',
      signOptions: { expiresIn: '3600s' },
    }),

    AccountsModule,
    AdressesModule,
    ClassesModule,
    ContactsModule,
    CoursModule,
    DiplomesModule,
    DomainesModule,
    EmploiDuTempsModule,
    EtablissementsModule,
    EtudiantsModule,
    EvaluationEtudiantsModule,
    FeuillePresencesModule,
    InscriptionsModule,
    MatieresModule,
    MentionsModule,
    NoteEtudiantsModule,
    PaiementsModule,
    PermissionsModule,
    ProfesseursModule,
    ReseauSocialsModule,
    SallesModule,
    SemestresModule,
    SpecialitesModule,
    UniteEnseignementsModule,
    UtilisateursModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
