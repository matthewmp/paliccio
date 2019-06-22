import React, { Component } from 'react';
import Ingredient from './Ingredient';
import './addEditModal.scss';

export default class AddIngredients extends Component {
    state = {
        ingredients: [],
        length: 0
    }

    componentDidMount(){
        if(this.state.ingredients.length === 0){
            this.addIngredient();
        }
    }

    addIngredient = (e) => {
        console.log('Adding Ingredient');
        this.setState({
            ingredients: this.state.ingredients.concat(
                <Ingredient 
                    key={this.state.ingredients.length + 1}
                    dataId={this.state.ingredients.length + 1}
                    add={this.addIngredient}
                    remove={this.removeIngredient}
                    className = {this.state.ingredients.length + 1}
                />
            )
        })
    }

    removeIngredient = (e) => {
        var id = parseInt(e.target.parentNode.dataset.id);
        if(this.state.ingredients.length > 1){
            let tmpState = this.state.ingredients;
            tmpState.splice((id-1), 1);
            this.setState({ingredients: tmpState})
        }
        
        
        
    }
    render() {
        let ingredientComponents = [];
        
        for(let i = 0; i < this.state.ingredients.length; i++){
            ingredientComponents.push(this.state.ingredients[i]);
        }
        
        
        return (
            <section className="add-edit-recipe-view add-ingredients">
                <div className="add-edit-recipe-label">Add Ingredients</div>
                <div className="add-recipe-inputs-wrapper">
                    {ingredientComponents}
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
