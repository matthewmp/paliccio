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
        cookTime1: '',
        prepTime1: '',
        cookTime2: '',
        prepTime2: '',
        cookTimeMinHrs1: 'mins',
        prepTimeMinHrs1: 'mins',
        cookTimeMinHrs2: 'mins',
        prepTimeMinHrs2: 'mins',
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

    handlePrepTimeChange1 = (e) => {
        this.setState({prepTime1: e.target.value})
    }

    handleCookTimeChange1 = (e) => {
        this.setState({cookTime1: e.target.value})
    }

    handlePrepTimeChange2 = (e) => {
        this.setState({prepTime2: e.target.value})
    }

    handleCookTimeChange2 = (e) => {
        this.setState({cookTime2: e.target.value})
    }

    toggleCookTimeMinHrs1 = () => {
        if(this.state.cookTimeMinHrs1 === 'mins'){
            this.setState({cookTimeMinHrs1: 'hours'})
        } else {
            this.setState({cookTimeMinHrs1: 'mins'})
        }
    }

    toggleCookTimeMinHrs2 = () => {
        if(this.state.cookTimeMinHrs2 === 'mins'){
            this.setState({cookTimeMinHrs2: 'hours'})
        } else {
            this.setState({cookTimeMinHrs2: 'mins'})
        }
    }

    togglePrepTimeMinHrs1 = () => {
        console.log('Toggle Pre 1');
        if(this.state.prepTimeMinHrs1 === 'mins'){
            this.setState({prepTimeMinHrs1: 'hours'})
        } else {
            this.setState({prepTimeMinHrs1: 'mins'})
        }
    }

    togglePrepTimeMinHrs2 = () => {
        console.log('Toggle Pre 2');
        if(this.state.prepTimeMinHrs2 === 'mins'){
            this.setState({prepTimeMinHrs2: 'hours'})
        } else {
            this.setState({prepTimeMinHrs2: 'mins'})
        }
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
                            handlePrepTimeChange1={this.handlePrepTimeChange1}
                            handleCookTimeChange1={this.handleCookTimeChange1}
                            handlePrepTimeChange2={this.handlePrepTimeChange2}
                            handleCookTimeChange2={this.handleCookTimeChange2}
                            prepTimeVal1={this.state.prepTime1}
                            cookTimeVal1={this.state.cookTime1}
                            prepTimeVal2={this.state.prepTime2}
                            cookTimeVal2={this.state.cookTime2}
                            currentTransition={this.state.transition}
                            cookTimeMinHrs1={this.state.cookTimeMinHrs1}
                            prepTimeMinHrs1={this.state.prepTimeMinHrs1}
                            cookTimeMinHrs2={this.state.cookTimeMinHrs2}
                            prepTimeMinHrs2={this.state.prepTimeMinHrs2}
                            toggleCookTimeMinHrs1={this.toggleCookTimeMinHrs1}
                            togglePrepTimeMinHrs1={this.togglePrepTimeMinHrs1}
                            toggleCookTimeMinHrs2={this.toggleCookTimeMinHrs2}
                            togglePrepTimeMinHrs2={this.togglePrepTimeMinHrs2}
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
