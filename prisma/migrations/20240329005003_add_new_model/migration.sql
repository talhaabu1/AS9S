-- CreateEnum
CREATE TYPE "ClaimStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "catagories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "catagories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foundItems" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "catagoryId" TEXT NOT NULL,
    "foundItemName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "foundItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "claims" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "foundItemId" TEXT NOT NULL,
    "status" "ClaimStatus" NOT NULL DEFAULT 'PENDING',
    "distinguishingFeatures" TEXT NOT NULL,
    "lostDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "claims_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "foundItems" ADD CONSTRAINT "foundItems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foundItems" ADD CONSTRAINT "foundItems_catagoryId_fkey" FOREIGN KEY ("catagoryId") REFERENCES "catagories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "claims" ADD CONSTRAINT "claims_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "claims" ADD CONSTRAINT "claims_foundItemId_fkey" FOREIGN KEY ("foundItemId") REFERENCES "foundItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
