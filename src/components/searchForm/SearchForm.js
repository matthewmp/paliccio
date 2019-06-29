import React, { Component } from 'react'

import './searchForm.scss';

export default class SearchForm extends Component {
    constructor(props){
        super(props);
        this.searchInput = React.createRef();
    }

    state = {
        inputText: ''
    }

    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Send To DB: ', this.state.inputText);
    }

    render() {
        return (
        <div className="container search-wrapper" onSubmit={this.handleSubmit}>
            <form className="search-form">
                <input type="text" className="inp-search" 
                    placeholder="Find a recipe" 
                    value={this.state.inputText}
                    onChange={this.handleChange}
                />

                <button className="btn-search">
                    <img src="./images/magnify_glass.svg" alt=""/>
                </button>
            </form>
            <div className="btn-add-recipe-wrapper" onClick={this.props.toggleAddRecipeModal}>
                <img src="./images/add-btn.svg" alt=""/>
                <p className="add-btn-text">Add New Recipe</p>
            </div>
        </div>
        )
  }
}
