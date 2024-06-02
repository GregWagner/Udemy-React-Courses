import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Clicker from './Clicker';
import Game from './Game';
import Rando from './Rando';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
        <Rando maxNum={7} />
        <Button />
        <Clicker />
      </div>
    );
  }
}

export default App;
