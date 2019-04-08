function drawArray(pos1, pos2, lineHeight, lineWidth, arr) {
    for(let c = 0; c < arr.length; c++) {
        if(c == pos1 || c == pos2)
            fill("red")
        else
            fill("white")

        noStroke()
        rect(c * lineWidth, lineHeight - arr[c], lineWidth, arr[c])
    }
}