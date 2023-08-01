/*
  Warnings:

  - The `choices` column on the `Poll` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `Poll` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PollType" AS ENUM ('SHORT_TEXT', 'BOOLEAN', 'CHOICES');

-- AlterTable
ALTER TABLE "Poll" DROP COLUMN "type",
ADD COLUMN     "type" "PollType" NOT NULL,
DROP COLUMN "choices",
ADD COLUMN     "choices" TEXT[] DEFAULT ARRAY[]::TEXT[];
