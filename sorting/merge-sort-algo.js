function divideAndConquer(unsortedArray) {
    const length = unsortedArray.length
    if (length > 1) {
        let leftLength, rightLength

        if (length % 2 == 0)
            leftLength = rightLength = (length / 2)
        else {
            leftLength = (length + 1) / 2
            rightLength = length - leftLength
        }

        const leftArray = unsortedArray.slice(0, leftLength)
        const rightArray = unsortedArray.slice(rightLength)

        console.log("leftArray", leftArray)
        console.log("rightArray", rightArray)

        const sortedLeft = divideAndConquer(leftArray)
        const sortedRight = divideAndConquer(rightArray)

        console.log("sortedLeft", sortedLeft)
        console.log("sortedRight", sortedRight)

        return sortAndMerge(sortedLeft, sortedRight)
    }

    else return unsortedArray
}

function sortAndMerge(left, right) {
    let mergedArray = []
    let i = j = 0
    while (i < left.length && j < right.length) {
        if(left[i]<right[j])
        {
            mergedArray.push(left[i])
            console.log("mergedArray", mergedArray)
            i++
        }

        else {
            mergedArray.push(right[j])
            console.log("mergedArray", mergedArray)
            j++
            
        }
    }
    mergedArray = mergedArray.concat(left.slice(i)).concat(right.slice(j));

    return mergedArray
}

console.log(divideAndConquer([38, 27, 43, 10]))