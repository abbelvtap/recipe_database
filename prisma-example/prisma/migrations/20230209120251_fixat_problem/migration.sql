-- CreateTable
CREATE TABLE "Recipes" (
    "recid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "picture" TEXT NOT NULL,

    CONSTRAINT "Recipes_pkey" PRIMARY KEY ("recid")
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Liked" (
    "user_id" SERIAL NOT NULL,
    "recipe_id" INTEGER NOT NULL,

    CONSTRAINT "Liked_pkey" PRIMARY KEY ("user_id","recipe_id")
);

-- CreateTable
CREATE TABLE "Ing_In_Rec" (
    "recipe_id" INTEGER NOT NULL,
    "ingredients_id" INTEGER NOT NULL,

    CONSTRAINT "Ing_In_Rec_pkey" PRIMARY KEY ("recipe_id","ingredients_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "Liked" ADD CONSTRAINT "Liked_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipes"("recid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Liked" ADD CONSTRAINT "Liked_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ing_In_Rec" ADD CONSTRAINT "Ing_In_Rec_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipes"("recid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ing_In_Rec" ADD CONSTRAINT "Ing_In_Rec_ingredients_id_fkey" FOREIGN KEY ("ingredients_id") REFERENCES "Ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
