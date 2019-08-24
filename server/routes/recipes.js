const express = require('express');
const router = express.Router();

// Get all recipes
router.get('/', (req, res) => {
    res.send('All Recipes');
});


module.exports = {
    router
}