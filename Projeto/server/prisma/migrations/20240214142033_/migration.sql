/*
  Warnings:

  - You are about to drop the column `senha` on the `Empresa` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "setor" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Empresa" ("cnpj", "createdAt", "email", "endereco", "id", "nome", "setor", "telefone", "updatedAt") SELECT "cnpj", "createdAt", "email", "endereco", "id", "nome", "setor", "telefone", "updatedAt" FROM "Empresa";
DROP TABLE "Empresa";
ALTER TABLE "new_Empresa" RENAME TO "Empresa";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
