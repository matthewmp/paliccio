import React from 'react'
import SearchForm from '../searchForm/SearchForm';
import RecipeInfoCard from '../recipe/RecipeInfoCard';

import './landing.css';

import axios from 'axios';
import RecipeModal from '../recipe/RecipeModal';
import AddEditModal from '../add_modify_modal/AddEditModal';

class Landing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latestRecipes: [],
            showRecipeModal: false,
            showAddRecipeModal: false
        }
    }

    toggleRecipeModal = () => {
        console.log(this.state.showRecipeModal)
        this.setState({showRecipeModal: !this.state.showRecipeModal})
    };

    toggleAddRecipeModal = () => {
        this.setState({showAddRecipeModal: !this.state.showAddRecipeModal});
    }

    componentDidMount(){
        axios.get('/recipes/latest', {headers: {'Content-Type': 'application/json'}})
        .then(recipes => {
            this.setState({latestRecipes: recipes.data});
        });
    }
    render(){
        console.log(this.state);
        let recipeModal = this.state.showRecipeModal ? <RecipeModal toggleModal={this.toggleRecipeModal} /> : null;
        let addRecipeModal = this.state.showAddRecipeModal ? <AddEditModal showHide={this.toggleAddRecipeModal} /> : null;

        let latestRecipes = this.state.latestRecipes.map((recipe, ind) => {
            return <RecipeInfoCard toggleModal={this.toggleRecipeModal} data={recipe} key={ind}/> 
        });

        return (
            <div>
                <SearchForm toggleAddRecipeModal={this.toggleAddRecipeModal} />
                <div className="new-recipe-header">
                    Recently Added Recipes
                </div>
                <div className="container new-recipes">
                    
                    <div className="row">
                        {latestRecipes}
                    </div>
                </div>
                {recipeModal}
                {addRecipeModal}
            </div>
        )
    }
}

export default Landing;