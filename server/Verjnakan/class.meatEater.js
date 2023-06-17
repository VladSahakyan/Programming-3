let random = require("./random");
const Base = require("./class.base");

module.exports =class MeatEater extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 12;
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

    multi() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 15) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var xt = new MeatEater(newX, newY, 3)
            meatEaterArr.push(xt)
            this.energy = 7
        }
    }

    moved() {
        var empty = random(this.chooseCell(0))
        this.energy--
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
        }
    }

    meal() {
        var food = random(this.chooseCell(2))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
            this.y = newY
            this.x = newX
            this.energy += 6
        }
    }
    died() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in meatEaterArr) {
                if (meatEaterArr[i].x == this.x && meatEaterArr[i].y == this.y)
                    meatEaterArr.splice(i, 1)
                    break;
            }
        }
    }
}