/**
 * In bubble sort, at the end of the first iteration, the largest element will be at the end of the array.
 * The array is being sorted by placing larger elements in their positions. We start by comparing the 
 * first element to the second element. If the first element is greater than the second element, we will 
 * swap both elements. So now the first element is in second position and the second element is in first 
 * position. Then we target the second element, and compare it with the third element. Again if the second 
 * element is greater than the third, we will swap it else do nothing. This procedure continues until there 
 * are no swaps. We will consider our array sorted if there were no swaps happening.
 * further reading: https://docs.google.com/document/d/1HLFlERINHQ9FlAMYYLvfa2_vHdrKUc6xoxYr-fu5zXQ/edit?tab=t.0#heading=h.u0qygllsnkhu
 */
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

console.log(sort([64, 34, 25, 12, 22, 11, 90]))