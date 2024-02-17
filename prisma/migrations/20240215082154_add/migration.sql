/*
  Warnings:

  - You are about to drop the column `creditcard` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `netbanking` on the `payment` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payment` DROP COLUMN `creditcard`,
    DROP COLUMN `netbanking`,
    ADD COLUMN `amount` INTEGER NOT NULL,
    ADD COLUMN `date` DATETIME(3) NOT NULL;
