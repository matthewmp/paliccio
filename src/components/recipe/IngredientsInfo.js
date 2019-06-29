import React from 'react'
import Ingredient from './Ingredient';


const IngredientsInfo = () => {
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

export default IngredientsInfo;