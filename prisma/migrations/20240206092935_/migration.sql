-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('Masculin', 'Feminin');

-- CreateEnum
CREATE TYPE "GroupeSanguin" AS ENUM ('A+', 'B+', 'AB+', 'O+', 'O-', 'A-', 'B-', 'AB-');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'UTILISATEUR', 'ETUDIANT', 'PROFESSEUR', 'COMPTABLE', 'SURVEILLANT', 'SUPERVISEUR');

-- CreateEnum
CREATE TYPE "Cursus" AS ENUM ('LMD', 'INTERNE', 'EXTERNE');

-- CreateEnum
CREATE TYPE "TypeDiplome" AS ENUM ('LICENCE_GENERALE', 'LICENCE_PROFESSIONNELLE', 'MASTER_PROFESSIONNEL', 'MASTER_RECHERCHE', 'DOCTORAT');

-- CreateEnum
CREATE TYPE "TypeEvaluation" AS ENUM ('Controle Continu', 'EXAMEN', 'TEST', 'TP', 'TD', 'PROJET', 'RAPPORT', 'MEMOIRE', 'STAGE', 'AUTRE');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "roles" "Role"[] DEFAULT ARRAY['UTILISATEUR']::"Role"[],
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" SERIAL NOT NULL,
    "matricule" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "dateNaissance" TIMESTAMP(3),
    "lieuNaissance" TEXT,
    "cni" TEXT,
    "genre" "Genre" NOT NULL,
    "nationalite" TEXT,
    "groupeSanguin" "GroupeSanguin",
    "etablissementId" INTEGER,
    "statutCompte" TEXT,
    "roles" "Role"[] DEFAULT ARRAY['UTILISATEUR']::"Role"[],
    "contactId" INTEGER,
    "adresseId" INTEGER,
    "accountId" INTEGER,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role"[],
    "label" TEXT NOT NULL,
    "slug" TEXT,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adresse" (
    "id" SERIAL NOT NULL,
    "pays" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "codePostal" TEXT,
    "geolocalisation" TEXT,

    CONSTRAINT "Adresse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReseauSocial" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nom" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "contactId" INTEGER,

    CONSTRAINT "ReseauSocial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "telephone" TEXT NOT NULL,
    "fix" TEXT,
    "fax" TEXT,
    "email" TEXT NOT NULL,
    "siteWeb" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Etudiant" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "slug" TEXT,
    "ine" TEXT NOT NULL,
    "baccaleaureat" TEXT,
    "anneeBaccaleaureat" INTEGER,
    "profileId" INTEGER NOT NULL,
    "feuillePresencesId" INTEGER,

    CONSTRAINT "Etudiant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professeur" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "Professeur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inscription" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "reference" TEXT NOT NULL,
    "premiereInscription" BOOLEAN NOT NULL DEFAULT false,
    "dernierDiplome" TEXT,
    "autreEtablissement" TEXT,
    "activiteProfessionnel" TEXT,
    "niveau" TEXT,
    "statut" TEXT,
    "diplomeId" INTEGER NOT NULL,
    "etudiantId" INTEGER NOT NULL,
    "classeId" INTEGER NOT NULL,

    CONSTRAINT "Inscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Domaine" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nom" TEXT NOT NULL,
    "slug" TEXT,

    CONSTRAINT "Domaine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mention" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nom" TEXT NOT NULL,
    "slug" TEXT,
    "domaineId" INTEGER,

    CONSTRAINT "Mention_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specialite" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nom" TEXT NOT NULL,
    "slug" TEXT,
    "mentionId" INTEGER,

    CONSTRAINT "Specialite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diplome" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nom" TEXT NOT NULL,
    "finalite" TEXT NOT NULL,
    "entite" TEXT NOT NULL,
    "habilitation" TEXT NOT NULL,
    "partenaires" TEXT[],
    "dateCreation" TIMESTAMP(3) NOT NULL,
    "dateHabilitation" TIMESTAMP(3) NOT NULL,
    "dateEcheance" TIMESTAMP(3) NOT NULL,
    "duree" INTEGER NOT NULL,
    "specialiteId" INTEGER,

    CONSTRAINT "Diplome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Semestre" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "numero" INTEGER NOT NULL,
    "grade" "TypeDiplome" NOT NULL,
    "dateDebut" TIMESTAMP(3) NOT NULL,
    "dateFin" TIMESTAMP(3) NOT NULL,
    "nombreSemaine" INTEGER NOT NULL,
    "classeId" INTEGER,

    CONSTRAINT "Semestre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniteEnseignement" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "credit" INTEGER NOT NULL,
    "semestreId" INTEGER,

    CONSTRAINT "UniteEnseignement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matiere" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "credit" INTEGER NOT NULL,
    "nbHeure" INTEGER,
    "uniteEnseigmentId" INTEGER NOT NULL,

    CONSTRAINT "Matiere_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Etablissement" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nom" TEXT NOT NULL,
    "matricule" TEXT,
    "sigle" TEXT,
    "dateCreation" TIMESTAMP(3),
    "logo" TEXT,
    "adresseId" INTEGER,
    "contactId" INTEGER,

    CONSTRAINT "Etablissement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classe" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nom" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "etablissementId" INTEGER NOT NULL,
    "specialiteId" INTEGER NOT NULL,

    CONSTRAINT "Classe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationEtudiants" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "typeEvaluation" "TypeEvaluation" NOT NULL,
    "duree" INTEGER NOT NULL,
    "document" TEXT NOT NULL,
    "description" TEXT,
    "coursId" INTEGER NOT NULL,

    CONSTRAINT "EvaluationEtudiants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoteEtudiant" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "note" DOUBLE PRECISION NOT NULL,
    "typeEvaluation" "TypeEvaluation" NOT NULL,
    "evaluationEtudiantId" INTEGER,
    "etudiantId" INTEGER NOT NULL,
    "coursId" INTEGER NOT NULL,

    CONSTRAINT "NoteEtudiant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cours" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "dateDebut" TIMESTAMP(3) NOT NULL,
    "dateFin" TIMESTAMP(3) NOT NULL,
    "heureDebut" TIMESTAMP(3) NOT NULL,
    "heureFin" TIMESTAMP(3) NOT NULL,
    "matiereId" INTEGER,
    "salleId" INTEGER,
    "classeId" INTEGER,
    "professeurId" INTEGER,

    CONSTRAINT "Cours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Salle" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nom" TEXT NOT NULL,
    "capacite" INTEGER,
    "batiment" TEXT,
    "etablissementId" INTEGER NOT NULL,
    "estDisponible" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Salle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeuillePresence" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "heureDebut" TIMESTAMP(3) NOT NULL,
    "heureFin" TIMESTAMP(3) NOT NULL,
    "coursId" INTEGER NOT NULL,
    "etudiantId" INTEGER,

    CONSTRAINT "FeuillePresence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmploiDuTemps" (
    "id" SERIAL NOT NULL,
    "coursId" INTEGER NOT NULL,
    "classeId" INTEGER NOT NULL,
    "professeurId" INTEGER,
    "salleId" INTEGER NOT NULL,
    "dateDebut" TIMESTAMP(3) NOT NULL,
    "dateFin" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmploiDuTemps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paiement" (
    "id" SERIAL NOT NULL,
    "etudiantId" INTEGER NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "datePaiement" TIMESTAMP(3) NOT NULL,
    "methodePaiement" TEXT NOT NULL,
    "referencePaiement" TEXT NOT NULL,
    "typeFrais" TEXT NOT NULL,
    "statutPaiement" TEXT NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PermissionToUtilisateur" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DomaineToEtablissement" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_uid_key" ON "Account"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_matricule_key" ON "Utilisateur"("matricule");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_accountId_key" ON "Utilisateur"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_label_key" ON "Permission"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_slug_key" ON "Permission"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_telephone_key" ON "Contact"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_fix_key" ON "Contact"("fix");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_fax_key" ON "Contact"("fax");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_siteWeb_key" ON "Contact"("siteWeb");

-- CreateIndex
CREATE UNIQUE INDEX "Etudiant_slug_key" ON "Etudiant"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Etudiant_ine_key" ON "Etudiant"("ine");

-- CreateIndex
CREATE UNIQUE INDEX "Etudiant_profileId_key" ON "Etudiant"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Professeur_profileId_key" ON "Professeur"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Inscription_reference_key" ON "Inscription"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "Domaine_slug_key" ON "Domaine"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Mention_slug_key" ON "Mention"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Specialite_slug_key" ON "Specialite"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToUtilisateur_AB_unique" ON "_PermissionToUtilisateur"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToUtilisateur_B_index" ON "_PermissionToUtilisateur"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DomaineToEtablissement_AB_unique" ON "_DomaineToEtablissement"("A", "B");

-- CreateIndex
CREATE INDEX "_DomaineToEtablissement_B_index" ON "_DomaineToEtablissement"("B");

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_adresseId_fkey" FOREIGN KEY ("adresseId") REFERENCES "Adresse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_etablissementId_fkey" FOREIGN KEY ("etablissementId") REFERENCES "Etablissement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReseauSocial" ADD CONSTRAINT "ReseauSocial_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Etudiant" ADD CONSTRAINT "Etudiant_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professeur" ADD CONSTRAINT "Professeur_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscription" ADD CONSTRAINT "Inscription_diplomeId_fkey" FOREIGN KEY ("diplomeId") REFERENCES "Diplome"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscription" ADD CONSTRAINT "Inscription_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES "Etudiant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscription" ADD CONSTRAINT "Inscription_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "Classe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mention" ADD CONSTRAINT "Mention_domaineId_fkey" FOREIGN KEY ("domaineId") REFERENCES "Domaine"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Specialite" ADD CONSTRAINT "Specialite_mentionId_fkey" FOREIGN KEY ("mentionId") REFERENCES "Mention"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diplome" ADD CONSTRAINT "Diplome_specialiteId_fkey" FOREIGN KEY ("specialiteId") REFERENCES "Specialite"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Semestre" ADD CONSTRAINT "Semestre_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "Classe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniteEnseignement" ADD CONSTRAINT "UniteEnseignement_semestreId_fkey" FOREIGN KEY ("semestreId") REFERENCES "Semestre"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matiere" ADD CONSTRAINT "Matiere_uniteEnseigmentId_fkey" FOREIGN KEY ("uniteEnseigmentId") REFERENCES "UniteEnseignement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Etablissement" ADD CONSTRAINT "Etablissement_adresseId_fkey" FOREIGN KEY ("adresseId") REFERENCES "Adresse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Etablissement" ADD CONSTRAINT "Etablissement_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classe" ADD CONSTRAINT "Classe_etablissementId_fkey" FOREIGN KEY ("etablissementId") REFERENCES "Etablissement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classe" ADD CONSTRAINT "Classe_specialiteId_fkey" FOREIGN KEY ("specialiteId") REFERENCES "Specialite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationEtudiants" ADD CONSTRAINT "EvaluationEtudiants_coursId_fkey" FOREIGN KEY ("coursId") REFERENCES "Cours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoteEtudiant" ADD CONSTRAINT "NoteEtudiant_evaluationEtudiantId_fkey" FOREIGN KEY ("evaluationEtudiantId") REFERENCES "EvaluationEtudiants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoteEtudiant" ADD CONSTRAINT "NoteEtudiant_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES "Etudiant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoteEtudiant" ADD CONSTRAINT "NoteEtudiant_coursId_fkey" FOREIGN KEY ("coursId") REFERENCES "Cours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "Matiere"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_salleId_fkey" FOREIGN KEY ("salleId") REFERENCES "Salle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "Classe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES "Professeur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Salle" ADD CONSTRAINT "Salle_etablissementId_fkey" FOREIGN KEY ("etablissementId") REFERENCES "Etablissement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeuillePresence" ADD CONSTRAINT "FeuillePresence_coursId_fkey" FOREIGN KEY ("coursId") REFERENCES "Cours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeuillePresence" ADD CONSTRAINT "FeuillePresence_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES "Etudiant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmploiDuTemps" ADD CONSTRAINT "EmploiDuTemps_coursId_fkey" FOREIGN KEY ("coursId") REFERENCES "Cours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmploiDuTemps" ADD CONSTRAINT "EmploiDuTemps_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "Classe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmploiDuTemps" ADD CONSTRAINT "EmploiDuTemps_professeurId_fkey" FOREIGN KEY ("professeurId") REFERENCES "Professeur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmploiDuTemps" ADD CONSTRAINT "EmploiDuTemps_salleId_fkey" FOREIGN KEY ("salleId") REFERENCES "Salle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_etudiantId_fkey" FOREIGN KEY ("etudiantId") REFERENCES "Etudiant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToUtilisateur" ADD CONSTRAINT "_PermissionToUtilisateur_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToUtilisateur" ADD CONSTRAINT "_PermissionToUtilisateur_B_fkey" FOREIGN KEY ("B") REFERENCES "Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DomaineToEtablissement" ADD CONSTRAINT "_DomaineToEtablissement_A_fkey" FOREIGN KEY ("A") REFERENCES "Domaine"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DomaineToEtablissement" ADD CONSTRAINT "_DomaineToEtablissement_B_fkey" FOREIGN KEY ("B") REFERENCES "Etablissement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
