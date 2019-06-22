import React from 'react';

export default class Ingredient extends React.Component{
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

    render(){
        return(
            <div className="add-ingredient-wrapper" data-id={this.props.dataId}>
                <input 
                    type="text" 
                    className="inp-ingredient" 
                    placeholder="Type Ingredient"
                    value={this.state.ingredient}
                    onChange={this.handleIngredientChange}
                    required 
                />
                <input 
                    type="text" 
                    className="inp-amount" 
                    placeholder="Type Quantity i.e 2tsp" 
                    value={this.state.quantity}
                    onChange={this.handleQuantityChange}
                    required
                />
                <button 
                    type="button" 
                    className="btn-add-ingredient"
                    onClick={this.props.add}
                    >+</button>
                <button 
                    type="button" 
                    className="btn-add-ingredient"
                    onClick={this.props.remove}
                    >-</button>
            </div>
        )
    }
}