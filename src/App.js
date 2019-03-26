import React, { Component } from 'react';
import Header from "./components/Header";
import Button from "./components/Button";
import Quotes from "./components/Quotes";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Button />
        <Quotes />
      </div>
    );
  }

}


export default App;
