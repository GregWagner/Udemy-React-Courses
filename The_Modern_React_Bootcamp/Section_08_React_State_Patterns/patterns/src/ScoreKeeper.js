import React, { Component } from 'react';

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  singleKill() {
    this.setState({ score: this.state.score + 1 });
  }
  // note: this only adds 1 since setstate is async
  // tripleKill() {
  // this.setState({ score: this.state.score + 1 });
  // this.setState({ score: this.state.score + 1 });
  // this.setState({ score: this.state.score + 1 });
  // }

  // this works but messy
  // tripleKill() {
  //   this.setState((state) => {
  //     return { score: state.score + 1 };
  //   });
  //   this.setState((state) => {
  //     return { score: state.score + 1 };
  //   });
  //   this.setState((state) => {
  //     return { score: state.score + 1 };
  //   });
  // }

  incrementScore(curState) {
    return { score: curState.score + 1 };
  }
  tripleKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.tripleKill}>Triple Kill!</button>
      </div>
    );
  }
}

export default ScoreKeeper;