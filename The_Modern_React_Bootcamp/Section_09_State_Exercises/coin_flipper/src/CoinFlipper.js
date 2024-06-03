import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      {
        side: 'heads',
        imgSrc: 'https://tinyurl.com/react-coin-heads-jpg',
      },
      {
        side: 'tails',
        imgSrc:
          'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg',
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currentCoin: null,
      numberOfFlips: 0,
      heads: 0,
      tails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.flipCoin = this.flipCoin.bind(this);
  }

  handleClick() {
    this.flipCoin();
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((state) => {
      return {
        currentCoin: newCoin,
        numberOfFlips: state.numberOfFlips + 1,
        heads: state.heads + (newCoin.side === 'heads' ? 1 : 0),
        tails: state.tails + (newCoin.side === 'tails' ? 1 : 0),
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Coin Flipper</h1>
        <h2> Let's Flip A Coin</h2>
        {this.state.currentCoin && <Coin info={this.state.currentCoin} />}
        <button onClick={this.handleClick}>Flip Coin</button>
        <p>
          Out of {this.state.numberOfFlips} flips, there have been{' '}
          {this.state.heads} heads and {this.state.tails} tails.{' '}
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
