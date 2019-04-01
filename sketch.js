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
    bubbleSort(unsorted)
}

function resetArray() {
    for(let i = 0; i < unsorted.length; i++)
        unsorted[i] = random(canvasHeight)
}

function bubbleSort(arr) {
    let swapFlag
    do {
        swapFlag = false
        for (let i=0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                swap(arr, i, i+1)
                swapFlag = true;
            }
        }
    } while (swapFlag)
}

function swap(arr, p1, p2) {
    let temp = arr[p1]
    arr[p1] = arr[p2]
    arr[p2] = temp
}