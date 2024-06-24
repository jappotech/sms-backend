/*
  Warnings:

  - The `statutCompte` column on the `Utilisateur` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "StatutCompte" AS ENUM ('NOT_FINALIZED', 'ACTIVE', 'BLOCKED', 'DELETED');

-- AlterTable
ALTER TABLE "Utilisateur" DROP COLUMN "statutCompte",
ADD COLUMN     "statutCompte" "StatutCompte" DEFAULT 'ACTIVE';
