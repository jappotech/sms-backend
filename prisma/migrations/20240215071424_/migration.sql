/*
  Warnings:

  - A unique constraint covering the columns `[evaluationEtudiantId,etudiantId,note]` on the table `NoteEtudiant` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Matiere" ADD COLUMN     "coefficient" INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "NoteEtudiant_evaluationEtudiantId_etudiantId_note_key" ON "NoteEtudiant"("evaluationEtudiantId", "etudiantId", "note");
