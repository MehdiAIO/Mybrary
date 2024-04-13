const express = require("express");

// importing author model
const Author = require("../models/author");

// Create an instance of the express Router class.
const router = express.Router();

// All authors Endpoint
router.get("/", async (req, res) => {
  try {
    const authors = await Author.find(); // get all authors
    res.render("authors/index", { authors: authors });
  } catch (err) {
    res.redirect("/");
  }
});

// New Author Endpoint
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author(), errorMessage: "" }); // empty object for form
});

// Create New Author
router.post("/", async (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  try {
    const newAuthor = await author.save();
    res.redirect("/authors");
  } catch (error) {
    let errorMessage = "Error creating author";
    if (error.code === 11000) {
      // Duplicate key error
      errorMessage = "Author with this name already exists";
    }
    res.render("authors/new", {
      author: author,
      errorMessage: errorMessage,
    });
  }
});

module.exports = router;
