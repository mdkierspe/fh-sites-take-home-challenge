var assert = require('assert');
var PokerHand = require('../pokerHand.js');

/**
 * test
 */
describe('Rank a Royal Flush', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('As Ks Qs Js 10s');
    assert.equal(hand.getRank(), 'Royal Flush');
  });
});

/**
 * test
 */
describe('Rank a Pair', function() {
  it('Return one pair when hand given', function() {
    var hand = new PokerHand('Ah As 10c 7d 6s');

    assert.equal(hand.getRank(), 'One Pair');
  });
});

/**
 * test
 */
describe('Rank Two Pair', function() {
  it('Return two pair when hand given', function() {
    var hand = new PokerHand('Kh Kc 3s 3h 2d');

    assert.equal(hand.getRank(), 'Two Pair');
  });
});

/**
 * test
 */
describe('Rank A Flush', function() {
  var hand = new PokerHand('Kh Qh 6h 2h 9h');

  it('Return flush when hand given', function() {
    assert.equal(hand.getRank(), 'Flush');
  });
});

// More tests go here
describe('Rank a Straight Flush', function() {
  it('Return straight flush when hand given', function() {
    var hand = new PokerHand('4s 5s 6s 7s 8s');
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});

describe('Rank a Four of a Kind', function() {
  it('Return Four of a Kind when hand given', function() {
    var hand = new PokerHand('4s 4s 4s 4s As');
    assert.equal(hand.getRank(), 'Four of a Kind');
  });
});

describe('Rank a Full House', function() {
  it('Return Full House when hand given', function() {
    var hand = new PokerHand('Js Jc Jh 5c 5s');
    assert.equal(hand.getRank(), 'Full House');
  });
});


describe('Rank a Straight', function() {
  it('Return Straight when hand given', function() {
    var hand = new PokerHand('3c 4h 5d 6s 7h');
    assert.equal(hand.getRank(), 'Straight');
  });
});

describe('Rank a Three of a Kind', function() {
  it('Return Three of a Kind when hand given', function() {
    var hand = new PokerHand('3c 3c 3c 6s 7h');
    assert.equal(hand.getRank(), 'Three of a Kind');
  });
});