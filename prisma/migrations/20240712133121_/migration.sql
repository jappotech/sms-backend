/*
  Warnings:

  - You are about to drop the column `dateDebut` on the `EmploiDuTemps` table. All the data in the column will be lost.
  - You are about to drop the column `dateFin` on the `EmploiDuTemps` table. All the data in the column will be lost.
  - Added the required column `color` to the `EmploiDuTemps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endRecur` to the `EmploiDuTemps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `EmploiDuTemps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startRecur` to the `EmploiDuTemps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `EmploiDuTemps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `EmploiDuTemps` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmploiDuTemps" DROP COLUMN "dateDebut",
DROP COLUMN "dateFin",
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "daysOfWeek" TEXT[],
ADD COLUMN     "endRecur" TEXT NOT NULL,
ADD COLUMN     "endTime" TEXT NOT NULL,
ADD COLUMN     "startRecur" TEXT NOT NULL,
ADD COLUMN     "startTime" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
