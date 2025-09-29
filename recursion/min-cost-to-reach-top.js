/**
 * Given an array of integers cost[] of length n, where cost[i] is 
 * the cost of the ith step on a staircase. Once the cost is paid, 
 * we can either climb one or two steps. We can either start from 
 * the step with index 0, or the step with index 1. The task is to 
 * find the minimum cost to reach the end.
 */
function minCost(array, index = 0) {
    if(index == array.length - 1 || index == array.length - 2)
        return array[index]
    else return array[index] + Math.min(minCost(array, index+1), minCost(array, index+2))
}
function findMinCost(array) {
    return Math.min(minCost(array), minCost(array, 1))
}
console.log(findMinCost([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
