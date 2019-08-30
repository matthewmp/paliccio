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
    votes: {type: Number, default: 0},
    ingredients: [{
        amount: {type: String},
        ingredient: {type: String}
    }],
    instructions: [{
        instruction: {type: String}
    }],
    created: {type: Date, default: Date.now()}
});

const Recipes = mongoose.model('recipes', recipeSchema);
module.exports = {Recipes};