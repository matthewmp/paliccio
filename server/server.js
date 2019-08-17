const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

// app.get('/', (req, res) => {
    
// })

app.listen(3000, function(req, res){
    console.log('Running on Port 3000');
});