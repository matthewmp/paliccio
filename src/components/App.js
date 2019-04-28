import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Landing from "./landingPage/Landing";
import Modal from './login/Modal';
import Login from './login/Login';

import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
