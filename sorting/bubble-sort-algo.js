function sort(array) {
    let swapCount = 0
    do {
        swapCount = 0
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                swapCount++
            }
        }
    }
    while (swapCount)

    return array
}

console.log(sort([64, 25, 12, 22, 11, 12]))