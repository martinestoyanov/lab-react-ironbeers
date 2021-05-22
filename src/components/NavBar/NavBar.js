import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <div className="navbar">🏚</div>
        </Link>
      </div>
    );
  }
}
