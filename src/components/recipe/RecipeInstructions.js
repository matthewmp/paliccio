import React, { Component } from 'react'

export default class RecipeInstructions extends Component {
    render() {
        return (
            <div className="instruction-wrapper">
                <span className="instruction-list-number">{this.props.listNumber}</span>
                <span className="instruction-list-item">{this.props.instructionInfo}</span>
            </div>
        )
    }
}
