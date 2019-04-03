let canvasWidth = 800, canvasHeight = 600
let unsorted = []
let speedSlider
let i, j

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    unsorted = new Array(canvasWidth)
    resetArray()

    speedSlider = createSlider(1, 1001, 101, 100);
}


function draw() {
    background(0)

    for(let k = 0; k < speedSlider.value(); k++){
        if(i < unsorted.length){
            if(j < unsorted.length - i - 1){
                if (unsorted[j] > unsorted[j+1])
                    swap(unsorted, j, j + 1)
                j++
            }
            else{
                i++
                j = 0
            }
        }
    }

    drawArray()
}

function drawArray() {
    for(let c = 0; c < unsorted.length; c++) {
        if(c == j || c == j+1)
            stroke("red")
        else
            stroke("white")
        line(c, canvasHeight, c, canvasHeight - unsorted[c]);
    }
}

function resetArray() {
    for(let c = 0; c < unsorted.length; c++)
        unsorted[c] = random(canvasHeight)
    i = 0
    j = 0
}

function swap(arr, p1, p2) {
    let temp = arr[p1]
    arr[p1] = arr[p2]
    arr[p2] = temp
}
