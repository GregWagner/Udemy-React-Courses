import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls }),
    };
    this.generate = this.generate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    this.setState((curState) => ({
      nums: curState.nums
        .map((num) => Math.floor(Math.random() * this.props.maxNum) + 1)
        .sort((a, b) => a - b),
    }));
  }
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((num) => (
            <Ball num={num} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
