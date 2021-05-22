import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

export default class Beers extends Component {
  render() {
    const beersToRender = this.props.beers.map((beerData) => (
      <div>
        <Link to={`/beers/${beerData._id}`}>
          <img src={beerData.image_url} />
          <p>{beerData.name}</p>
        </Link>
      </div>
    ));
    return (
      <div>
        <NavBar />
        {beersToRender}
      </div>
    );
  }
}
