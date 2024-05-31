/*
  Warnings:

  - You are about to drop the column `distinguishingFeatures` on the `claims` table. All the data in the column will be lost.
  - You are about to drop the column `foundItemName` on the `foundItems` table. All the data in the column will be lost.
  - Added the required column `description` to the `claims` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `claims` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foundDate` to the `foundItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `foundItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `foundItems` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "claims" DROP COLUMN "distinguishingFeatures",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "foundItems" DROP COLUMN "foundItemName",
ADD COLUMN     "foundDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "lostItems" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "lostDate" TIMESTAMP(3) NOT NULL,
    "number" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "asFound" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lostItems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lostItems" ADD CONSTRAINT "lostItems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lostItems" ADD CONSTRAINT "lostItems_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "catagories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
