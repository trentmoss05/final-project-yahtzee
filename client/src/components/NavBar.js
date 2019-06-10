import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {};

  render() {
    return (
      <header>
        <h2>Yahtzee</h2>
        <Link to="/">Play</Link> | <Link to="/rules">How to Play</Link> |
        <Link to="/about">About</Link>
      </header>
    );
  }
}

export default NavBar;
