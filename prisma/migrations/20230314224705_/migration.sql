/*
  Warnings:

  - You are about to drop the column `addressId` on the `Customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customerId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_addressId_fkey";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "customerId" TEXT;

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "addressId";

-- CreateIndex
CREATE UNIQUE INDEX "Address_customerId_key" ON "Address"("customerId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
