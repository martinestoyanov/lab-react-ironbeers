import React from 'react';
import './App.css';
import { Switch, Route } from `react-router-dom`;
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import Home from './components/Home/Home';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/beers" component={}/>
        <Route exact path="/random" component={RandomBeer}/>
        <Route exact path="/new-beer"  component={NewBeer}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
