const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/recipes", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    if (err) throw err;

    data = JSON.parse(data);

    const recipeNameArr = [];
    data.recipes.forEach((recipe) => {
      recipeNameArr.push(recipe.name);
    });

    res.json({
      recipeNames: recipeNameArr,
    });
  });
});

app.get("/recipes/details/:recipeName", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    if (err) throw err;

    data = JSON.parse(data);

    const recipeDetails = data.recipes.find(
      (recipe) => recipe.name === req.params.recipeName
    );

    if (!recipeDetails) {
      res.json({});
    } else {
      res.json({
        details: {
          ingredients: recipeDetails.ingredients,
          numSteps: recipeDetails.instructions.length,
        },
      });
    }
  });
});

app.post("/recipes", (req, res) => {
  if (!req.body.name || !req.body.ingredients || !req.body.instructions) {
    return res.json({ error: "Missing name, ingredients, or instructions" });
  }

  if (req.body.ingredients.length === 0 || req.body.instructions.length === 0) {
    return res.json({ error: "Empty ingredients or instructions array" });
  }

  let wrongIngredient = false;
  req.body.ingredients.forEach((item) => {
    if (typeof item !== "string") wrongIngredient = true;
  });
  if (wrongIngredient) return res.json({ error: "incorrect ingredient type" });

  let wrongInstruction = false;
  req.body.instructions.forEach((item) => {
    if (typeof item !== "string") wrongInstruction = true;
  });
  if (wrongInstruction)
    return res.json({ error: "incorrect instruction type" });

  fs.readFile("./data.json", "utf-8", (err, data) => {
    data = JSON.parse(data);

    const recipeExists = data.recipes.find(
      (recipe) => recipe.name === req.body.name
    );

    if (!recipeExists) {
      data.recipes.push(req.body);

      fs.writeFile("data.json", JSON.stringify(data), (err) => {
        if (err) throw err;
        // console.log("The file has been saved!");
      });

      res.sendStatus(201);
    } else {
      res.status(400).json({ error: "Recipe already exists" });
    }
  });
});

app.put("/recipes", (req, res) => {
  if (!req.body.name || !req.body.ingredients || !req.body.instructions) {
    return res.json({ error: "Missing name, ingredients, or instructions" });
  }

  if (req.body.ingredients.length === 0 || req.body.instructions.length === 0) {
    return res.json({ error: "Empty ingredients or instructions array" });
  }

  let wrongIngredient = false;
  req.body.ingredients.forEach((item) => {
    if (typeof item !== "string") wrongIngredient = true;
  });
  if (wrongIngredient) return res.json({ error: "incorrect ingredient type" });

  let wrongInstruction = false;
  req.body.instructions.forEach((item) => {
    if (typeof item !== "string") wrongInstruction = true;
  });
  if (wrongInstruction)
    return res.json({ error: "incorrect instruction type" });

  fs.readFile("./data.json", "utf-8", (err, data) => {
    data = JSON.parse(data);

    const existingRecipe = data.recipes.find(
      (recipe) => recipe.name === req.body.name
    );

    if (!existingRecipe) {
      res.status(404).json({ error: "Recipe does not exist" });
    } else {
      const filteredRecipes = data.recipes.filter(
        (recipe) => recipe.name !== req.body.name
      );
      filteredRecipes.push(req.body);

      fs.writeFile(
        "data.json",
        JSON.stringify({ recipes: filteredRecipes }),
        (err) => {
          if (err) throw err;
          console.log("Recipe updated");
          res.sendStatus(204);
        }
      );
    }
  });
});

app.listen(8080, () => console.log("App up on 8080"));
