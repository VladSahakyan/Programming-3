class Robot extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 100;
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
                break;
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
                break;
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
                break;
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
                    break;
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