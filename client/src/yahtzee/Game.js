import _ from "lodash";

export default class Game {
  static calculateScore(dice, category) {
    const counts = _.countBy(dice);
    if (category === "Ones") return counts["1"] || 0;
    if (category === "Twos") return counts["2"] || 0;
    if (category === "Threes") return counts["3"] || 0;
    if (category === "Fours") return counts["4"] || 0;
    if (category === "Fives") return counts["5"] || 0;
    if (category === "Sixes") return counts["6"] || 0;
  }
}
