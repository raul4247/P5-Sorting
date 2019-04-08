let canvasWidth = 800, canvasHeight = 600
let unsorted = []
let speedSlider
let i, j
let value
let rectWidth = 2

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    unsorted = new Array(canvasWidth/rectWidth)
    resetArray()

    speedSlider = createSlider(1, 1001, 101, 100);
}


function draw() {
    background(0)

    for(let k = 0; k < speedSlider.value(); k++){
        if(i < unsorted.length){
            if(j > 0){
                if(unsorted[j] < unsorted[j-1])
                    swap(unsorted, j, j-1)
            }
            else{
                i++
                j = i + 1
            }
            j--
            console.log()
        }
    }
    drawArray()
}

function drawArray() {
    for(let c = 0; c < unsorted.length; c++) {
        if(c == j || c == j-1)
            fill("red")
        else
            fill("white")

        noStroke()
        rect(c*rectWidth, canvasHeight - unsorted[c], rectWidth, unsorted[c])
    }
}

function resetArray() {
    for(let c = 0; c < unsorted.length; c++)
        unsorted[c] = random(canvasHeight)
    i = 1
    j = i
    value = unsorted[0]
}

function swap(arr, p1, p2) {
    let temp = arr[p1]
    arr[p1] = arr[p2]
    arr[p2] = temp
}
