const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {Recipes} = require('../models/recipeModel');

// Get all recipes
router.get('/', (req, res) => {
    Recipes.find()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json(err);
    })
    
});

// Get last 3 recipes
router.get('/latest', (req, res) => {
    Recipes.find()
    .sort({'created': 'desc'})
    .limit(3)
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

// Get by ID
router.get('/:id', (req, res) => {
    Recipes.findById({_id: req.params.id})
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Post New Recipe
router.post('/', bodyParser.json(), (req, res) => {
    const requiredFields = ['name','description','calories','servings','prepTime1','prepTime2','cookTime1','cookTime2','ingredients','instructions'];
    
    for(let i = 0; i < requiredFields.length; i++){
        let field = requiredFields[i];
        if(!req.body[field]){
            const message = `Missing ${field}`;
            res.status(422).json(message);
            return;
        }
    }

    const recipeRequest = {
        name: req.body.name,
        description: req.body.description,
        calories: req.body.calories,
        servings: req.body.servings,
        prepTime1: req.body.prepTime1,
        prepTime2: req.body.prepTime2,
        cookTime1: req.body.cookTime1,
        cookTime2: req.body.cookTime2,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    }
    
    postRecipe(recipeRequest)
    .then(recipe => {
        res.json(recipe);
    })
    .catch(err => {
        console.log('err: ', err);
        res.json(err);
    })
})

// Update Recipe Vote
router.put('/voteup/:id', bodyParser.json(), (req, res) => {
    console.log('PUTTIN: ', req.params.id)
    Recipes.findByIdAndUpdate(req.params.id, {$inc: {votes: 1}}, {new: true})
    .then(recipe => {
        // console.log(recipe)
        res.status(200).json(recipe);
    })
    .catch(err => {
        console.log(err);
        res.json(err)
    })
})

router.put('/votedown/:id', bodyParser.json(), (req, res) => {
    console.log('PUTTIN: ', req.params.id)
    Recipes.findByIdAndUpdate(req.params.id, {$inc: {votes: -1}}, {new: true})
    .then(recipe => {
        // console.log(recipe)
        res.status(200).json(recipe);
    })
    .catch(err => {
        console.log(err);
        res.json(err)
    })
})

// Route Funcs
function postRecipe(recipeRequest){
    return new Promise((resolve, reject) => {
        Recipes
		.create(recipeRequest)
		.then((recipe) => {
            resolve(recipe);
        })
        .catch(err => {
            console.log(err);
            reject(err);
        });
    });
}

module.exports = {
    router
}
