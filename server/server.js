const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const {PORT, DATABASE_URL} = require('./config');

// Set mongoose promise
mongoose.Promise = global.Promise;

// Get Routes
const recipeRouter = require('./routes/recipes');

// Get access to environment variables
dotenv.config();

app.use(bodyParser.urlencoded({extended : true}));

// Setup morgan comments
app.use(morgan('common'));

// Serve up static files
app.use(express.static('public'));

// Forward to correct router
app.use('/recipes', recipeRouter.router);

let server;
function runServer(databaseURL=DATABASE_URL, port=PORT){
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseURL, {useNewUrlParser: true, useFindAndModify: false}, err => {
            if(err){
                return reject(err);
            }
            server = app.listen(port, () => {
                console.log(`App is listening on port: ${port}`);
                resolve();
            })
            .on('error', err => {
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}

console.log(DATABASE_URL)
runServer();