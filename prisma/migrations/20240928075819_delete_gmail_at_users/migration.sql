/*
  Warnings:

  - You are about to drop the column `gmail` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_gmail_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "gmail";
