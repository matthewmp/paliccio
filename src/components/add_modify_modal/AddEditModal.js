import React, { Component } from 'react'
import AddGeneralInfo from './AddGeneralInfo';
import AddCaloriesServings from './AddCaloriesServings';
import AddCookPrepTime from './AddCookPrepTime';
import AddIngredients from './AddIngredients';

import './addEditModal.scss';

export default class AddEditModal extends Component {
    state = {
        name: '',
        description: '',
        calories: '',
        servings: '',
        cookTime: '',
        prepTime: '',
        ingredients: [],
        transition: "0"

    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value})
    }

    handleCaloriesChange = (e) => {
        this.setState({calories: e.target.value})
    }

    handleServingsChange = (e) => {
        this.setState({servings: e.target.value})
    }

    handlePrepTimeChange = (e) => {
        this.setState({prepTime: e.target.value})
    }

    handleCookTimeChange = (e) => {
        this.setState({cookTime: e.target.value})
    }

    getIngredients = (ingredients) => {
        this.setState({ingredients: ingredients});
    }

    handleRemoveIngredient = (ingredientID) => {
        const newIngredientState = this.state.ingredients.filter(ingredient => ingredient.id !== ingredientID);
        this.setState({ingredients: newIngredientState})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    transition = (e) => {
        const transitionAmount = e.target.dataset.transition;
        const editRecipeViews = document.getElementsByClassName('add-edit-recipe-view');
        
        for(let i = 0; i < editRecipeViews.length; i++){
            let element = editRecipeViews[i];
            element.style.transform = `translateX(${transitionAmount}%)`;
        }
        this.setState({transition: transitionAmount})
    }

    render() {
        return (
            <div className="add-edit-modal-overlay">
                <div className="add-edit-modal-wrapper">
                    <div className="add-edit-modal-close" onClick={this.props.showHide}>&times;</div>
                    <form id="add-edit-recipe-form">
                        <AddGeneralInfo 
                        handleNameChange={this.handleNameChange} 
                        handleDescriptionChange={this.handleDescriptionChange}
                        nameVal={this.state.name}
                        descriptionVal={this.state.description}
                        currentTransition={this.state.transition}
                        transition={this.transition}/>

                        <AddCaloriesServings 
                            handleCaloriesChange={this.handleCaloriesChange}
                            handleServingsChange={this.handleServingsChange}
                            caloriesVal={this.state.calories}
                            servingsVal={this.state.servings}
                            currentTransition={this.state.transition}
                            transition={this.transition}/>

                        <AddCookPrepTime
                            handlePrepTimeChange={this.handlePrepTimeChange}
                            handleCookTimeChange={this.handleCookTimeChange}
                            prepTimeVal={this.state.prepTime}
                            cookTimeVal={this.state.cookTime}
                            currentTransition={this.state.transition}
                            transition={this.transition}/>
                        
                        <AddIngredients
                            handleAddIngredient={this.handleAddIngredient}
                            handleRemoveIngredient={this.handleRemoveIngredient}
                            submit={this.handleFormSubmit}
                            getIngredients={this.getIngredients}
                            prepTimeVal={this.state.prepTime}
                            cookTimeVal={this.state.cookTime}
                            currentTransition={this.state.transition}
                            transition={this.transition}/>
                    </form>
                        
                </div>
            </div>
        )
    }
}
