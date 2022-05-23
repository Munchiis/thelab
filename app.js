import Character from "./character.js";
import Game from "./game.js";
import Player from "./player.js";

const player = new Player
const goal = new Character
//Node for linked list for guaranteed path 
class GuaranteedPathNode {
    GuaranteedPathNode(typeOfTile, next, prev, x, y){
        next = null;
    }
    //tyle type is 0 for floor and 1 for wall
    typeOfTile;
    x;
    y;
    next;
    prev;
}
//Actual guaranteed path linked list as a class
class GuaranteedPath{
    head;
    tail;
    size;
}
/*My guaranteed path + map generation. HAS TO BE BIG ENOUGh
    (I havent worked out the minimum size yet though). Also make sure
    it is not a jagged array (i.e. every row has same number of
    columns)*/
/*I say make the arrays we try at least 10x10 but maybe 20x20 to be 
    safe.*/
function generateMap(arr){
    let dimensionY = arr.length();
    let dimensionX = arr[0].length();

    var startY = Math.floor((dimensionY-1) / 2);
    var startX = 0;

    let goalY = startY;
    let goalX = Math.floor((dimensionX-1) / 2);

    arr[startY][startX] = 0;
    arr[goalY][goalX] = 0;

    let current = new GuaranteedPathNode();
    while(GuaranteedPathNode.)


}


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
