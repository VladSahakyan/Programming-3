let random = require("./random");
const Base = require("./class.base");

module.exports =class Fish extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 3;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char) {
        this.getNewCoordinates();
        return super.chooseCell(char);
    }

    mult() {
        var empty = random(this.chooseCell(5));
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 8
            var xt = new Fish(newX, newY, 8)
            fishArr.push(xt)
            this.energy = 5
        }
    }

    swim() {
        var empty = random(this.chooseCell(5))
        this.energy++
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 8
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
        }
    }
}
