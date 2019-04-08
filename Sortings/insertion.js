/*
    i and j need to be global, since they need 
    to be accessed by the drawing method and 
    the sorting method without dependency
*/

let canvasWidth = 800, canvasHeight = 600
let unsorted = []
let speedSlider
let i, j
let rectWidth = 2


function setup() {
    createCanvas(canvasWidth, canvasHeight)
    
    unsorted = new Array(canvasWidth/rectWidth)
    resetArray(unsorted, canvasHeight)
    resetInsertionSort(unsorted[0])

    speedSlider = createSlider(1, 1001, 101, 100)
}


function draw() {
    background(0)

    insertionSort(unsorted, speedSlider.value())
    drawArray(j, j-1, canvasHeight, rectWidth, unsorted)
}