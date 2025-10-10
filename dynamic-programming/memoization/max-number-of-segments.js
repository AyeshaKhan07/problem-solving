/**
 * Given a rod of length n, the task is to cut the rod in such a way that the total
 * number of segments of length x, y, and z is maximized. The segments can only be
 * of length x, y, and z. Note: If no segment can be cut then return 0.
 * @param {*} n 
 * @param {*} x 
 * @param {*} y 
 * @param {*} z 
 * @param {*} segmentCount 
 * @returns 
 */
function maxCutHelper(n, x, y, z, segmentCount = 0, memo = {}) {
    if (memo[n]) return memo[n]
    if (n < 0) return -1
    if (n == 0) return segmentCount

    const cut1 = maxCutHelper(n - x, x, y, z, segmentCount + 1, memo)
    const cut2 = maxCutHelper(n - y, x, y, z, segmentCount + 1, memo)
    const cut3 = maxCutHelper(n - z, x, y, z, segmentCount + 1, memo)

    const maxCutCount = Math.max(cut1, cut2, cut3)

    if (maxCutCount < 0) {
        memo[n] = -1
        return -1
    }
    memo[n] = maxCutCount
    return maxCutCount
}

// Main function to start the cutting process
function maximizeTheCuts(n, x, y, z) {

    let res = maxCutHelper(n, x, y, z);

    // No valid cuts found
    if (res === -1) return 0;

    return res;
}

let n = 1000;
let x = 2;
let y = 3;
let z = 5;

console.time("Execution time")
console.log(maximizeTheCuts(n, x, y, z))
console.timeEnd("Execution time")