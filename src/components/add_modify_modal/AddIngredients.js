import React, { Component } from 'react';
import Ingredient from './Ingredient';
import './addEditModal.scss';

export default class AddIngredients extends Component {
    constructor(props){
        super(props);
        this.ingredientConatiner = React.createRef();
    }

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
        });
    }

    collectAllIngredients = () => {
        const allIngredientWrappers = [...this.ingredientConatiner.current.childNodes];
        let ingredientsObject = allIngredientWrappers.map((node) => {
            return {ingredient: node.childNodes[0].value, amount: node.childNodes[1].value}
        });

        this.props.getIngredients(ingredientsObject);
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
                    <div className="ingredient-component-container" ref={this.ingredientConatiner} onChange={this.collectAllIngredients}>
                        {ingredientComponents}
                    </div>
                    
                    <div className="add-recipe-btn-wrapper">
                        <button
                            tabIndex="-1" 
                            className="add-recipe" 
                            id="servingsPrevious" 
                            type="button"
                            data-transition="-200"
                            onClick={this.props.transition}>Previous
                        </button>
                        <button
                            tabIndex="-1" 
                            className="add-recipe" 
                            id="servingsNext" 
                            type="submit"
                            onClick={this.props.submit}>Submit
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}
