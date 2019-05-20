import React, { Component } from 'react'
import SearchForm from '../searchForm/SearchForm';
import RecipeInfoCard from '../recipe/RecipeInfoCard';

import './landing.css';

export default class Landing extends Component {
    render() {
        return (
        <div>
            <SearchForm />
            <div className="new-recipe-header">
                Recently Added Recipes
            </div>
            <div className="container new-recipes">
                
                <div className="row">
                    <div className="col s12 m4">
                        <RecipeInfoCard toggleModal={this.props.toggleModal} /> 
                    </div>
                    <div className="col s12 m4">
                        <RecipeInfoCard toggleModal={this.props.toggleModal} /> 
                    </div>
                    <div className="col s12 m4">
                        <RecipeInfoCard toggleModal={this.props.toggleModal} /> 
                    </div>
                </div>
            </div>
            
        </div>
        )
  }
}
