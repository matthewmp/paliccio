import React from 'react'
import ChefInfo from './ChefInfo_Vote';
import IngredientsInfo from './IngredientsInfo';
import InstructionsInfo from './InstructionsInfo';
import Votes from './Votes';
import './recipe-modal.css';

class RecipeModal extends React.Component{
  
  render(){
    console.log(this.props.recipe._id)
    return (
      <div className="recipe-modal">
        <div className="xClose" onClick={this.props.toggleModal}>&times;</div>
        <div className="recipe-modal-header container">
          <div className="recipe-modal-header row">
            
              <div className="col l2 s12 recipe-modal-header-r1 offset-s2 img-wrapper">
                <img className="recipe-image" src="./images/bread.png" alt=""/>
              </div>
              <div className="col l8 s12 recipe-modal-header-r1 offset-s2">
                <div className="recipe-header-info">
                  <div className="recipe-title">{this.props.recipe.name}</div>
                    <div className="recipe-time-info row">
                      <div className="clock-wrapper col s3">
                        <img src="./images/clock.svg" alt="cook time info"/>
                      </div>
                      <div className="prep-time-wrapper col s3">
                        <div className="recipe-header-label">Prep</div>
                        <div className="prep-time">
                          <span className="recipe-header-number">{this.props.recipe.prepTime1}</span>
                          <span className="min-hour">h</span>
                        </div>
                        <div className="prep-time">
                          <span className="recipe-header-number">{this.props.recipe.prepTime2}</span>
                          <span className="min-hour">m</span>
                        </div>
                      </div>
                      <div className="cook-time-wrapper col s3">
                        <div className="recipe-header-label">Cook</div>
                        <div className="cook-time">
                          <span className="number recipe-header-number">{this.props.recipe.prepTime1}</span>
                          <span className="min-hour">h</span>
                        </div>
                        <div className="cook-time">
                          <span className="number recipe-header-number">{this.props.recipe.prepTime2}</span>
                          <span className="min-hour">m</span>
                        </div>
                      </div>
                      <Votes votes={this.props.recipe.votes} recipeId={this.props.recipe._id} />
                    </div>
                    
                    <div className="cal-servings-wrapper">
                      <span className="calories recipe-header-label">Calories:</span>
                      <span className="calories recipe-header-number">{this.props.recipe.calories}</span>
                      <span className="servings recipe-header-label">Servings: </span>
                      <span className="servings recipe-header-number">{this.props.recipe.servings}</span>
                    </div>
                </div>
              </div>
          </div>
          <div className="divider"></div>
          <ChefInfo />
          <div className="divider"></div>
            <IngredientsInfo ingredients={this.props.recipe.ingredients}/>
          <div className="divider"></div>
            <InstructionsInfo instructions={this.props.recipe.instructions} />
        </div>
      </div>
    )
  }
}

export default RecipeModal;