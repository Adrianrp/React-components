import React, { Component } from 'react';
import Header from './Header';
import SignIn from "./SignIn";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SignIn/>
      </div>
    );
  }
}

export default App;
