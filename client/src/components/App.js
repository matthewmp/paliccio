import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Landing from "./landingPage/Landing";

import './app.css';

class App extends Component {

  render() {
    // let recipeModal = this.state.showModal ? <RecipeModal toggleModal={this.toggleModal}/> : '';
    // let addRecipeModal = this.state.showAddRecipe ? <AddEditModal showHide={this.toggleAddRecipeModal}/> : '';
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Landing toggleModal={this.toggleModal} toggleAddRecipeModal={this.toggleAddRecipeModal}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
