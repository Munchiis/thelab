import Character from "./character.js";
import Game from "./game.js";
import Player from "./player.js";

const player = new Player
const goal = new Character

player.setCoor(1,4)
goal.setCoor(2,2)

let levels = []

levels[0] = {
  map:[
     [1,1,0,0,1],
     [1,0,0,0,0],
     [0,0,1,1,0],
     [0,0,0,1,0],
     [0,1,0,1,0]
  ],
  player: player,
  goal : goal,
  theme:'default'
}

let myGame = new Game('game-container-1',levels[0])

myGame.populateMap()
