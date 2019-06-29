import React from 'react'
import SearchForm from '../searchForm/SearchForm';
import RecipeInfoCard from '../recipe/RecipeInfoCard';

import './landing.css';

const Landing = (props) => {
        return (
            <div>
                <SearchForm toggleAddRecipeModal={props.toggleAddRecipeModal} />
                <div className="new-recipe-header">
                    Recently Added Recipes
                </div>
                <div className="container new-recipes">
                    
                    <div className="row">
                        <div className="col s12 m4">
                            <RecipeInfoCard toggleModal={props.toggleModal} /> 
                        </div>
                        <div className="col s12 m4">
                            <RecipeInfoCard toggleModal={props.toggleModal} /> 
                        </div>
                        <div className="col s12 m4">
                            <RecipeInfoCard toggleModal={props.toggleModal} /> 
                        </div>
                    </div>
                </div>

            </div>
        )
}

export default Landing;