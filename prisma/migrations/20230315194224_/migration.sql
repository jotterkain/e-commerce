/*
  Warnings:

  - A unique constraint covering the columns `[cardNumber]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `CVV` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirationDate` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerName` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "CVV" INTEGER NOT NULL,
ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "expirationDate" TEXT NOT NULL,
ADD COLUMN     "ownerName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Card_cardNumber_key" ON "Card"("cardNumber");
