class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (newCell && this.multiply >= 8) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
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

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new GrassEater(newX, newY, 2)
            grassEaterArr.push(xt)
            this.energy = 5
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy--
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
        }
    }

    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }
            this.y = newY
            this.x = newX
            this.energy += 2
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y)
                    grassEaterArr.splice(i, 1)
            }
        }
    }
}

class MeatEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 12;
        this.index = index;
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

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
            }
        }
    }
}


class Human {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.index = index;
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

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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


class Robot {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 100;
        this.index = index;
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

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    drive(){
        var empty = random(this.chooseCell(0))
        this.energy--
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
        }
    }

    step(){
        var empty = random(this.chooseCell(1))
        this.energy--
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
    }
}

 destroy(){
    var food = random(this.chooseCell(3))
    if (food) {
        var newX = food[0]
        var newY = food[1]
        matrix[newY][newX] = 6
        matrix[this.y][this.x] = 0
        for (var i in meatEaterArr) {
            if (meatEaterArr[i].x == newX && meatEaterArr[i].y == newY) {
                meatEaterArr.splice(i, 1)
            }
        }
        this.y = newY
        this.x = newX
        this.energy -= 7
    }
 }

 terminate(){
  var food = random(this.chooseCell(2))
    if (food) {
        var newX = food[0]
        var newY = food[1]
        matrix[newY][newX] = 6
        matrix[this.y][this.x] = 0
        for (var i in grassEaterArr) {
            if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                grassEaterArr.splice(i, 1)
            }
        }
        this.y = newY
        this.x = newX
        this.energy -= 5
    }
 }

 exterminate(){
    var food = random(this.chooseCell(4))
    if (food) {
        var newX = food[0]
        var newY = food[1]
        matrix[newY][newX] = 6
        matrix[this.y][this.x] = 0
        for (var i in humanArr) {
            if (humanArr[i].x == newX && humanArr[i].y == newY) {
                humanArr.splice(i, 1)
            }
        }
        this.y = newY
        this.x = newX
        this.energy -= 20
    }
 }
 low(){
       if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in robotArr) {
                if (robotArr[i].x == this.x && robotArr[i].y == this.y)
                    robotArr.splice(i, 1)
            }
        }
    }
    batery(){
        var food = random(this.chooseCell(7))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0
            this.y = newY
            this.x = newX
            this.energy += 100
        }
    }
}