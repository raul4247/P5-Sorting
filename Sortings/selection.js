let canvasWidth = 800, canvasHeight = 600
let unsorted = []
let speedSlider
let i, j

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    unsorted = new Array(canvasWidth)
    resetArray()

    speedSlider = createSlider(1, 1001, 401, 100);
}


function draw() {
    background(0)

    for(let k = 0; k < speedSlider.value(); k++){
        if(i < unsorted.length){
        console.log(unsorted[min])
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
    min = i
}

function swap(arr, p1, p2) {
    let temp = arr[p1]
    arr[p1] = arr[p2]
    arr[p2] = temp
}
