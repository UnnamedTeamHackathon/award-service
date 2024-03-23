-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Award" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,

    CONSTRAINT "Award_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AwardToUser" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AwardToUser_AB_unique" ON "_AwardToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AwardToUser_B_index" ON "_AwardToUser"("B");

-- AddForeignKey
ALTER TABLE "_AwardToUser" ADD CONSTRAINT "_AwardToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Award"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AwardToUser" ADD CONSTRAINT "_AwardToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
