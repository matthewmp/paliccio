import React, { Component } from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Landing from "./landingPage/Landing";
import Login from "./login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
