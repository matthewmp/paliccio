import React, { Component } from 'react';
import Ingredient from './Ingredient';
import './addEditModal.scss';

export default class AddIngredients extends Component {
    render() {
        return (
            <section className="add-edit-recipe-view add-ingredients">
                <div className="add-edit-recipe-label">Add Ingredients</div>
                <div className="add-recipe-inputs-wrapper">
                    <Ingredient />
                    <div className="add-recipe-btn-wrapper">
                        <button 
                            className="add-recipe" 
                            id="servingsPrevious" 
                            type="button"
                            data-transition="-200"
                            onClick={this.props.transition}>Previous
                        </button>
                        <button 
                            className="add-recipe" 
                            id="servingsNext" 
                            type="button"
                            onClick={this.props.transition}>Next
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}
