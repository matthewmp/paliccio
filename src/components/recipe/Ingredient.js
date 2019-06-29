import React from 'react'

const Ingredient = (props) => {
        return (
            <div className="ingredient-wrapper">
                <span className="ingredient-list-number">{props.listNumber}</span>
                <span className="ingredient-list-item">{props.ingredientInfo}</span>
            </div>
        )
}

export default Ingredient;