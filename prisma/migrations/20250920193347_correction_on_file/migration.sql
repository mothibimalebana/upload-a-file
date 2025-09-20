/*
  Warnings:

  - Added the required column `destination` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encoding` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalname` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."File" ADD COLUMN     "destination" TEXT NOT NULL,
ADD COLUMN     "encoding" TEXT NOT NULL,
ADD COLUMN     "originalname" TEXT NOT NULL,
ALTER COLUMN "path" DROP NOT NULL;
