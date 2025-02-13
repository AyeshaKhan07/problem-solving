/**
 * We recursively divide the unsorted array into sub arrays until the sub array contains only one element.
 * We start by dividing the array into two halves: left and right, then further divide the left array into
 * two halves again: left and right, similarly divide the right sub array into another two halves of left 
 * and right. We repeat the process until the left subarray and the right subarray contain only one element.
 * Then we start merging the subarrays in sorted order until the merged array returns the sorted list.
 * Merge sort follows the divide & conquer rule. The idea behind merge sort is: it’s easy to sort smaller 
 * arrays than the bigger ones.
 * further reading: https://docs.google.com/document/d/1HLFlERINHQ9FlAMYYLvfa2_vHdrKUc6xoxYr-fu5zXQ/edit?tab=t.0#heading=h.10zb8c68ag2f
 */
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