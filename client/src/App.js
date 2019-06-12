import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { Route } from "react-router-dom";
import Rules from "./components/Rules";
import About from "./components/About";
import Game from "./yahtzee/Game";
import Dice from "./components/Dice";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rolledDice: [],
      heldDice: [],
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
  }

  incRoll = () => {
    if (this.state.rollsLeft > 0)
      this.setState({ rollsLeft: --this.state.rollsLeft });
    else this.setState({ rollsLeft: 3 });
  };

  rolledDice = rolledDice => {
    this.setState({ rolledDice });
  };

  holdDice = die => {
    if (!this.state.heldDice.includes(die))
      this.setState({ heldDice: [...this.state.heldDice, die] });
    else
      this.setState({ heldDice: this.state.heldDice.filter(d => d !== die) });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/about" component={About} />
        This is the home page
        <Dice
          rollsLeft={this.state.rollsLeft}
          heldDice={this.state.heldDice}
          incRoll={this.incRoll}
          rolledDice={this.rolledDice}
          holdDice={this.holdDice}
        />
      </div>
    );
  }
}

export default App;
