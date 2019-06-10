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

          <p>To start out your turn, take all 5 dice and roll them.</p>

          <p>You can take a total of 3 rolls per turn if needed.</p>

          <p>
            After each roll you will choose as many or few dice as you like to
            keep and re-roll the remaining ones, trying to meet the requirements
            to fill in a spot on your scorecard.
          </p>

          <p>
            After your third roll, you must write a number in one of the 13
            boxes that doesn't already have a number in it, which could result
            in you scoring zero.
          </p>

          <h2>Scoring - Upper Section</h2>

          <p>
            There are 2 sections of each scorecard, an upper section and lower
            section.
          </p>

          <p>
            The upper section is the simple one, for each number you can roll on
            a dice, there is a category for that number (1-6), your score is the
            total of any one of those numbers, based on what you have after your
            third roll. For example, if after your third roll you ended up with
            2/3/6/2/2, you have a few options. You could write in the twos
            category, giving you 6 points for that round, the threes category
            for 3 points, or the six category for 6 points. If you already have
            a number in those 3 categories, you may be able to write your score
            in a lower section box, or you may be forced to write a zero in the
            ones, fours, or fives box.
          </p>

          <p>
            There is also a bonus for the upper section which is achieved by
            scoring a total of 63 points in just the upper section alone. The
            bonus is worth 35 points, which is added to your overall score.
          </p>

          <h2>Scoring - Lower Section</h2>

          <p>
            In the lower section, there are various other combinations you can
            roll to get points, and the infamous YAHTZEE! Below are the types of
            rolls, and the points awarded:
          </p>

          <div className="scoresTableDiv">
            <table className="scoresTable">
              <thead>
                <tr>
                  <th>Section</th>
                  <th>Description</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>

          <h2>Example Turn</h2>

          <p>
            1st Roll: You roll 1/1/4/4/5, at this point you have already gotten
            a full house, but you haven't gotten 1's or 4's in the top section
            filled yet, or four of a kind. So you decide to keep the two 4's and
            roll the 1/1/5 again.
          </p>

          <p>
            2nd Roll: You roll 2/3/5, so you now have 2/3/5/4/4, still not
            enough 4's to get 4 of a kind, and not a very high score to write in
            the fours box on the upper section. At this point you are very close
            to large straight though so you could re-roll one of the fours to go
            for it.
          </p>

          <p>
            3rd Roll: You roll a 6 on your final roll, giving you a large
            straight!! You can now write 40 points in the large straight box. If
            you had already filled that box in, you would have to write a score
            in some other box (you HAVE to write a score every round), even if
            it was an unfavorable amount, like having to write a zero in the
            yahtzee box if that was the only one left unfilled.
          </p>

          <h2>Game End</h2>

          <p>
            The game ends after all players have had 13 turns, and subsequently
            have a number in every box.
          </p>

          <p>
            You then total up all of the top section of the scorecard, including
            the bonus 35 points if you got it. Add that to the total of your
            bottom section and you have your final score. The winner is the
            player with the highest final score.
          </p>
        </div>
      </div>
    );
  }
}

export default Rules;
