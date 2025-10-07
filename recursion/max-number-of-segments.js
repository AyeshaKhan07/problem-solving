// JavaScript implementation to find max cut segments
// using Recursion

// Helper function to maximize the number
// of cuts using recursion
function maxCutHelper(n, x, y, z) {

    // Base case: If the length is zero, 
    // return zero cuts
    if (n === 0) {
        return 0;
    }

    // Base case: If the length becomes negative, 
    // return an invalid result
    if (n < 0) {
        return -1;
    }

    // Recursive step: Try all three segment 
    // lengths and choose the maximum result
    let cut1 = maxCutHelper(n - x, x, y, z);
    let cut2 = maxCutHelper(n - y, x, y, z);
    let cut3 = maxCutHelper(n - z, x, y, z);

    // Get the maximum number of cuts among
    // the 3 options
    let maxCut = Math.max(cut1, cut2, cut3);

    // If no valid cut found, return negative
    // value indicating no valid cuts
    if (maxCut === -1) {
        return -1;
    }

    return maxCut + 1;
}

// Main function to start the cutting process
function maximizeTheCuts(n, x, y, z) {

    let res = maxCutHelper(n, x, y, z);

    // No valid cuts found
    if (res === -1) return 0;

    return res;
}

let n = 11;
let x = 2;
let y = 3;
let z = 5;

console.log(maximizeTheCuts(n, x, y, z));