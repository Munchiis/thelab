function $(x) { return document.getElementById(x) }

export default class Game {

    constructor(id, level ) {
        this.el = $(id),
        this.tileTypes = ['floor', 'wall'],
        this.tileDim = 32,
        this.map = level.map,
        this.theme = level.theme,
        /**
         * spread oporator (...) makes exact copy of object/array
         */
        this.player = { ...level.player },
        this.goal = { ...level.goal }
    }

    populateMap() {
        this.el.className = 'game-container ' + this.theme
        let tiles = $('tiles')
        for (let row = 0; row < this.map.length; ++row) {
            for (let col = 0; col < this.map[row].length; ++col) {
                let tileCode = this.map[row][col]
                let tileType = this.tileTypes[tileCode]
                let tile = this.createEl(col, row, tileType)
                tiles.appendChild(tile)
            }
        }
    }

    createEl(x, y, type) {

        /** @returns { Element } 
         * - inherits all the methods and properties of an html element*/
        let el = document.createElement('div')

        el.className = type
        el.style.width = el.style.height = this.tileDim + 'px'
        el.style.left = x * this.tileDim + 'px'
        el.style.top = y * this.tileDim + 'px'

        return el
    }


}