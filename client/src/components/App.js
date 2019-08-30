import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Landing from "./landingPage/Landing";

import store from '../store/store';

import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Provider store={store}>
            <Landing toggleModal={this.toggleModal} toggleAddRecipeModal={this.toggleAddRecipeModal}/>
          </Provider>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
