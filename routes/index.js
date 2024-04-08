const express = require('express');

// Create an instance of the express Router class.
const router = express.Router();

// Get Endpoint
router.get('/',(req,res) => {
    res.render('index')
});

// Exporting the module so it can be used in other files
module.exports = router;  

