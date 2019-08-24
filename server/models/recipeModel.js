const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = Schema({
    name: {type: String},
    description: {type: String},
    calories: {type: Number},
    servings: {type: Number},
    prepTime1: {type: Number},
    prepTime2: {type: Number},
    cookTime1: {type: Number},
    cookTime2: {type: Number},
    ingredients: [{
        amount: {type: String},
        ingredient: {type: String}
    }],
    instructions: [{
        instruction: {type: String}
    }]
});

const Recipes = mongoose.model('recipes', recipeSchema);