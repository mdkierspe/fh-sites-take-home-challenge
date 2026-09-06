const cardRanks = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,
};

class PokerHand {
  constructor(hand) {
    // Split hand into array
    this.cards = hand.split(" ");

    // Split cards into Ranks and Suits
    this.ranks = this.cards.map((c) => cardRanks[c.slice(0, -1)]);
    this.suits = this.cards.map((c) => c.slice(-1));
    
  }

  rankCounts() {
    const counts = {};
    for (const rank of this.ranks) {
      counts[rank] = (counts[rank] || 0) + 1;
    }
    return counts;
  }

  isFlush() {
    return this.suits.every((s) => s === this.suits[0]);
  }

  isStraight() {
    let sortedRanks = [...this.ranks].sort((a, b) => a - b);

    // Wheel case
    if (sortedRanks.join() === "2,3,4,5,14") return true;

    for (let i = 1; i < sortedRanks.length; i++) {
      if (sortedRanks[i] !== sortedRanks[i -1] + 1) return false;
    }
    return true;
  }

  getRank() {
    const straight = this.isStraight();
    const flush =  this.isFlush();
    const rankCounts = this.rankCounts();
    const counts =  Object.values(rankCounts);
    const pairs = counts.filter((c) => c === 2).length;
    
    if (flush && straight && this.ranks.includes(10) && this.ranks.includes(14)) {
      return "Royal Flush"
    } else if (flush && straight) {
      return "Straight Flush";
    } else if (counts.includes(4)) {
      return "Four of a Kind";
    } else if (counts.includes(3) && counts.includes(2)) {
      return "Full House";
    } else if (flush) {
      return "Flush";
    } else if (straight) {
      return "Straight";
    } else if (counts.includes(3)) {
      return "Three of a Kind";
    } else if (pairs === 2) {
      return "Two Pair";
    } else if (pairs === 1) {
      return "One Pair";
    } else {
      return "High Card";
    }
  }
}

module.exports = PokerHand;
