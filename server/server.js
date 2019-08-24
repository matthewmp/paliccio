const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Get Routes
const recipeRouter = require('./routes/recipes');

// Get access to environment variables
dotenv.config();
// Setup morgan comments
app.use(morgan('common'));

// Serve up static files
app.use(express.static('public'));

// Forward to correct router
app.use('/recipes', recipeRouter.router);




app.listen(3000, function(req, res){
    console.log('Running on Port 3000');
});