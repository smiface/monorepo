-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userRole" TEXT NOT NULL DEFAULT E'guest';

-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);
