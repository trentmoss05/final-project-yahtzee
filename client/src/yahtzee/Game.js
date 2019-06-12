import _ from "lodash";

export default class Game {
  static calculateScore(dice, scoreBox) {
    const counts = _.countBy(dice);
    if (scoreBox === "Ones") return counts["1"] || 0;
    if (scoreBox === "Twos") return counts["2"] || 0;
    if (scoreBox === "Threes") return counts["3"] || 0;
    if (scoreBox === "Fours") return counts["4"] || 0;
    if (scoreBox === "Fives") return counts["5"] || 0;
    if (scoreBox === "Sixes") return counts["6"] || 0;

    if (scoreBox === "3 of a Kind") {
      const freq = Object.keys(counts).map(x => counts[x]);
      if (_.max(freq) >= 3) return _.sum(dice);
      return 0;
    }

    if (scoreBox === "4 of a Kind") {
      const freq = Object.keys(counts).map(x => counts[x]);
      if (_.max(freq) >= 4) return _.sum(dice);
      return 0;
    }

    if (scoreBox === "Full House") {
      const freq = Object.keys(counts).map(x => counts[x]);
      if (_.max(freq) === 3 && _.min(freq) === 2) return 25;
      return 0;
    }

    if (scoreBox === "Yahtzee") {
      const freq = Object.keys(counts).map(x => counts[x]);
      if (_.max(freq) === 5) return 50;
      return 0;
    }

    const sortDice = _.orderBy(dice);
    if (scoreBox === "Large Straight") {
      const neededNumbers = [_.range(1, 6), _.range(2, 7)];
      const match = neededNumbers.some(needed =>
        Game.containsNumbers(needed, sortDice)
      );
      return match ? 30 : 0;
    }

    if (scoreBox === "Small Straight") {
      const neededNumbers = [_.range(1, 5), (2, 6), (3, 7)];
      const match = neededNumbers.some(needed =>
        Game.containsNumbers(neededNumbers, sortDice)
      );
      return match ? 30 : 0;
    }
  }

  static containsNumbers(nums1, nums2) {
    return _.isEqual(_.intersection(nums1, nums2), nums1);
  }
}
