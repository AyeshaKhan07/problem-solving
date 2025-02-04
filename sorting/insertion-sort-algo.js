/**
 * 
 */
function sort(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1])
            for (let j = 0; j < i; j++) {
                if (array[i] < array[j]) {
                    const temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
            }
    }
    return array
}

console.log(sort([12, 11, 13, 5, 6]))