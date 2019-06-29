import React from 'react'
import RecipeInstructions from './RecipeInstructions';

const InstructionsInfo = () => {
        // Create fake instructions info for testing
        let instructions = [];
        for(let i = 0; i < 7; i++){
            instructions.push(<RecipeInstructions listNumber={i+1} instructionInfo='Pre-Heat Oven 350 Degrees' key={i} />)

        }
        return (
            <div className="instructions-info">
                <div className="recipe-instructions-wrapper row">
                    <span className="instructions-label">Instructions:</span>
                </div>
                <div className="instructions-list">
                    {instructions}
                </div>
            </div>
        )
}

export default InstructionsInfo;
