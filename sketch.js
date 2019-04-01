let canvasWidth = 800, canvasHeight = 600
let unsorted = []

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    unsorted = new Array(canvasWidth)
    resetArray()
}

function draw() {
    background(0);

    for(let i = 0; i < unsorted.length; i++) {
        stroke("white")
        line(i, canvasHeight, i, canvasHeight - unsorted[i]);
    }
}

function resetArray() {
    for(let i = 0; i < unsorted.length; i++)
        unsorted[i] = random(canvasHeight)
}