const http = require('http');
let app = http.createServer();
const Game = require('../flash-cards-project/src/Game');

// Start the server on port 3000
app.listen(3000, '127.0.0.1');

var game = new Game();
game.start();

console.log('Node server running on port 3000');
