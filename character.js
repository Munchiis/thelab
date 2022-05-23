export default class Character {
    constructor () {
        this.x = 0
        this.y = 0 
        this.name = ""      
    }

    setX (number) {
        this.x = number
    }

    setY (number) {
        this.x = number
    }

    setCoor (x, y) {
        this.x = x
        this.y = y
    }

    getPosition() {
        console.log(this.x, this.y)
    }
    
    getCharacterInfo() {
        return `${this.name} is at coordinates x:${this.x} and y:${this.y}`
    }
}