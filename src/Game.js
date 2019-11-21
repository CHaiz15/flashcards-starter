const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    this.currentRound++;
    const deck = new Deck(prototypeQuestions);
    this.deck = deck;
    const round = new Round(deck);
    this.round = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
    round.startTimer();
  }
}

module.exports = Game;
