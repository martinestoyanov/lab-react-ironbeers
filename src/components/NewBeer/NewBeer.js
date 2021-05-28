import axios from 'axios';
import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: ``,
    contributed_by: '',
  };

  stateHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push(`/beers`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <form onSubmit={this.submitHandler}>
          <input
            required
            type="text"
            name="name"
            onChange={this.stateHandler}
            placeholder="Name"
            value={this.state.name}
          />
          <input
            required
            type="text"
            name="tagline"
            onChange={this.stateHandler}
            placeholder="Tagline"
            value={this.state.tagline}
          />
          <input
            required
            type="text"
            name="description"
            onChange={this.stateHandler}
            placeholder="Description"
            value={this.state.description}
          />
          <input
            required
            type="text"
            name="first_brewed"
            onChange={this.stateHandler}
            placeholder="First Brewed"
            value={this.state.first_brewed}
          />
          <input
            required
            type="text"
            name="brewers_tips"
            onChange={this.stateHandler}
            placeholder="Brewer's Tips"
            value={this.state.brewers_tips}
          />
          <input
            required
            type="number"
            name="attentuation_level"
            onChange={this.stateHandler}
            placeholder="0"
            value={this.state.attenuation_level}
          />
          <input
            required
            type="text"
            name="contributed_by"
            onChange={this.stateHandler}
            placeholder="Contributed by"
            value={this.state.contributed_by}
          />
          <button type="submit">Submit New Beer</button>
        </form>
      </div>
    );
  }
}
