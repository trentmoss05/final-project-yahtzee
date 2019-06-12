import React from "react";
import One from "../images/1.png";
import Two from "../images/2.png";
import Three from "../images/3.png";
import Four from "../images/4.png";
import Five from "../images/5.png";
import Six from "../images/6.png";
import { rollDie } from "../yahtzee/RollDie";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dice: [] };
    this.One = One;
    this.Two = Two;
    this.Three = Three;
    this.Four = Four;
    this.Five = Five;
    this.Six = Six;
  }

  mapNumToImg(number) {
    switch (number) {
      case 1:
        return this.One;
      case 2:
        return this.Two;
      case 3:
        return this.Three;
      case 4:
        return this.Four;
      case 5:
        return this.Five;
      case 6:
        return this.Six;
    }
  }

  rollDice = () => {
    if (this.props.rollsLeft > 0) {
      let dice = [];
      for (let i = 0; i < 5; i++) {
        if (this.props.heldDice.includes(i)) dice.push(this.state.dice[i]);
        else dice.push(rollDie());
      }
      this.props.incRoll();
      let values = [];
      this.setState({ dice }, () => {
        let values = [...document.getElementsByClassName("dice")].map(die => {
          return parseInt(die.dataset.val);
        });
        this.props.rolledDice(values);
      });
    }
  };

  render() {
    let diceState = this.props.resetDice ? [] : this.state.dice;
    let dice = diceState.map((die, i) => {
      let selected = this.props.heldDice.includes(i)
        ? { border: "5px solid red" }
        : {};
      let style = Object.assign({ width: "30%", cursor: "pointer" }, selected);
      return (
        <div>
          <img
            style={style}
            src={this.mapNumToImg(die)}
            onClick={() => this.props.holdDice(i)}
          />
        </div>
      );
    });

    return (
      <div className="row">
        <div>
          {this.props.turnOver ? null : (
            <button
              onClick={this.rollDice}
              className=""
              style={
                this.props.rollsLeft > 0
                  ? {}
                  : { color: "grey", cursor: "not-allowed" }
              }
            >
              Roll
            </button>
          )}
        </div>
        <div className="col center">{dice}</div>
        <div>
          {this.props.rollsLeft === 0 ? <h4>Score this turn</h4> : null}
        </div>
      </div>
    );
  }
}

export default Dice;
