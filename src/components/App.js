import React, { Component } from 'react';

import Header from './header/Header'
import Landing from './landingPage/Landing';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
