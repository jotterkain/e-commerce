/*
  Warnings:

  - The primary key for the `Address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CartItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `addressId` column on the `Customer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Manufacturer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `customerId` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ProductPurchase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `customerId` column on the `ProductPurchase` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ReceiptItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[cardNumber]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cvvHash]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `id` on the `Address` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `cvvHash` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Card` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `CartItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `customerId` on the `CartItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `productId` on the `CartItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Customer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Manufacturer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `supplierId` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `manufacturerId` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `ProductPurchase` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `customerId` on the `Receipt` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `ReceiptItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `productId` on the `ReceiptItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Supplier` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `addressId` on the `Supplier` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_CardToCustomer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_CardToCustomer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_FavoriteItems` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_FavoriteItems` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_WishList` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_WishList` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_customerId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_manufacturerId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "ProductPurchase" DROP CONSTRAINT "ProductPurchase_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_customerId_fkey";

-- DropForeignKey
ALTER TABLE "ReceiptItem" DROP CONSTRAINT "ReceiptItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_addressId_fkey";

-- DropForeignKey
ALTER TABLE "_CardToCustomer" DROP CONSTRAINT "_CardToCustomer_A_fkey";

-- DropForeignKey
ALTER TABLE "_CardToCustomer" DROP CONSTRAINT "_CardToCustomer_B_fkey";

-- DropForeignKey
ALTER TABLE "_FavoriteItems" DROP CONSTRAINT "_FavoriteItems_A_fkey";

-- DropForeignKey
ALTER TABLE "_FavoriteItems" DROP CONSTRAINT "_FavoriteItems_B_fkey";

-- DropForeignKey
ALTER TABLE "_WishList" DROP CONSTRAINT "_WishList_A_fkey";

-- DropForeignKey
ALTER TABLE "_WishList" DROP CONSTRAINT "_WishList_B_fkey";

-- AlterTable
ALTER TABLE "Address" DROP CONSTRAINT "Address_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Address_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Card" DROP CONSTRAINT "Card_pkey",
ADD COLUMN     "cvvHash" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "customerId",
ADD COLUMN     "customerId" UUID NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" UUID NOT NULL,
ADD CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "addressId",
ADD COLUMN     "addressId" UUID,
ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Manufacturer" DROP CONSTRAINT "Manufacturer_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "supplierId",
ADD COLUMN     "supplierId" UUID NOT NULL,
DROP COLUMN "manufacturerId",
ADD COLUMN     "manufacturerId" UUID NOT NULL,
DROP COLUMN "customerId",
ADD COLUMN     "customerId" UUID,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ProductPurchase" DROP CONSTRAINT "ProductPurchase_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "customerId",
ADD COLUMN     "customerId" UUID,
ADD CONSTRAINT "ProductPurchase_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Receipt" DROP COLUMN "customerId",
ADD COLUMN     "customerId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "ReceiptItem" DROP CONSTRAINT "ReceiptItem_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "productId",
ADD COLUMN     "productId" UUID NOT NULL,
ADD CONSTRAINT "ReceiptItem_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "addressId",
ADD COLUMN     "addressId" UUID NOT NULL,
ADD CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_CardToCustomer" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "_FavoriteItems" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- AlterTable
ALTER TABLE "_WishList" DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Card_cardNumber_key" ON "Card"("cardNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Card_cvvHash_key" ON "Card"("cvvHash");

-- CreateIndex
CREATE UNIQUE INDEX "_CardToCustomer_AB_unique" ON "_CardToCustomer"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToCustomer_B_index" ON "_CardToCustomer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteItems_AB_unique" ON "_FavoriteItems"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteItems_B_index" ON "_FavoriteItems"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_WishList_AB_unique" ON "_WishList"("A", "B");

-- CreateIndex
CREATE INDEX "_WishList_B_index" ON "_WishList"("B");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPurchase" ADD CONSTRAINT "ProductPurchase_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptItem" ADD CONSTRAINT "ReceiptItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteItems" ADD CONSTRAINT "_FavoriteItems_A_fkey" FOREIGN KEY ("A") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteItems" ADD CONSTRAINT "_FavoriteItems_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WishList" ADD CONSTRAINT "_WishList_A_fkey" FOREIGN KEY ("A") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WishList" ADD CONSTRAINT "_WishList_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToCustomer" ADD CONSTRAINT "_CardToCustomer_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToCustomer" ADD CONSTRAINT "_CardToCustomer_B_fkey" FOREIGN KEY ("B") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
