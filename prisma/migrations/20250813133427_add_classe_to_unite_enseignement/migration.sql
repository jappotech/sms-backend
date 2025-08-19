-- AlterTable
ALTER TABLE "UniteEnseignement" ADD COLUMN     "classeId" INTEGER;

-- AddForeignKey
ALTER TABLE "UniteEnseignement" ADD CONSTRAINT "UniteEnseignement_classeId_fkey" FOREIGN KEY ("classeId") REFERENCES "Classe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
