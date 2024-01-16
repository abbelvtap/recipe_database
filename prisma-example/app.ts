const express = require("express");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.post("/users", async (req: any, res: any) => {
  try {
    const { username, password } = req.body;

    const newUser = await prisma.users.create({
      data: {
        username, // name is provided by the request body
        password,
      },
    });

    res.json(newUser);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.get("/users", async (req: any, res: any) => {
  try {
    const users = await prisma.users.findMany();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.post("/recipes", async (req: any, res: any) => {
  try {
    const { name, link, picture } = req.body;

    const newRecipe = await prisma.recipes.create({
      data: {
        name,
        link,
        picture,
      },
    });

    res.json(newRecipe);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.get("/recipes", async (req: any, res: any) => {
  try {
    const recipes = await prisma.recipes.findMany();

    res.json(recipes);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.get("/recipes/:id", async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    const recipes = await prisma.recipes.findUniqueOrThrow({
      where: {
        recid: id,
      },
    });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});

app.post("/ing", async (req: any, res: any) => {
  try {
    const { name } = req.body;

    const newIng = await prisma.ingredients.create({
      data: {
        // name is provided by the request body
        name,
      },
    });

    res.json(newIng);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.get("/ing", async (req: any, res: any) => {
  try {
    const ings = await prisma.ingredients.findMany();

    res.json(ings);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.post("/inginrec", async (req: any, res: any) => {
  try {
    const { recipe_id, ingredients_id } = req.body;

    const newIng = await prisma.ing_In_Rec.create({
      data: {
        recipe_id, // name is provided by the request body
        ingredients_id,
      },
    });

    res.json(newIng);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.get("/inginrec/:id", async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    const recipes = await prisma.ing_In_Rec.findMany({
      where: {
        ingredients_id: id,
      },
    });

    res.json(recipes);
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});

app.post("/liked", async (req: any, res: any) => {
  try {
    const { user_id, recipe_id } = req.body;

    const newLiked = await prisma.liked.create({
      data: {
        user_id,
        recipe_id,
      },
    });

    res.json(newLiked);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.get("/liked/:id", async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    const liked = await prisma.liked.findMany({
      where: {
        user_id: id,
      },
    });

    res.json(liked);
  } catch (error) {
    res.status(500).json({
      message: `${error}`,
    });
  }
});
