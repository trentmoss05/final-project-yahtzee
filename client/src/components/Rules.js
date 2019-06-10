import React, { Component } from "react";

class Rules extends Component {
  render() {
    /*Upper Section  
        Aces (Ones)
        Total of Aces 
        Twos
        Total of Twos
        Threes
        Total of Threes
        Fours
        Total of Fours
        Fives
        Total of Fives
        Sixes
        Total of Sixes*/
    /*Lower Section
        What to score
        3 Of A Kind
        Total of all 5 dice
        4 Of A Kind
        Total of all 5 dice
        Full House
        25 points
        Small Straight
        30 points
        Large Straight
        40 points
        Yahtzee (5 Of A Kind)
        50 points
        Chance
        Total of all 5 dice
        Scoring – Upper Section */
    let sectionPoints = [
      {
        "section": "3 of a Kind",
        "description":
          "You must have at least 4 of the same die faces. Score the sum of all of the dice.",
        "points": ""
      },
      {
        "section": "4 of a Kind",
        "description":
          "You must have at least 4 of the same die faces. Score the sum of all of the dice.",
        "points": ""
      },
      {
        "section": "Small Straight",
        "description": "A sequence of 4 consecutive die faces are needed.",
        "points": "30"
      },
      {
        "section": "Large Straight",
        "description": "A sequence of 5 consecutive die faces are needed.",
        "points": "40"
      },
      {
        "section": "Full House",
        "description":
          "A full house requires that you have both 3 of a kind of one die face and 2 of a kind of another.",
        "points": "25"
      },
      {
        "section": "First Yahtzee",
        "description":
          "A yahtzee is 5 of a kind (all 5 dice showing the same face).",
        "points": "50"
      },
      {
        "section": "Bonus Yahtzee",
        "description":
          "If you have already scored a Yahtzee and filled in that box, you may get a bonus 100 points if you roll it again, putting a check in the bonus box.",
        "points": "100"
      },
      {
        "section": "Chance",
        "description":
          "Chance is the total of all 5 of any face die. There is no special requirement.",
        "points": ""
      }
    ];

    let rows = sectionPoints.map(x => {
      return (
        <tr key={x.section}>
          <td>{x.section}</td>
          <td>{x.description}</td>
          <td>{x.points}</td>
        </tr>
      );
    });

    return (
      <div className="rules">
        <h2 className="largeTitle">Yahtzee Rules</h2>
        <div className="rulesText">
          <p>
            Yahtzee is a game of luck and chance. The object of the game is to
            score the most points possible by rolling 5 dice to make specific
            combos. There are 13 rounds, and with each round you roll the dice
            score in one of the categories. Some categories have requirements
            that must be met.
          </p>

          <p>
            All you need to play is 5 six-sided dice, a cup if you want to roll
            them with, a pencil, and paper to record everyone's scores. You can
            play alone to see how high of a score you can get, or play against
            friends. Each player rolls the 5 dice and the highest roll gets to
            go first.
          </p>

          <h2>On Your Turn</h2>

          <p />
        </div>
      </div>
    );
  }
}

export default Rules;
