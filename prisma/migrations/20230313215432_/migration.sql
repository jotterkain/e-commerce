/*
  Warnings:

  - You are about to drop the `ProductPurchase` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[purchaseId]` on the table `Receipt` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `purchaseId` to the `Receipt` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductPurchase" DROP CONSTRAINT "ProductPurchase_customerId_fkey";

-- DropForeignKey
ALTER TABLE "ProductPurchase" DROP CONSTRAINT "ProductPurchase_receiptId_fkey";

-- AlterTable
ALTER TABLE "Receipt" ADD COLUMN     "purchaseId" UUID NOT NULL;

-- DropTable
DROP TABLE "ProductPurchase";

-- CreateTable
CREATE TABLE "Purchase" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" UUID,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Command" (
    "id" UUID NOT NULL,
    "deliveryAddressId" UUID NOT NULL,
    "purchaseId" UUID NOT NULL,

    CONSTRAINT "Command_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Command_purchaseId_key" ON "Command"("purchaseId");

-- CreateIndex
CREATE UNIQUE INDEX "Receipt_purchaseId_key" ON "Receipt"("purchaseId");

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Command" ADD CONSTRAINT "Command_deliveryAddressId_fkey" FOREIGN KEY ("deliveryAddressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Command" ADD CONSTRAINT "Command_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
