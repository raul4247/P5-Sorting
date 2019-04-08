/*
    i, j and min need to be global, since they need 
    to be accessed by the drawing method and 
    the sorting method without dependency
*/

let canvasWidth = 800, canvasHeight = 600
let unsorted = []
let speedSlider
let i, j, min
let rectWidth = 2


function setup() {
    createCanvas(canvasWidth, canvasHeight)
    
    unsorted = new Array(canvasWidth/rectWidth)
    resetArray(unsorted, canvasHeight)
    resetSelectionSort()

    speedSlider = createSlider(1, 1001, 401, 100)
}


function draw() {
    background(0)

    selectionSort(unsorted, speedSlider.value())
    drawArray(j, min, canvasHeight, rectWidth, unsorted)
}