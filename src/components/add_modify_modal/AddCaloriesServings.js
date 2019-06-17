import React, { Component } from 'react'

export default class AddCaloriesServings extends Component {
    render() {
        return (
            <section className="add-edit-recipe-view calories-servings-info">
            <div className="add-edit-recipe-label">Calories / Servings</div>
                <div className="add-recipe-inputs-wrapper">
                    <input className="add-edit-recipe-name" 
                        type="text" 
                        placeholder="ESTIMATED CALORIES PER SERVING" 
                        onChange={this.props.handleCaloriesChange} 
                        value={this.props.caloriesVal}
                    />

                    <input 
                        type="text"
                        placeholder="ESTIMATED # OF SERVINGS"
                        onChange={this.props.handleServingsChange}
                        value={this.props.servingsVal}
                    />
                </div>
                <div className="add-recipe-btn-wrapper">
                    <button 
                        className="add-recipe" 
                        id="servingsPrevious" 
                        type="button"
                        data-transition="0"
                        onClick={this.props.transition}>Previous
                    </button>
                    <button 
                        className="add-recipe" 
                        id="servingsNext" 
                        type="button"
                        data-transition="-200"
                        onClick={this.props.transition}>Next
                    </button>
                </div>
            </section>
        )
    }
}
