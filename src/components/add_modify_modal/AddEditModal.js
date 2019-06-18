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
        ingredients: []

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

    handleAddIngredient = (e) => {
        console.log("Add Ingredient");
    }

    handleRemoveIngredient = (e) => {
        console.log("Remove Ingredient");
    }

    transition = (e) => {
        const transitionAmount = e.target.dataset.transition;
        const editRecipeViews = document.getElementsByClassName('add-edit-recipe-view');
        console.log(editRecipeViews)
        for(let i = 0; i < editRecipeViews.length; i++){
            let element = editRecipeViews[i];
            element.style.transform = `translateX(${transitionAmount}%)`;
        }
    }

    render() {
        return (
            <div className="add-edit-modal-overlay">
                <div className="add-edit-modal-wrapper">
                    <div className="add-edit-modal-close">&times;</div>
                    <form id="add-edit-recipe-form">
                        <AddGeneralInfo 
                        handleNameChange={this.handleNameChange} 
                        handleDescriptionChange={this.handleDescriptionChange}
                        nameVal={this.state.name}
                        descriptionVal={this.state.description}
                        transition={this.transition}/>

                        <AddCaloriesServings 
                            handleCaloriesChange={this.handleCaloriesChange}
                            handleServingsChange={this.handleServingsChange}
                            caloriesVal={this.state.calories}
                            servingsVal={this.state.servings}
                            transition={this.transition}/>

                        <AddCookPrepTime
                            handlePrepTimeChange={this.handlePrepTimeChange}
                            handleCookTimeChange={this.handleCookTimeChange}
                            prepTimeVal={this.state.prepTime}
                            cookTimeVal={this.state.cookTime}
                            transition={this.transition}/>
                        
                        <AddIngredients
                            handleAddIngredient={this.handleAddIngredient}
                            handleRemoveIngredient={this.handleRemoveIngredient}
                            prepTimeVal={this.state.prepTime}
                            cookTimeVal={this.state.cookTime}
                            transition={this.transition}/>
                    </form>
                        
                </div>
            </div>
        )
    }
}
