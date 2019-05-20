import React, { Component } from 'react'
import './recipe-modal.css';

export default class RecipeModal extends Component {

  render() {
    return (
      <div className="recipe-modal">
        <div className="xClose" onClick={this.props.toggleModal}>&times;</div>
      </div>
    )
  }
}
