const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card;
  let turn;

  beforeEach(() => {
  card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  turn = new Turn('pug', card);
});

it('should be a function', function() {
  expect(Turn).to.be.a('function');
});

it('should be an instance of Turn', function() {
  expect(turn).to.be.an.instanceof(Turn);
});

it('should store a guess', function() {
  expect(turn.guess).to.equal('pug');
});

it('should return the user/s guess', function() {
  expect(turn.returnGuess()).to.equal('pug');
});

it('should store a instance of the card Class', function() {
  expect(turn.card).to.equal(card);
});

it('should return the stored card', function() {
  expect(turn.returnCard()).to.equal(card);
});

it.skip('should evaluate to true if the user\'s guess is correct', function() {
  expect(turn.evaluateGuess()).to.equal(true);
});

it('should evaluate to false if the user\'s guess is incorrect', function() {
  expect(turn.evaluateGuess()).to.equal(false);
});

it.skip('should return \'Correct!\' if the guess is correct', function() {
  expect(turn.giveFeedback()).to.equal('Correct!');
});

it('should return \'Incorrect!\' if the guess is incorrect', function() {
  expect(turn.giveFeedback()).to.equal('Incorrect!');
});
});
