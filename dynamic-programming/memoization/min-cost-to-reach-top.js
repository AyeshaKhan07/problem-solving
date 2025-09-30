/**
 * Given an array of integers cost[] of length n, where cost[i] is 
 * the cost of the ith step on a staircase. Once the cost is paid, 
 * we can either climb one or two steps. We can either start from 
 * the step with index 0, or the step with index 1. The task is to 
 * find the minimum cost to reach the end.
 */

function minCost(array, memo, index = 0) {
    if (index == array.length - 1 || index == array.length - 2)
        return array[index]

    if (memo[index] !== -1)
        return memo[index]

    memo[index] = array[index] + Math.min(minCost(array, memo, index + 1), minCost(array, memo, index + 2))
    return memo[index]
}

function findMinCost() {
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
    const memo = new Array(array.length).fill(-1)
    return Math.min(minCost(array, memo), minCost(array, memo, 1))
}
console.time()
console.log(findMinCost())
console.timeEnd()