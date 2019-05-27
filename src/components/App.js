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
    showModal: false
  }

  toggleModal = (e) => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    let recipeModal = this.state.showModal ? <RecipeModal toggleModal={this.toggleModal}/> : '';
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Landing  toggleModal={this.toggleModal} />}  />
          </Switch>
          {recipeModal}
          <AddEditModal />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
