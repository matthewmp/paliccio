import React from 'react'
import SearchForm from '../searchForm/SearchForm';
import RecipeInfoCard from '../recipe/RecipeInfoCard';

import './landing.css';

import axios from 'axios';

class Landing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latestRecipes: []
        }
    }
    componentDidMount(){
        axios.get('/recipes/latest', {headers: {'Content-Type': 'application/json'}})
        .then(recipes => {
            this.setState({latestRecipes: recipes.data});
        });
    }
    render(){
        let latestRecipes = this.state.latestRecipes.map((recipe, ind) => {
            return <RecipeInfoCard toggleModal={this.props.toggleModal} data={recipe} key={ind}/> 
        });

        return (
            <div>
                <SearchForm toggleAddRecipeModal={this.props.toggleAddRecipeModal} />
                <div className="new-recipe-header">
                    Recently Added Recipes
                </div>
                <div className="container new-recipes">
                    
                    <div className="row">
                        {/* <div className="col s12 m4">
                            <RecipeInfoCard toggleModal={this.props.toggleModal} /> 
                        </div>
                        <div className="col s12 m4">
                            <RecipeInfoCard toggleModal={this.props.toggleModal} /> 
                        </div>
                        <div className="col s12 m4">
                            <RecipeInfoCard toggleModal={this.props.toggleModal} /> 
                        </div> */}
                        {latestRecipes}
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default Landing;