const express = require("express");

// importing author model
const Author=require('../models/author');

// Create an instance of the express Router class.
const router = express.Router();

// All authors Endpoint
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New Author Endpoint
router.get("/new", (req, res) => {
  res.render("authors/new",{author: new Author()}); // empty object for form
});

// Create New Author
router.post("/", (req, res) => {
  const author = new Author({
    name: req.body.name
  });

  author.save()
    .then((newAuthor) => {
      res.redirect('/authors');
    })
    .catch((err) => {
      res.render('authors/new', {
        author: author,
        message: err.message
      });
    });
});


// Exporting the module so it can be used in other files
module.exports = router;
