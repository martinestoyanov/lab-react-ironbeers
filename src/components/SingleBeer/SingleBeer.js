import axios from 'axios';
import React, { Component } from 'react';

export default class SingleBeer extends Component {
  state = {
    singleBeerData: {},
  };

  componentDidMount() {
    const beerId = this.props.match.params.beerId;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((apiResponse) => {
        this.setState({ singleBeerData: apiResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.singleBeerData);
      return <div>
        <h1>
            <img src="" alt="">
                <p></p>
            </img>
        </h1>
    </div>;
  }
}
