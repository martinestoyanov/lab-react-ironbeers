import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

export default class Beers extends Component {
  searchHandler = (query) => {
    console.log(query);
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query.target.value}`
      )
      .then((searchResponse) => {
        // console.log(searchResponse);
        this.props.handleBeersUpdate(searchResponse.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={this.searchHandler}
        />
        {beersToRender}
      </div>
    );
  }
}
