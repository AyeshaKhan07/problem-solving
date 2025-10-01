/**
 * Given an array of integers cost[] of length n, where cost[i] is 
 * the cost of the ith step on a staircase. Once the cost is paid, 
 * we can either climb one or two steps. We can either start from 
 * the step with index 0, or the step with index 1. The task is to 
 * find the minimum cost to reach the end.
 */

function minCost(array, memo) {
    memo[0] = array[0];
    memo[1] = array[1];

    for (let i = 2; i < array.length; i++) {
        memo[i] = array[i] + Math.min(memo[i - 1], memo[i - 2])
    }
    return Math.min(memo[memo.length - 1], memo[memo.length - 2])
}
const array = [
    57, 23, 91, 4, 76, 39, 88, 62, 11, 17,
    94, 6, 45, 70, 81, 66, 13, 29, 54, 3,
    36, 49, 97, 85, 9, 58, 31, 42, 68, 95,
    10, 64, 7, 75, 22, 93, 8, 80, 27, 90,
    50, 38, 26, 12, 87, 18, 43, 92, 14, 21,
    19, 35, 65, 5, 46, 32, 96, 1, 60, 15,
    71, 99, 28, 2, 20, 41, 84, 34, 59, 16,
    24, 69, 33, 61, 44, 30, 98, 67, 48, 25,
    37, 53, 63, 73, 77, 55, 47, 40, 56, 72
];
const memo = new Array(array.length)
console.time("Execution time")
console.log(minCost(array, memo))
console.timeEnd("Execution time")

/**
 * Above solution is optimized but there is a use of storage that
 * can be further optimized. If we notice, we only need the values
 * i-1 and i-2 to compute the value at i. Instead of keeping these
 * values in array we can use variable instead
 */

function minCostWithOptimizedStorage(array) {
    let prevPrev = array[0];
    let prev = array[1];

    let current = 0
    for (let i = 2; i < array.length; i++) {
        current = array[i] + Math.min(prev, prevPrev);
        prevPrev = prev
        prev = current 
    }
    return Math.min(prev, prevPrev)
}

console.time("Execution time")
console.log("Min cost with optimized storage use", minCostWithOptimizedStorage(array))
console.timeEnd("Execution time")
