-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Expenses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Expenses_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Expenses" ("amount", "authorId", "category", "id", "paid", "title") SELECT "amount", "authorId", "category", "id", "paid", "title" FROM "Expenses";
DROP TABLE "Expenses";
ALTER TABLE "new_Expenses" RENAME TO "Expenses";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
