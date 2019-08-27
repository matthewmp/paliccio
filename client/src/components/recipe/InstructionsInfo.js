import React from 'react'
import RecipeInstructions from './RecipeInstructions';

const InstructionsInfo = (props) => {
        let instructions = props.instructions.map((instruction, index) => {
            return <RecipeInstructions listNumber={index+1} instructionInfo={instruction.instruction} key={index} />
        });

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
