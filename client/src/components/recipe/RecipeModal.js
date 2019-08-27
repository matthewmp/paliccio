import React from 'react'
import ChefInfo from './ChefInfo_Vote';
import IngredientsInfo from './IngredientsInfo';
import InstructionsInfo from './InstructionsInfo';

import './recipe-modal.css';

const RecipeModal = (props) => {
    return (
      <div className="recipe-modal">
        <div className="xClose" onClick={props.toggleModal}>&times;</div>
        <div className="recipe-modal-header container">
          <div className="recipe-modal-header row">
            
              <div className="col l2 s12 recipe-modal-header-r1 offset-s2 img-wrapper">
                <img className="recipe-image" src="./images/bread.png" alt=""/>
              </div>
              <div className="col l8 s12 recipe-modal-header-r1 offset-s2">
                <div className="recipe-header-info">
                  <div className="recipe-title">{props.recipe.name}</div>
                    <div className="recipe-time-info row">
                      <div className="clock-wrapper col s3">
                        <img src="./images/clock.svg" alt="cook time info"/>
                      </div>
                      <div className="prep-time-wrapper col s3">
                        <div className="recipe-header-label">Prep</div>
                        <div className="prep-time">
                          <span className="recipe-header-number">{props.recipe.prepTime1}</span>
                          <span className="min-hour">h</span>
                        </div>
                        <div className="prep-time">
                          <span className="recipe-header-number">{props.recipe.prepTime2}</span>
                          <span className="min-hour">m</span>
                        </div>
                      </div>
                      <div className="cook-time-wrapper col s3">
                        <div className="recipe-header-label">Cook</div>
                        <div className="cook-time">
                          <span className="number recipe-header-number">{props.recipe.prepTime1}</span>
                          <span className="min-hour">h</span>
                        </div>
                        <div className="cook-time">
                          <span className="number recipe-header-number">{props.recipe.prepTime2}</span>
                          <span className="min-hour">m</span>
                        </div>
                      </div>
                      <div className="recipe-votes-wrapper col s3">
                        <div className="recipe-votes-container">
                            <div className="up-vote">
                                <img src="./images/upvote.svg" alt="upvote"/>
                            </div>
                            <div className="vote-text-wrapper">
                                <span className="recipe-header-label">Votes: </span>
                                <span className="recipe-header-amount vote-amount">{props.recipe.votes || 0}</span>
                            </div>
                            <div className="down-vote">
                                <img src="./images/downvote.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="cal-servings-wrapper">
                      <span className="calories recipe-header-label">Calories:</span>
                      <span className="calories recipe-header-number">{props.recipe.calories}</span>
                      <span className="servings recipe-header-label">Servings: </span>
                      <span className="servings recipe-header-number">{props.recipe.servings}</span>
                    </div>
                </div>
              </div>
          </div>
          <div className="divider"></div>
          <ChefInfo />
          <div className="divider"></div>
            <IngredientsInfo ingredients={props.recipe.ingredients}/>
          <div className="divider"></div>
            <InstructionsInfo instructions={props.recipe.instructions} />
        </div>
      </div>
    )
}

export default RecipeModal;