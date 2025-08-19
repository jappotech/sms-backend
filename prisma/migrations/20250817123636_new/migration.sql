/*
  Warnings:

  - You are about to drop the column `classeId` on the `Semestre` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Semestre" DROP CONSTRAINT "Semestre_classeId_fkey";

-- AlterTable
ALTER TABLE "Semestre" DROP COLUMN "classeId";
