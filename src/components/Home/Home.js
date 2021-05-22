import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>IronBeers v2 </h1>
        <div>
          <Link to="/beers">
            <img src={'../../assets/beers.png'} />
            <h2>Beers</h2>
          </Link>
        </div>
        <Link to="/new-beer">
          <img src={'../../assets/new-beer.png'} />
          <h2>New Beer</h2>
        </Link>
        <Link to="/random">
          <img src={'../../assets/random-beer.png'} />
          <h2>Random Beer</h2>
        </Link>
      </div>
    );
  }
}
