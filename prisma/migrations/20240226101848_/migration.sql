/*
  Warnings:

  - You are about to drop the column `uniteEnseigmentId` on the `Matiere` table. All the data in the column will be lost.
  - Added the required column `uniteEnseignementId` to the `Matiere` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Matiere" DROP CONSTRAINT "Matiere_uniteEnseigmentId_fkey";

-- AlterTable
ALTER TABLE "Matiere" DROP COLUMN "uniteEnseigmentId",
ADD COLUMN     "uniteEnseignementId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Matiere" ADD CONSTRAINT "Matiere_uniteEnseignementId_fkey" FOREIGN KEY ("uniteEnseignementId") REFERENCES "UniteEnseignement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
