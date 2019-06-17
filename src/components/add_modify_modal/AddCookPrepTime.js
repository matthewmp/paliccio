import React, { Component } from 'react'

export default class AddCookPrepTime extends Component {
    render() {
        return (
            <section className="add-edit-recipe-view calories-servings-info">
            <div className="add-edit-recipe-label">Cook / Prep Time</div>
                <div className="add-recipe-inputs-wrapper">
                    <input className="add-edit-recipe-name" 
                        type="text" 
                        placeholder="ESTIMATED PREP TIME" 
                        onChange={this.props.handleCaloriesChange} 
                        value={this.props.caloriesVal}
                    />

                    <input 
                        type="text"
                        placeholder="ESTIMATED COOK TIME"
                        onChange={this.props.handleServingsChange}
                        value={this.props.servingsVal}
                    />
                </div>
                <button 
                    className="add-recipe" 
                    id="servingsPrevious" 
                    type="button"
                    data-transition="-100"
                    onClick={this.props.transition}>Previous
                </button>
                <button 
                    className="add-recipe" 
                    id="servingsNext" 
                    type="button"
                    
                    onClick={this.props.transition}>Next</button>
            </section>
        )
    }
}
