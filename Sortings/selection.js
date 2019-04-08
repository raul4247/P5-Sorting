let canvasWidth = 800, canvasHeight = 600
let unsorted = []
let speedSlider
let i, j
let rectWidth = 2

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    unsorted = new Array(canvasWidth/rectWidth)
    resetArray()

    speedSlider = createSlider(1, 1001, 401, 100);
}


function draw() {
    background(0)

    for(let k = 0; k < speedSlider.value(); k++){
        if(i < unsorted.length){
            if(j < unsorted.length){
                if(unsorted[j] < unsorted[min])
                    min = j;
                j++
            }
            else{
                if (i != min)
                    swap(unsorted, i, min);
    
                i++
                j = i + 1
                min = i;
            }
        }
    }
    drawArray()
}

function drawArray() {
    for(let c = 0; c < unsorted.length; c++) {
        if(c == j || c == min)
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
    i = 0
    j = 0
    min = i
}