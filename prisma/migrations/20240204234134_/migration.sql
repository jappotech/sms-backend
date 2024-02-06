/*
  Warnings:

  - Added the required column `anneeScolaire` to the `Classe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Classe" ADD COLUMN     "anneeScolaire" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Etablissement" ADD COLUMN     "anneeScolaire" TEXT NOT NULL DEFAULT '2023/2024',
ADD COLUMN     "anneeScolaireNom" TEXT;

-- CreateTable
CREATE TABLE "AnneeScolaire" (
    "nom" TEXT NOT NULL DEFAULT '2023/2024'
);

-- CreateIndex
CREATE UNIQUE INDEX "AnneeScolaire_nom_key" ON "AnneeScolaire"("nom");

-- AddForeignKey
ALTER TABLE "Classe" ADD CONSTRAINT "Classe_anneeScolaire_fkey" FOREIGN KEY ("anneeScolaire") REFERENCES "AnneeScolaire"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;
