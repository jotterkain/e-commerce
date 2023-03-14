/*
  Warnings:

  - You are about to drop the column `cardNumber` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `cvvHash` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `expiryMonth` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `expiryYear` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the `Command` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Purchase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchaseItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchaseItems` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Command" DROP CONSTRAINT "Command_purchaseId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_deliveryAddressId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseItem" DROP CONSTRAINT "PurchaseItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseItem" DROP CONSTRAINT "PurchaseItem_purchaseItemsId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseItems" DROP CONSTRAINT "PurchaseItems_purchaseId_fkey";

-- DropIndex
DROP INDEX "Card_cardNumber_key";

-- DropIndex
DROP INDEX "Card_cvvHash_key";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "cardNumber",
DROP COLUMN "cvvHash",
DROP COLUMN "expiryMonth",
DROP COLUMN "expiryYear";

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "hibernated" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Command";

-- DropTable
DROP TABLE "Purchase";

-- DropTable
DROP TABLE "PurchaseItem";

-- DropTable
DROP TABLE "PurchaseItems";

-- CreateTable
CREATE TABLE "Order" (
    "id" UUID NOT NULL,
    "customerId" TEXT NOT NULL,
    "addressId" UUID NOT NULL,
    "delivered" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" UUID NOT NULL,
    "quanity" INTEGER NOT NULL,
    "orderId" UUID,
    "productId" UUID NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
