import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { Route } from "react-router-dom";
import Rules from "./components/Rules";
import About from "./components/About";
import { rollDie } from "./yahtzee/RollDie";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rolledDice: [3, 3, 3, 3, 3],
      heldDice: [0, 0, 0, 0, 0],
      scorecard: [
        { label: "Ones", score: 0, filled: false },
        { label: "Twos", score: 0, filled: false },
        { label: "Threes", score: 0, filled: false },
        { label: "Fours", score: 0, filled: false },
        { label: "Fives", score: 0, filled: false },
        { label: "Sixes", score: 0, filled: false },
        { label: "3 of a Kind", score: 0, filled: false },
        { label: "4 of a Kind", score: 0, filled: false },
        { label: "Full House", score: 0, filled: false },
        { label: "Small Straight", score: 0, filled: false },
        { label: "Large Straight", score: 0, filled: false },
        { label: "Yahtzee", score: 0, filled: false },
        { label: "Chance", score: 0, filled: false }
      ],
      rollsLeft: 3
      // gameState: GameState.GameOver
    };
    this.handleRollClick = this.handleRollClick.bind(this);
    this.holdDie = this.holdDie.bind(this);
    this.unholdDie = this.unholdDie.bind(this);
    this.updateDice = this.updateDice.bind(this);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/about" component={About} />
        This is the home page
      </div>
    );
  }
}

export default App;
