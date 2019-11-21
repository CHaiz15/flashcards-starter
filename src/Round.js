const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnsCount = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = 0;
    this.turn;
    this.percentCorrect;
    this.totalGuesses;
    this.startTime;
  }
  returnCurrentCard() {
    return this.deck[this.turnsCount];
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.deck[this.turnsCount]);
    this.turn = turn;
    turn.evaluateGuess();
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[this.turnsCount].id);
    } else if (this.turn.evaluateGuess()) {
      this.correctGuesses++;
    }
    this.turnsCount++;
    return this.turn.giveFeedback();
  }
  calculatePercentCorrect() {
    this.totalGuesses = this.correctGuesses + this.incorrectGuesses.length;
    this.percentCorrect = (this.correctGuesses / this.totalGuesses) * 100;
    return this.percentCorrect.toFixed(0);
  }
  startTimer() {
    this.startTime = Date.now();
  }
  endRound() {
    let endTime = Date.now();
    let totalTime = (endTime - this.startTime) / 1000;
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! Time to complete: ${Math.round(totalTime)} seconds!`);
  }
}

module.exports = Round;
