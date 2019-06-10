import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  state = {};

  render() {
    return (
      <Menu inverted>
        <Menu.Item as={NavLink} exact to="/" name="home">
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/rules" name="rules">
          How To Play
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/about" name="about">
          About
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
