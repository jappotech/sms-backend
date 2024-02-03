/*
  Warnings:

  - A unique constraint covering the columns `[matricule]` on the table `Utilisateur` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountId]` on the table `Utilisateur` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_matricule_key" ON "Utilisateur"("matricule");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_accountId_key" ON "Utilisateur"("accountId");
