import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ number: Math.floor(Math.random() * 10) + 1 });
  }

  render() {
    let msg;
    if (this.state.number === 7) {
      msg = 'YOU WIN!!!';
    } else {
      msg = <button onClick={this.handleClick}>Random Number</button>;
    }
    return (
      <div>
        <h1>Number is {this.state.number}</h1>
        {msg}
      </div>
    );
  }
}

export default Clicker;
