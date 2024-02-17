/*
  Warnings:

  - You are about to drop the column `medicine_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `medicine_id` on the `sale_detail` table. All the data in the column will be lost.
  - You are about to drop the `medicine` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `product_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `Sale_Detail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `medicine` DROP FOREIGN KEY `Medicine_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_medicine_id_fkey`;

-- DropForeignKey
ALTER TABLE `sale_detail` DROP FOREIGN KEY `Sale_Detail_medicine_id_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `medicine_id`,
    ADD COLUMN `product_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sale_detail` DROP COLUMN `medicine_id`,
    ADD COLUMN `product_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `medicine`;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `detail` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `stock` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sale_Detail` ADD CONSTRAINT `Sale_Detail_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
