/**
 * Finding all possible combinations of a string
 */

function findCombinations(string) {
    /**
     * Initially there will be no fixed characters. Fixed characters are those that will not change
     * and only the characters preceeding them will change to make another combination.
     */
    let combinations = [string], fixed = 0;
    /**
     * Let say we need combinations for "ABC". Initially we have one element in combinations array i.e. "ABC".
     * We will run the loop until the fixed is less than the last element of our string because than we'll not
     * be able to swap characters anymore.
     * Starting with ABC, providing fixed character are 0, we will swap A with B and then A with C. With fixed 0,
     * we'll have two combinations of BAC and CBA. Our array will look like this: [ABC, BAC, CBA].
     * Now the value of fixed will be increased to 1, we'll iterate again to the combinations array. Starting with
     * ABC, A will be fixed so we'll swap B from C. There are no characters after C so that we'll get only one combination
     * that will be ACB. The array will now look like this [ABC, BAC, CBA, ACB].
     * Now we'll target BAC, the second element from the combinations array. B will be fixed, we'll swap A from C i.e BCA
     * Our array looks like this now: [ABC, BAC, CBA, ACB, BCA]
     * Now targetting CBA, the third element. Keeping C as fixed, we'll replace B from A i.e. CAB
     * Our array is now [ABC, BAC, CBA, ACB, BCA, CAB]
     * Now we'll increase the fixed characters to 2. Since our string length is 3 and 3-1 == 2, our loop will end here returing all
     * the generated combinations
     */
    while (fixed < string.length - 1) {
        for (const combination of combinations) {
            combinations = [
                ...combinations,
                ...getAllCombinations(combination, fixed)
            ]
        }
        fixed++
    }

    return combinations
}

function getAllCombinations(string, fixed) {
    const combinations = []
    for (let i = fixed + 1; i < string.length; i++) {
        const newCombination = string.split("")
        newCombination[fixed] = string[i]
        newCombination[i] = string[fixed]
        combinations.push(newCombination.join(""))
    }
    return combinations
}

console.log(findCombinations("ABSGR"));