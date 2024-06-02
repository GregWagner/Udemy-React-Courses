import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
    };
  }

  render() {
    return (
      <div>
        <h1>Your score is {this.state.score}</h1>
        <h1>Game Over: {this.state.gameOver.toString()}</h1>
      </div>
    );
  }
}

export default Game;
