import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import axios from 'axios';

export default class App extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((responseFromApi) => {
        this.setState({ beers: responseFromApi.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/beers"
            render={() => <Beers beers={this.state.beers} />}
          />
          <Route exact path="/random" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
