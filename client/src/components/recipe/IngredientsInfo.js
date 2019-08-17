import React, { Component } from 'react'
import Ingredient from './Ingredient';


export default class IngredientsInfo extends Component {
    render() {
        // Create fake ingredient info for testing
        let ingredients = [];
        for(let i = 0; i < 7; i++){
            ingredients.push(<Ingredient listNumber={i+1} ingredientInfo='1 Cup of flour' key={i} />)
        }
        return (
            <div className="ingredients-info">
                <div className="ingredients-info-wrapper row">
                    <span className="ingredients-label">Ingredients:</span>
                </div>
                <div className="ingredients-list">
                    {ingredients}
                </div>
            </div>
        )
    }
}
