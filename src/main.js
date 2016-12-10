//var game = new Phaser.Game(640, 360, Phaser.AUTO, 'gameWindow', { preload: preload, create: create, update: update, render: render});
const GAME_WIDTH = 1280, GAME_HEIGHT = 720;

var game;

function init() {
    console.log("Initialized")
    
    game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'game-canvas');

    game.state.add('Menu', Menu);
    game.state.add('Game', Game);

    game.state.start('Menu');
}

function resizeMange() {

}