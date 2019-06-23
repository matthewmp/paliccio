import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Landing from "./landingPage/Landing";

import RecipeModal from './recipe/RecipeModal';
import AddEditModal from './add_modify_modal/AddEditModal';

import './app.css';

class App extends Component {
  state = {
    showModal: false,
    showAddRecipe: false
  }

  toggleModal = (e) => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  toggleAddRecipeModal = (e) => {
    this.setState({
      showAddRecipe: !this.state.showAddRecipe
    })
  }

  render() {
    let recipeModal = this.state.showModal ? <RecipeModal toggleModal={this.toggleModal}/> : '';
    let addRecipeModal = this.state.showAddRecipe ? <AddEditModal showHide={this.toggleAddRecipeModal}/> : '';
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Landing  toggleModal={this.toggleModal} toggleAddRecipeModal={this.toggleAddRecipeModal} />}  />
          </Switch>
          {recipeModal}
          {addRecipeModal}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
