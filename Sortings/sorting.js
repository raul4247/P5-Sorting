function resetArray(arr, limit) {
    for(let c = 0; c < arr.length; c++)
        arr[c] = random(limit)
}

function bubbleSort(arr, speed){
    for(let k = 0; k < speed; k++){
        if(i < arr.length){
            if(j < arr.length - i - 1){
                if (arr[j] > arr[j+1])
                    swap(arr, j, j + 1)
                j++
            }
            else{
                i++
                j = 0
            }
        }
    }
}

function resetBubbleSort() {
    i = 0
    j = 0
}

function insertionSort(arr, speed) {
    for(let k = 0; k < speed; k++){
        if(i < arr.length){
            if(j > 0){
                if(arr[j] < arr[j-1])
                    swap(arr, j, j-1)
            }
            else{
                i++
                j = i + 1
            }
            j--
        }
    }
}

function resetInsertionSort(first) {
    i = 1
    j = i
    value = first
}

function swap(arr, p1, p2) {
    let temp = arr[p1]
    arr[p1] = arr[p2]
    arr[p2] = temp
}