const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

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

  it('should instantiate a new Deck class', function() {
    game.start();
    expect(game.deck.cards[0]).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });

  it('should instantiate a new Round class', function() {
    game.start();
    expect(game.round.deck[0]).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });
});
