var matrix = [

    [6, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 7, 1, 0, 0, 0, 0, 1, 3, 7],
    [1, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 3, 0, 0, 0, 1, 0, 0, 3, 0],
    [0, 1, 2, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 2, 0, 0, 1, 2, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 2, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 1],
    [1, 2, 0, 0, 0, 0, 1, 0, 0, 1, 3, 1, 0, 0, 0, 3, 0, 0, 0, 0],
    [1, 2, 0, 2, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 3, 0, 1, 3, 3, 0],
    [1, 1, 1, 0, 2, 0, 0, 2, 2, 2, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0],
    [1, 1, 0, 2, 2, 1, 7, 5, 5, 0, 0, 2, 0, 0, 0, 1, 3, 0, 0, 0],
    [0, 1, 2, 0, 2, 0, 5, 5, 5, 0, 0, 1, 2, 0, 0, 0, 1, 0, 7, 1],
    [7, 1, 1, 1, 0, 2, 5, 5, 1, 5, 0, 0, 0, 0, 3, 0, 2, 0, 3, 0],
    [1, 2, 1, 1, 1, 1, 5, 5, 7, 5, 3, 0, 2, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 0, 2, 2, 0, 1, 5, 5, 5, 0, 1, 0, 0, 3, 0, 0, 3, 0, 0],
    [1, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 0, 0, 3, 0, 0, 1],
    [7, 0, 1, 0, 1, 1, 0, 0, 1, 4, 4, 1, 0, 0, 0, 3, 1, 0, 0, 1]
];

var side = 50;
var grassArr = [];
var grassEaterArr = [];
var meatEaterArr = [];
var humanArr = [];
var robotArr = []

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gr = new GrassEater(x, y, 2);
                grassEaterArr.push(gr);
            }
            else if (matrix[y][x] == 3) {
                var gr = new MeatEater(x, y, 3);
                meatEaterArr.push(gr);
            }
            else if (matrix[y][x] == 4) {
                var gr = new Human(x, y, 4);
                humanArr.push(gr);
            }
            else if (matrix[y][x] == 6) {
                var gr = new Robot(x, y, 6);
                robotArr.push(gr);
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(0, 204, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill(255, 204, 153);
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 2) {
                fill(255, 255, 0);
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 3) {
                fill(204, 0, 0)
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 4) {
                fill(0, 0, 0)
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 5) {
                fill(55, 55, 255)
                rect(x * side, y * side, side, side)
            }
            else if(matrix[y][x] == 6){
                fill(120,120,120)
                rect(x * side, y * side, side, side)
            }
            else if(matrix[y][x] == 7){
                fill("purple")
                rect(x * side, y * side, side, side)
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
        grassEaterArr[i].move()
        grassEaterArr[i].mult()
        grassEaterArr[i].die()
    }
    for (var i in meatEaterArr) {
        meatEaterArr[i].multi()
        meatEaterArr[i].moved()
        meatEaterArr[i].meal()
        meatEaterArr[i].died()
    }
    for (var i in humanArr) {
        humanArr[i].multip()
        humanArr[i].walk()
        humanArr[i].ate()
        humanArr[i].shoot()
        humanArr[i].gr()
        humanArr[i].beat()
        humanArr[i].dead()
    }
    for(var i in robotArr) {
        robotArr[i].drive()
        robotArr[i].step()
        robotArr[i].destroy()
        robotArr[i].terminate()
        robotArr[i].exterminate()
        robotArr[i].low()
        if(robotArr != undefined && robotArr.length != 0){
             robotArr[i].batery()
        }
    }
}