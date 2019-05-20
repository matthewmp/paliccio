
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

    return (
      <div className="card" onMouseEnter={this.toggleHoverInfo} onClick={this.props.toggleModal}>
        <div className="card-image">
            <img src="./images/bread.png" alt="bread"/>
           
        </div>
        <span className="card-title">TITLE</span>
        <div className="card-content">
            HERE IS THE CONTENT
        </div>
       
        <div className={hoverClass} onMouseLeave={this.toggleHoverInfo} onClick={this.props.toggleModal}>
          <div className="hover-title">
            Title
          </div>
          <div className="hover-info">
            <span>Serving Amount:</span>
            <span>Calories: </span>
            <span>Prep Time: </span>
          </div>
        </div>
      </div>
    )
  }
}
