import React, { Component } from 'react'
import AddGeneralInfo from './AddGeneralInfo';
import AddCaloriesServings from './AddCaloriesServings';
import AddCookPrepTime from './AddCookPrepTime';
import AddIngredients from './AddIngredients';
import AddInstructions from './AddInstructions';
import axios from 'axios';

import './addEditModal.scss';

export default class AddEditModal extends Component {
    state = {
        user_key: '1234',
        name: '',
        description: '',
        calories: '',
        servings: '',
        prepTime1: "0",
        prepTime2: "0",
        cookTime1: "0",
        cookTime2: "0",
        ingredients: [],
        instructions: [],
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

    getIngredients = (ingredients) => {
        this.setState({ingredients: ingredients});
    }

    handleRemoveIngredient = (ingredientID) => {
        const newIngredientState = this.state.ingredients.filter(ingredient => ingredient.id !== ingredientID);
        this.setState({ingredients: newIngredientState})
    }

    getInstructions = (instructions) => {
        console.log('GET INS: ', instructions)
        this.setState({instructions: instructions});
    }

    handleRemoveInstruction = (instructionID) => {
        const newInstructionState = this.state.instructions.filter(instruction => instruction.id !== instructionID);
        this.setState({instructions: newInstructionState})
    }    

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state));
        axios.post(`/recipes`, this.state, {headers: {'Content-Type': 'application/json'}})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
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
                            transition={this.transition}/>
                        
                        <AddIngredients
                            handleAddIngredient={this.handleAddIngredient}
                            handleRemoveIngredient={this.handleRemoveIngredient}
                            getIngredients={this.getIngredients}
                            prepTimeVal={this.state.prepTime}
                            cookTimeVal={this.state.cookTime}
                            currentTransition={this.state.transition}
                            transition={this.transition}/>

                        <AddInstructions 
                            handleInstructions={this.handleInstructions}
                            submit={this.handleFormSubmit}
                            getInstructions={this.getInstructions}
                            handleRemoveInstruction={this.handleRemoveInstruction}
                            currentTransition={this.state.transition}
                            transition={this.transition}/>
                    </form>
                        
                </div>
            </div>
        )
    }
}
