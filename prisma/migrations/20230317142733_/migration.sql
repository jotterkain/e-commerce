/*
  Warnings:

  - A unique constraint covering the columns `[postalCode]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Address_postalCode_key" ON "Address"("postalCode");
