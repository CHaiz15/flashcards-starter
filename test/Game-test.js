const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
});

it('should be a function', function() {
  expect(Game).to.be.a('function');
});

it('should have a default value for currentRound', function() {
  expect(game.currentRound).to.equal(0);
});

it('should increment currentRound by 1 after each round', function() {
  game.start();
  expect(game.currentRound).to.equal(1);
});

it.skip('should instantiate a new Deck class', function() {
  game.start();
  expect();
});
});
