import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedec.css';

class Pokedec extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedec-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedec-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedec">
        {title}
        <h4>Total experience: {this.props.exp}</h4>
        <div className="Pokedec-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedec;
