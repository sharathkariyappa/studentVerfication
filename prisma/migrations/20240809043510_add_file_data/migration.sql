/*
  Warnings:

  - Added the required column `mimeType` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `studentId` on the `Document` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "mimeType" TEXT NOT NULL,
DROP COLUMN "studentId",
ADD COLUMN     "studentId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Document_studentId_key" ON "Document"("studentId");
