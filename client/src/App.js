import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { Route } from "react-router-dom";
import Rules from "./components/Rules";
import About from "./components/About";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default App;
