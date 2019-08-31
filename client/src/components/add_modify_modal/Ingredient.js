import React from 'react';

export default class Ingredient extends React.Component{
    constructor(props){
        super(props);
        this.ingredient = React.createRef();
        this.amount = React.createRef()
    }
    state = {
        ingredient: '',
        quantity: ''
    }

    handleIngredientChange = (e) => {
        this.setState({
            ingredient: e.target.value
        })
    }

    handleQuantityChange = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }

    handleAddIngredient = () => {
        if(this.ingredient.current.value.trim() !== "" && this.amount.current.value !== ""){
            this.props.add();
        }
    }

    render(){
        return(
            <div className="add-ingredient-wrapper" data-id={this.props.dataId}>
                <input 
                    tabIndex={this.props.tabIndex} 
                    type="text" 
                    className="inp-ingredient add-edit-recipe-input" 
                    placeholder="Type Ingredient"
                    value={this.state.ingredient}
                    onChange={this.handleIngredientChange}
                    onFocus={this.props.toggleTabIndex}
                    ref={this.ingredient}
                    required 
                />
                <input 
                    tabIndex={this.props.tabIndex} 
                    type="text" 
                    className="inp-amount add-edit-recipe-input" 
                    placeholder="Type Quantity i.e 2tsp" 
                    value={this.state.quantity}
                    onChange={this.handleQuantityChange}
                    ref={this.amount}
                    required
                />
                <button 
                    tabIndex={this.props.tabIndex}
                    type="button" 
                    className="btn-add-ingredient"
                    onClick={this.handleAddIngredient}
                    >+</button>
                <button 
                    tabIndex={this.props.tabIndex}
                    type="button" 
                    className="btn-add-ingredient"
                    onClick={this.props.remove}
                    >-</button>
            </div>
        )
    }
}