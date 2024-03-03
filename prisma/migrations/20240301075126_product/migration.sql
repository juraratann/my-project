/*
  Warnings:

  - Made the column `name` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `name` VARCHAR(200) NOT NULL,
    MODIFY `detail` VARCHAR(200) NOT NULL,
    MODIFY `stock` VARCHAR(200) NOT NULL;
