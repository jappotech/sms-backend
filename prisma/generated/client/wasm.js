
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  username: 'username',
  password: 'password',
  roles: 'roles',
  isActive: 'isActive',
  userId: 'userId'
};

exports.Prisma.UtilisateurScalarFieldEnum = {
  id: 'id',
  matricule: 'matricule',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  prenom: 'prenom',
  nom: 'nom',
  dateNaissance: 'dateNaissance',
  lieuNaissance: 'lieuNaissance',
  cni: 'cni',
  genre: 'genre',
  nationalite: 'nationalite',
  groupeSanguin: 'groupeSanguin',
  etablissementId: 'etablissementId',
  statutCompte: 'statutCompte',
  roles: 'roles',
  contactId: 'contactId',
  adresseId: 'adresseId',
  accountId: 'accountId'
};

exports.Prisma.PermissionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  role: 'role',
  label: 'label',
  slug: 'slug'
};

exports.Prisma.AdresseScalarFieldEnum = {
  id: 'id',
  pays: 'pays',
  region: 'region',
  ville: 'ville',
  codePostal: 'codePostal',
  geolocalisation: 'geolocalisation'
};

exports.Prisma.ReseauSocialScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nom: 'nom',
  username: 'username',
  url: 'url',
  contactId: 'contactId'
};

exports.Prisma.ContactScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  telephone: 'telephone',
  fix: 'fix',
  fax: 'fax',
  email: 'email',
  siteWeb: 'siteWeb'
};

exports.Prisma.EtudiantScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  slug: 'slug',
  ine: 'ine',
  baccaleaureat: 'baccaleaureat',
  anneeBaccaleaureat: 'anneeBaccaleaureat',
  profileId: 'profileId',
  feuillePresencesId: 'feuillePresencesId'
};

exports.Prisma.ProfesseurScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  profileId: 'profileId'
};

exports.Prisma.InscriptionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  reference: 'reference',
  premiereInscription: 'premiereInscription',
  dernierDiplome: 'dernierDiplome',
  autreEtablissement: 'autreEtablissement',
  activiteProfessionnel: 'activiteProfessionnel',
  niveau: 'niveau',
  statut: 'statut',
  diplomeId: 'diplomeId',
  etudiantId: 'etudiantId',
  classeId: 'classeId'
};

exports.Prisma.DomaineScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nom: 'nom',
  slug: 'slug'
};

exports.Prisma.MentionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nom: 'nom',
  slug: 'slug',
  domaineId: 'domaineId'
};

exports.Prisma.SpecialiteScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nom: 'nom',
  slug: 'slug',
  mentionId: 'mentionId'
};

exports.Prisma.DiplomeScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nom: 'nom',
  finalite: 'finalite',
  entite: 'entite',
  habilitation: 'habilitation',
  partenaires: 'partenaires',
  dateCreation: 'dateCreation',
  dateHabilitation: 'dateHabilitation',
  dateEcheance: 'dateEcheance',
  duree: 'duree',
  specialiteId: 'specialiteId'
};

exports.Prisma.SemestreScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  numero: 'numero',
  grade: 'grade',
  dateDebut: 'dateDebut',
  dateFin: 'dateFin',
  nombreSemaine: 'nombreSemaine',
  classeId: 'classeId'
};

exports.Prisma.UniteEnseignementScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  code: 'code',
  nom: 'nom',
  numero: 'numero',
  credit: 'credit',
  semestreId: 'semestreId'
};

exports.Prisma.MatiereScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  code: 'code',
  nom: 'nom',
  credit: 'credit',
  coefficient: 'coefficient',
  nbHeure: 'nbHeure',
  uniteEnseignementId: 'uniteEnseignementId'
};

exports.Prisma.EtablissementScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nom: 'nom',
  matricule: 'matricule',
  sigle: 'sigle',
  dateCreation: 'dateCreation',
  logo: 'logo',
  anneeEnCours: 'anneeEnCours',
  adresseId: 'adresseId',
  contactId: 'contactId'
};

exports.Prisma.ClasseScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nom: 'nom',
  code: 'code',
  niveau: 'niveau',
  etablissementId: 'etablissementId',
  specialiteId: 'specialiteId',
  anneeScolaireId: 'anneeScolaireId'
};

exports.Prisma.AnneeScolaireScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  dateDebut: 'dateDebut',
  dateFin: 'dateFin',
  nom: 'nom'
};

exports.Prisma.EvaluationEtudiantsScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  typeEvaluation: 'typeEvaluation',
  dateEvaluation: 'dateEvaluation',
  duree: 'duree',
  document: 'document',
  description: 'description',
  coursId: 'coursId'
};

exports.Prisma.NoteEtudiantScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  note: 'note',
  evaluationEtudiantId: 'evaluationEtudiantId',
  etudiantId: 'etudiantId'
};

exports.Prisma.CoursScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nom: 'nom',
  description: 'description',
  dateDebut: 'dateDebut',
  dateFin: 'dateFin',
  heureDebut: 'heureDebut',
  heureFin: 'heureFin',
  matiereId: 'matiereId',
  salleId: 'salleId',
  classeId: 'classeId',
  professeurId: 'professeurId'
};

exports.Prisma.SalleScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nom: 'nom',
  capacite: 'capacite',
  batiment: 'batiment',
  etablissementId: 'etablissementId',
  estDisponible: 'estDisponible'
};

exports.Prisma.FeuillePresenceScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  date: 'date',
  heureDebut: 'heureDebut',
  heureFin: 'heureFin',
  coursId: 'coursId',
  etudiantId: 'etudiantId'
};

exports.Prisma.EmploiDuTempsScalarFieldEnum = {
  id: 'id',
  coursId: 'coursId',
  classeId: 'classeId',
  professeurId: 'professeurId',
  salleId: 'salleId',
  dateDebut: 'dateDebut',
  dateFin: 'dateFin'
};

exports.Prisma.PaiementScalarFieldEnum = {
  id: 'id',
  etudiantId: 'etudiantId',
  montant: 'montant',
  datePaiement: 'datePaiement',
  methodePaiement: 'methodePaiement',
  referencePaiement: 'referencePaiement',
  typeFrais: 'typeFrais',
  statutPaiement: 'statutPaiement'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  UTILISATEUR: 'UTILISATEUR',
  ETUDIANT: 'ETUDIANT',
  PROFESSEUR: 'PROFESSEUR',
  COMPTABLE: 'COMPTABLE',
  SURVEILLANT: 'SURVEILLANT',
  SUPERVISEUR: 'SUPERVISEUR'
};

exports.Genre = exports.$Enums.Genre = {
  Masculin: 'Masculin',
  Feminin: 'Feminin'
};

exports.GroupeSanguin = exports.$Enums.GroupeSanguin = {
  A: 'A',
  B: 'B',
  AB: 'AB',
  O: 'O',
  O_NEGATIF: 'O_NEGATIF',
  A_NEGATIF: 'A_NEGATIF',
  B_NEGATIF: 'B_NEGATIF',
  AB_NEGATIF: 'AB_NEGATIF'
};

exports.TypeDiplome = exports.$Enums.TypeDiplome = {
  LICENCE_GENERALE: 'LICENCE_GENERALE',
  LICENCE_PROFESSIONNELLE: 'LICENCE_PROFESSIONNELLE',
  MASTER_PROFESSIONNEL: 'MASTER_PROFESSIONNEL',
  MASTER_RECHERCHE: 'MASTER_RECHERCHE',
  DOCTORAT: 'DOCTORAT'
};

exports.TypeEvaluation = exports.$Enums.TypeEvaluation = {
  CONTROLE_CONTINU: 'CONTROLE_CONTINU',
  EXAMEN: 'EXAMEN',
  TEST: 'TEST',
  TP: 'TP',
  TD: 'TD',
  PROJET: 'PROJET',
  RAPPORT: 'RAPPORT',
  MEMOIRE: 'MEMOIRE',
  STAGE: 'STAGE',
  AUTRE: 'AUTRE'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  Utilisateur: 'Utilisateur',
  Permission: 'Permission',
  Adresse: 'Adresse',
  ReseauSocial: 'ReseauSocial',
  Contact: 'Contact',
  Etudiant: 'Etudiant',
  Professeur: 'Professeur',
  Inscription: 'Inscription',
  Domaine: 'Domaine',
  Mention: 'Mention',
  Specialite: 'Specialite',
  Diplome: 'Diplome',
  Semestre: 'Semestre',
  UniteEnseignement: 'UniteEnseignement',
  Matiere: 'Matiere',
  Etablissement: 'Etablissement',
  Classe: 'Classe',
  AnneeScolaire: 'AnneeScolaire',
  EvaluationEtudiants: 'EvaluationEtudiants',
  NoteEtudiant: 'NoteEtudiant',
  Cours: 'Cours',
  Salle: 'Salle',
  FeuillePresence: 'FeuillePresence',
  EmploiDuTemps: 'EmploiDuTemps',
  Paiement: 'Paiement'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
