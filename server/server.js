const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');

// Get access to environment variables
dotenv.config();
// Setup morgan comments
app.use(morgan('common'));

// Serve up static files
app.use(express.static('public'));



app.listen(3000, function(req, res){
    console.log('Running on Port 3000');
});