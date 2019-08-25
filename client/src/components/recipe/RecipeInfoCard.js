
import React, { Component } from 'react'
import './recipe.css';

export default class RecipeInfoCard extends Component {

  state = {
    showHoverInfo: false
  }

  toggleHoverInfo = (e) => {
    this.setState({
      showHoverInfo: !this.state.showHoverInfo
    });
  }

  showHoverState = (e) => {
    this.setState({
      showHoverInfo: true
    })
  }

  render() {
    const hoverClass = this.state.showHoverInfo ? 'recipe-card-hover show' : 'recipe-card-hover hide';
    let recipeDescription = this.props.data.description.length > 50 ? `${this.props.data.description.slice(0,50)}...` : this.props.data.description; 
    
    return (
      <div className="col s12 m4">
        <div className="card" onMouseEnter={this.toggleHoverInfo} onClick={this.props.toggleModal} data-recipe-id={this.props.data._id}>
          <div className="card-image">
              <img src="./images/bread.png" alt="bread"/>
            
          </div>
          <span className="card-title">{this.props.data.name}</span>
          <div className="card-content">
              {recipeDescription}
          </div>
        
          <div className={hoverClass} onMouseLeave={this.toggleHoverInfo} onClick={this.props.toggleModal}>
            <div className="hover-title">
              {this.props.data.name}
            </div>
            <div className="hover-info">
              <span>Serving Amount: {this.props.data.servings}</span>
              <span>Calories: {this.props.data.calories}</span>
              <span>Prep Time: {this.props.data.prepTime1}hrs {this.props.data.prepTime2} mins</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
