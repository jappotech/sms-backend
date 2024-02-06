/*
  Warnings:

  - You are about to drop the column `coursId` on the `NoteEtudiant` table. All the data in the column will be lost.
  - You are about to drop the column `typeEvaluation` on the `NoteEtudiant` table. All the data in the column will be lost.
  - Added the required column `dateEvaluation` to the `EvaluationEtudiants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "NoteEtudiant" DROP CONSTRAINT "NoteEtudiant_coursId_fkey";

-- AlterTable
ALTER TABLE "Cours" ADD COLUMN     "anneeScolaireId" INTEGER;

-- AlterTable
ALTER TABLE "Etablissement" ADD COLUMN     "anneeEnCours" TEXT;

-- AlterTable
ALTER TABLE "EvaluationEtudiants" ADD COLUMN     "dateEvaluation" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "NoteEtudiant" DROP COLUMN "coursId",
DROP COLUMN "typeEvaluation";

-- CreateTable
CREATE TABLE "AnneeScolaire" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dateDebut" INTEGER NOT NULL,
    "dateFin" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "AnneeScolaire_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_anneeScolaireId_fkey" FOREIGN KEY ("anneeScolaireId") REFERENCES "AnneeScolaire"("id") ON DELETE SET NULL ON UPDATE CASCADE;
