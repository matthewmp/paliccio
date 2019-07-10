import React, { Component } from 'react';
import Ingredient from './Ingredient';
import uuidv4 from 'uuid/v4';
import './addEditModal.scss';

export default class AddIngredients extends Component {
    constructor(props){
        super(props);
        this.ingredientConatiner = React.createRef();
    }

    state = {
        ingredients: []
    }

    componentDidMount(){
        if(this.state.ingredients.length === 0){
            this.addIngredient();
        }
    }

    inputsAreFilled = (ingredientContainerElement) => {
        let areFilled = true;
        ingredientContainerElement.forEach(container => {
            if(container.childNodes[0].value.trim() === "" || container.childNodes[1].value.trim() === ""){
                areFilled = false;
            }
        });
        return areFilled;
    }

    addIngredient = (e) => {
        if(this.inputsAreFilled(this.ingredientConatiner.current.childNodes)){
            this.setState({
                ingredients: this.state.ingredients.concat(
                    <Ingredient 
                        key={uuidv4()}
                        dataId={uuidv4()}
                        add={this.addIngredient}
                        remove={this.removeIngredient}
                        className = {this.state.ingredients.length + 1}
                    />
                )
            });
        };
    }

    collectAllIngredients = () => {
        const allIngredientWrappers = [...this.ingredientConatiner.current.childNodes];
        let ingredientsObject = allIngredientWrappers.map((node) => {

            const ingredient = node.childNodes[0].value;
            const amount = node.childNodes[1].value;
            return {ingredient, amount, id: node.dataset.id}
        })
        .filter(ingredientObject => (ingredientObject.ingredient.trim() && ingredientObject.amount.trim()))
        
        this.props.getIngredients(ingredientsObject);
    }

    removeIngredient = (e) => {
        var id = e.target.parentNode.dataset.id;
        if(this.state.ingredients.length > 1){
            let tmpState = this.state.ingredients;
            let index = tmpState.map(item => item.props.dataId).indexOf(id);
            tmpState.splice(index, 1);
            this.setState({ingredients: tmpState});
            this.props.handleRemoveIngredient(id);
        }
        
    }

    submit = (e) => {
        this.props.submit(e);
    }

    render() {
        return (
            <section className="add-edit-recipe-view add-ingredients">
                <div className="add-edit-recipe-label modal-label">Add Ingredients</div>
                <div className="add-recipe-inputs-wrapper">
                    <div className="ingredient-component-container" ref={this.ingredientConatiner} onChange={this.collectAllIngredients}>
                        {this.state.ingredients}
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
                            onClick={this.submit}>Submit
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}
