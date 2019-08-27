import React from 'react'
import Ingredient from './Ingredient';


const IngredientsInfo = (props) => {
        // Create fake ingredient info for testing
        let ingredients = props.ingredients.map((ingredient, index) => {
           return <Ingredient listNumber={index+1} ingredientInfo={`${ingredient.amount} ${ingredient.ingredient}`} key={index} />
        });
        for(let i = 0; i < 7; i++){
            ingredients.push()
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