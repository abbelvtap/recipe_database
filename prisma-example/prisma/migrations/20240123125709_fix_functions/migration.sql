-- AlterTable
ALTER TABLE "Liked" ALTER COLUMN "user_id" DROP DEFAULT;
DROP SEQUENCE "Liked_user_id_seq";
