/*
  Warnings:

  - You are about to drop the column `catagoryId` on the `foundItems` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `foundItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "foundItems" DROP CONSTRAINT "foundItems_catagoryId_fkey";

-- AlterTable
ALTER TABLE "foundItems" DROP COLUMN "catagoryId",
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "foundItems" ADD CONSTRAINT "foundItems_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "catagories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
