-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");
