import axios from 'axios';
import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

export default class RandomBeer extends Component {
  state = {
    beerData: {},
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((apiResponse) => {
        this.setState({ beerData: apiResponse.data });
        console.log(this.state.beerData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>
                <h1>{this.state.beerData.name}</h1>
                <p>{this.state.beerData.description}</p>
            </div>
            <div>
                <img src={this.state.beerData.image_url} />
            </div>

      </div>
    );
  }
}
