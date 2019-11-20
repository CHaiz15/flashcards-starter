const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turnsCount = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = 0;
    this.turn;
    this.percentCorrect;
    this.totalGuesses;
  }
  returnCurrentCard(){
    return this.currentCard = this.deck[this.turnsCount];
  }
  takeTurn(guess){
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
  calculatePercentCorrect(){
    this.totalGuesses = this.correctGuesses + this.incorrectGuesses.length;
    this.percentCorrect = (this.correctGuesses / this.totalGuesses) * 100;
    return this.percentCorrect;
  }
  endRound(){
    return `** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`
  }
}

module.exports = Round;
