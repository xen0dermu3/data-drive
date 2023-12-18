-- CreateTable
CREATE TABLE "shopping_cart_items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "shopping_cart_items_pkey" PRIMARY KEY ("id")
);
