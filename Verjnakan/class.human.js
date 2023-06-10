class Human extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 30;
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

    multip() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 55) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var xt = new Human(newX, newY, 4)
            humanArr.push(xt)
            this.energy = 15
        }
    }

    walk() {
        var empty = random(this.chooseCell(0))
        this.energy--
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
        }
    }

    ate() {
        var food = random(this.chooseCell(2))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
            this.y = newY
            this.x = newX
            this.energy += 5
        }
    }

    dead() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in humanArr) {
                if (humanArr[i].x == this.x && humanArr[i].y == this.y)
                    humanArr.splice(i, 1)
                    break;
            }
        }
    }

    shoot() {
        var food = random(this.chooseCell(3))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in meatEaterArr) {
                if (meatEaterArr[i].x == newX && meatEaterArr[i].y == newY) {
                    meatEaterArr.splice(i, 1)
                    break;
                }
            }
            this.y = newY
            this.x = newX
            this.energy -= 2
        }
    }

    gr(){
        var food = random(this.chooseCell(1))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
            this.y = newY
            this.x = newX
            this.energy -= 1
        }
    }

    beat(){
        var food = random(this.chooseCell(7))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
            this.energy -= 10
        }
    }
}