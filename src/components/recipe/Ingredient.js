import React, { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        return (
            <div className="ingredient-wrapper">
                <span className="ingredient-list-number">{this.props.listNumber}</span>
                <span className="ingredient-list-item">{this.props.ingredientInfo}</span>
            </div>
        )
    }
}
