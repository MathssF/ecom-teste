/*
  Warnings:

  - You are about to alter the column `path` on the `DevError` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `method` on the `DevError` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE `DevError` MODIFY `message` VARCHAR(1000) NOT NULL,
    MODIFY `path` VARCHAR(100) NOT NULL,
    MODIFY `method` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `DevNotes` MODIFY `message` VARCHAR(1000) NOT NULL;
