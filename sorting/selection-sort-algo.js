/**
 * Selection sort is a comparison based algorithm in which we iterate over the array to find the 
 * smallest element and then place it at the first index then we iterate over the next elements 
 * and find the second smallest and place it on the second index. The process continues until the 
 * array gets sorted.
 * further reading: https://docs.google.com/document/d/1HLFlERINHQ9FlAMYYLvfa2_vHdrKUc6xoxYr-fu5zXQ/edit?tab=t.0#heading=h.716olybtp1k0
 */
function sort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallestValue = array[i], smallestIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < smallestValue) {
                smallestValue = array[j]
                smallestIndex = j
            }
        }

        const temp = array[i];
        array[i] = smallestValue;
        array[smallestIndex] = temp
    }

    return array
}

console.log(sort([64, 25, 12, 22, 11, 12]))