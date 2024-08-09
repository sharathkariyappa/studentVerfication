/*
  Warnings:

  - A unique constraint covering the columns `[walletAddress]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Student_walletAddress_key" ON "Student"("walletAddress");
