var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var blastImg

function preload() {
  backgroundImage = loadImage("./assets/bg.png");
  car1_img = loadImage("../assets/runner1.png");
  car2_img = loadImage("../assets/runner2.png");
  track = loadImage("../assets/track.png");
  fuelImage = loadImage("./assets/fruit.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/junk1.png");
  obstacle2Image = loadImage("./assets/junk2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImg = loadImage("./assets/sick.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
