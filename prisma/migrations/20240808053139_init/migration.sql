-- CreateTable
CREATE TABLE "Institute" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "instituteId" INTEGER NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,

    CONSTRAINT "Institute_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Institute_instituteId_key" ON "Institute"("instituteId");

-- CreateIndex
CREATE UNIQUE INDEX "Institute_walletAddress_key" ON "Institute"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Institute_emailId_key" ON "Institute"("emailId");
