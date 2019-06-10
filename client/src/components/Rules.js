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
  }
}
