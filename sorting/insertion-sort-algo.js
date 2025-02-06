/**
 * As the name suggests, in this sorting algorithm, we take the element and insert it into 
 * its correct position. We start with the first element, that’s considered sorted of course.
 * Then we move to the second element and compare it with the first element. We swap it if 
 * the second element is lesser than the first one else we move to the third element. The 
 * third element is then compared with the first and second element, and will get swapped 
 * to its correct position.
 * further reading: https://docs.google.com/document/d/1HLFlERINHQ9FlAMYYLvfa2_vHdrKUc6xoxYr-fu5zXQ/edit?tab=t.0#heading=h.h8e0ovmhvurg
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