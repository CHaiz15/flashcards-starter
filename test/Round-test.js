const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
});

it('should be a function', function() {
  expect(Round).to.be.a('function');
});

it('should be an instance of the Round class', function() {
  expect(round).to.be.an.instanceof(Round);
});

it('should store a deck', function() {
  expect(round.deck).to.deep.equal([card1, card2, card3]);
});

it('should return current card being played', function() {
  expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
});

it('should have a default value of 0 for turnsCount', function() {
  expect(round.turnsCount).to.equal(0);
});

it('should update turnsCount after a turn is taken', function() {
  round.takeTurn('capybara');
  expect(round.turnsCount).to.equal(1);
  round.takeTurn('capybara');
  round.takeTurn('capybara');
  expect(round.turnsCount).to.equal(3);
});

it('should have a default value for turn', function() {
  expect(round.turn).to.equal(undefined);
});

it('should instantiate a new Turn when a guess is made', function() {
  round.takeTurn('capybara');
  expect(round.turn).to.be.an.instanceof(Turn);
});

it('should advance one card each turn', function() {
  round.takeTurn('capybara');
  expect(round.turnsCount).to.equal(1);
  expect(round.deck[round.turnsCount]);
});

it('should have a default value for incorrectGuesses', function() {
  expect(round.incorrectGuesses).to.deep.equal([]);
});

it('should evaluate guesses', function() {
  round.takeTurn('sea otter');
  expect(round.turn.evaluateGuess()).to.equal(true);

  round.takeTurn('wrong');
  expect(round.turn.evaluateGuess()).to.equal(false);
});

it('should give feedback for correct or incorrect guess', function() {
  round.takeTurn('sea otter');
  expect(round.turn.giveFeedback()).to.equal('Correct!');

  round.takeTurn('wrong');
  expect(round.turn.giveFeedback()).to.equal('Incorrect!');
});

it('should store the ids of incorrectGuesses', function() {
  round.takeTurn('pug');
  expect(round.incorrectGuesses).to.deep.equal([1])
});

it('should increment correctGuesses by 1 when a guess is correct', function() {
  round.takeTurn('sea otter');
  expect(round.correctGuesses).to.equal(1);
});

it('should calculate the percentage of correct guesses', function() {
  round.takeTurn('pug');
  round.takeTurn('gallbladder');
  round.calculatePercentCorrect();

  expect(round.percentCorrect).to.equal(50);
});

});
