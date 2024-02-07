/*
  Warnings:

  - You are about to drop the column `anneeScolaireId` on the `Cours` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cours" DROP CONSTRAINT "Cours_anneeScolaireId_fkey";

-- AlterTable
ALTER TABLE "Classe" ADD COLUMN     "anneeScolaireId" INTEGER;

-- AlterTable
ALTER TABLE "Cours" DROP COLUMN "anneeScolaireId";

-- AddForeignKey
ALTER TABLE "Classe" ADD CONSTRAINT "Classe_anneeScolaireId_fkey" FOREIGN KEY ("anneeScolaireId") REFERENCES "AnneeScolaire"("id") ON DELETE SET NULL ON UPDATE CASCADE;
