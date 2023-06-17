socket = io();
var side = 20, m = 40, n = 40;

function setup() {
    frameRate(40);
    createCanvas(n * side, m * side);
    background('#e8e8e8');
}

function drawMatrix(data) {
    matrix = data.matrix;
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
}

socket.on("matrix", drawMatrix);