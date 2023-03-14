/*
  Warnings:

  - You are about to drop the column `country` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `houseNumber` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryAddressId` on the `Command` table. All the data in the column will be lost.
  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `customerId` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `PurchaseItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PurchaseItem` table. All the data in the column will be lost.
  - You are about to drop the column `purchaseId` on the `PurchaseItem` table. All the data in the column will be lost.
  - You are about to drop the `Promotion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductToPromotion` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[phoneNumber]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productId]` on the table `PurchaseItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `countryCode` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cartId` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryAddressId` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Command" DROP CONSTRAINT "Command_deliveryAddressId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_customerId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseItem" DROP CONSTRAINT "PurchaseItem_purchaseId_fkey";

-- DropForeignKey
ALTER TABLE "_CardToCustomer" DROP CONSTRAINT "_CardToCustomer_B_fkey";

-- DropForeignKey
ALTER TABLE "_FavoriteItems" DROP CONSTRAINT "_FavoriteItems_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToPromotion" DROP CONSTRAINT "_ProductToPromotion_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToPromotion" DROP CONSTRAINT "_ProductToPromotion_B_fkey";

-- DropForeignKey
ALTER TABLE "_WishList" DROP CONSTRAINT "_WishList_A_fkey";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "country",
DROP COLUMN "houseNumber",
ADD COLUMN     "buildingName" TEXT,
ADD COLUMN     "countryCode" TEXT NOT NULL,
ADD COLUMN     "neighborhood" TEXT;

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "customerId",
ADD COLUMN     "cartId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Command" DROP COLUMN "deliveryAddressId",
ADD COLUMN     "delivered" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_pkey",
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "customerId";

-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "deliveryAddressId" UUID NOT NULL,
ALTER COLUMN "customerId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "PurchaseItem" DROP CONSTRAINT "PurchaseItem_pkey",
DROP COLUMN "id",
DROP COLUMN "purchaseId",
ADD COLUMN     "purchaseItemsId" UUID;

-- AlterTable
ALTER TABLE "_CardToCustomer" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_FavoriteItems" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_WishList" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Promotion";

-- DropTable
DROP TABLE "_ProductToPromotion";

-- CreateTable
CREATE TABLE "PurchaseItems" (
    "id" UUID NOT NULL,
    "purchaseId" UUID,

    CONSTRAINT "PurchaseItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "SpecialOffers" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "discountAmount" DOUBLE PRECISION,
    "discountPercent" DOUBLE PRECISION,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "SpecialOffers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToSpecialOffers" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cart_customerId_key" ON "Cart"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "SpecialOffers_name_key" ON "SpecialOffers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToSpecialOffers_AB_unique" ON "_ProductToSpecialOffers"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToSpecialOffers_B_index" ON "_ProductToSpecialOffers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phoneNumber_key" ON "Customer"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseItem_productId_key" ON "PurchaseItem"("productId");

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_deliveryAddressId_fkey" FOREIGN KEY ("deliveryAddressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseItems" ADD CONSTRAINT "PurchaseItems_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseItem" ADD CONSTRAINT "PurchaseItem_purchaseItemsId_fkey" FOREIGN KEY ("purchaseItemsId") REFERENCES "PurchaseItems"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteItems" ADD CONSTRAINT "_FavoriteItems_A_fkey" FOREIGN KEY ("A") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WishList" ADD CONSTRAINT "_WishList_A_fkey" FOREIGN KEY ("A") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToCustomer" ADD CONSTRAINT "_CardToCustomer_B_fkey" FOREIGN KEY ("B") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSpecialOffers" ADD CONSTRAINT "_ProductToSpecialOffers_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSpecialOffers" ADD CONSTRAINT "_ProductToSpecialOffers_B_fkey" FOREIGN KEY ("B") REFERENCES "SpecialOffers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
