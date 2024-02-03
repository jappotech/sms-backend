-- DropForeignKey
ALTER TABLE "Cours" DROP CONSTRAINT "Cours_classeId_fkey";

-- DropForeignKey
ALTER TABLE "Cours" DROP CONSTRAINT "Cours_matiereId_fkey";

-- DropForeignKey
ALTER TABLE "Cours" DROP CONSTRAINT "Cours_salleId_fkey";

-- AlterTable
ALTER TABLE "Cours" ALTER COLUMN "matiereId" DROP NOT NULL,
ALTER COLUMN "salleId" DROP NOT NULL,
ALTER COLUMN "classeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "Matiere"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_salleId_fkey" FOREIGN KEY ("salleId") REFERENCES "Salle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cours" ADD CONSTRAINT "Cours_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "Classe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
