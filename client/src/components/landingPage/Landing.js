import React from 'react'
import SearchForm from '../searchForm/SearchForm';
import RecipeInfoCard from '../recipe/RecipeInfoCard';
import RecipeModal from '../recipe/RecipeModal';
import AddEditModal from '../add_modify_modal/AddEditModal';

import axios from 'axios';
import { connect } from 'react-redux';

import './landing.css';

class Landing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latestRecipes: [],
            topVotedRecipes: [],
            showRecipeModal: false,
            showAddRecipeModal: false,
            currentRecipeId: ''
        }
    }

    toggleRecipeModal = (e, recipeId) => {
        if(recipeId){
            axios.get(`/recipes/${recipeId}`, {headers: {'Content-Type': 'application/json'}})
            .then(recipe => {
                this.setState({currentRecipe: recipe.data, showRecipeModal: true})
            })
            .catch(err => {
                alert('There appears to be an error.  Please try again later.')
            })
        } 
        else {
            this.setState({showRecipeModal: false})
        }
    };

    toggleAddRecipeModal = () => {
        this.setState({showAddRecipeModal: !this.state.showAddRecipeModal});
    }

    componentDidMount(){
        axios.get('/recipes/latest', {headers: {'Content-Type': 'application/json'}})
        .then(recipes => {
            this.setState({latestRecipes: recipes.data});
        })
        .catch(err => {
            console.log(err);
            alert(err);
        })

        axios.get('/recipes/topvoted', {headers: {'Content-Type': 'application/json'}})
        .then(recipes => {
            this.setState({topVotedRecipes: recipes.data})
        })
        .catch(err => {
            console.log(err);
            alert(err);
        })
    }
    render(){
        let recipeModal = this.state.showRecipeModal ? <RecipeModal toggleModal={this.toggleRecipeModal} recipe={this.state.currentRecipe} /> : null;
        let addRecipeModal = this.state.showAddRecipeModal ? <AddEditModal showHide={this.toggleAddRecipeModal} /> : null;

        let latestRecipes = this.state.latestRecipes.map((recipe, ind) => {
            return <RecipeInfoCard toggleModal={this.toggleRecipeModal} data={recipe} key={ind}/> 
        });

        let topVotedRecipes = this.state.topVotedRecipes.map((recipe, ind) => {
            return <RecipeInfoCard toggleModal={this.toggleRecipeModal} data={recipe} key={ind} />
        })

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

                <div className="new-recipe-header">
                    Top Voted Recipes
                </div>
                <div className="container new-recipes">
                    <div className="row">
                        {topVotedRecipes}
                    </div>
                </div>
                {recipeModal}
                {addRecipeModal}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    appState: state.current_recipe_id
})

export default connect(mapStateToProps)(Landing);