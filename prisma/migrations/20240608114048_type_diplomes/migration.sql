/*
  Warnings:

  - The values [LICENCE_GENERALE,LICENCE_PROFESSIONNELLE,MASTER_PROFESSIONNEL,MASTER_RECHERCHE] on the enum `TypeDiplome` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TypeDiplome_new" AS ENUM ('LICENCE GENERALE', 'LICENCE PROFESSIONNEL', 'MASTER PROFESSIONNEL', 'MASTER RECHERCHE', 'DOCTORAT');
ALTER TABLE "Semestre" ALTER COLUMN "grade" TYPE "TypeDiplome_new" USING ("grade"::text::"TypeDiplome_new");
ALTER TYPE "TypeDiplome" RENAME TO "TypeDiplome_old";
ALTER TYPE "TypeDiplome_new" RENAME TO "TypeDiplome";
DROP TYPE "TypeDiplome_old";
COMMIT;
