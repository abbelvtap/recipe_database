const express = require("express");
require('dotenv').config();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Log when the connection is established
prisma.$connect()
  .then(() => console.log("Database connection established"))
  .catch((error) => console.error("Error establishing database connection:", error));

var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

//create a new user
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

//get a list of all users 
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

//remove a user with id
app.delete("/users/:id", async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id)

    const deletedUser = await prisma.users.delete({
      where: {
        id,
      },
    })

    res.json(deletedUser)
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})

//post a new recipe
app.post("/recipes", async (req: any, res: any) => {
  try {
    const { name , link } = req.body;

    const newRecipe = await prisma.recipes.create({
      data: {
        name, // name is provided by the request body
        link
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

//get all recipes
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

//get a recipe with id
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

//removes a recipe with id 
//Note: delete ing_in_rec and delete liked needs to be done before this
app.delete("/recipes/:id", async (req: any, res: any) => {
  try {
    const recid = parseInt(req.params.id)

    const deletedRec = await prisma.recipes.delete({
      where: {
        recid,
      },
    })


    res.json(deletedRec)
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})

//create an ingredient
app.post("/ing", async (req: any, res: any) => {
  try {
    const { name } = req.body;

    const newIng = await prisma.ingredients.create({
      data: {
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

//get all ingredients
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

//get all ingredient-recipe connections
app.get("/inginrec", async (req: any, res: any) => {
  try {
    const ingInRecs = await prisma.ing_In_Rec.findMany();

    res.json(ingInRecs);
  } catch (error) {
        res.status(500).json({
          message: "Something went wrong"
    });
  }
});

//connect a ingredient to a recipe
app.post("/inginrec", async (req: any, res: any) => {
  try {
    const { recipe_id, ingredients_id } = req.body;

    const newIng = await prisma.ing_In_Rec.create({
      data: {
        recipe_id, 
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

//get recipes connected to an ingredient specified by ingredient id
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

//delete all connections to a recipe specified by recipe id
app.delete("/inginrec/:id", async (req: any, res: any) => {
  try {
    const recipe_id = parseInt(req.params.id)

    const deletedIngs = await prisma.ing_In_Rec.deleteMany({
      where: {
        recipe_id,
      },
    })


    res.json(deletedIngs)
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})

//create a "like"-connection between a user and a recipe
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

app.get("/liked", async (req: any, res: any) => {
  try {
    const liked = await prisma.liked.findMany();

    res.json(liked);
  } catch (error) {
        res.status(500).json({
          message: "Something went wrong"
    });
  }
});

//get all recipes (id) a specified user has liked
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

//delete all likes of a certain recipe 
app.delete("/liked/rec/:rec", async (req: any, res: any) => {
  try {
    const rec = parseInt(req.params.rec)

    const deletedLike = await prisma.liked.deleteMany({
      where: {
        recipe_id:rec
      },
    })

    res.json(deletedLike)
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})

//delete all likes of a certain user
app.delete("/liked/user/:user", async (req: any, res: any) => {
  try {
    const user = parseInt(req.params.user)

    const deletedLike = await prisma.liked.deleteMany({
      where: {
        user_id:user
      },
    })

    res.json(deletedLike)
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})

//delete a specific like specified by both recipe id and user id
app.delete("/liked/:rec/:user", async (req: any, res: any) => {
  try {
    const rec = parseInt(req.params.rec)
    const user = parseInt(req.params.user)

    const deletedLike = await prisma.liked.deleteMany({
      where: {
        recipe_id:rec,
        user_id:user
      },
    })

    res.json(deletedLike)
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})