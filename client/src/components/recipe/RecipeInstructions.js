import React from 'react'

const RecipeInstructions = (props) => {
        return (
            <div className="instruction-wrapper">
                <span className="instruction-list-number">{props.listNumber}</span>
                <span className="instruction-list-item">{props.instructionInfo}</span>
            </div>
        )
}

export default RecipeInstructions;