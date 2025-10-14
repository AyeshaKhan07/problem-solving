
/**
 * @param {*} n 
 * @returns 
 * Catalan numbers are defined as a mathematical sequence that consists of 
 * positive integers, which can be used to find the number of possibilities 
 * of various combinations.  The nth term in the sequence denoted Cn, is 
 * found in the following formula:
 * ((n+1)!n!)/(2n)!
 * The first few Catalan numbers for n = 0, 1, 2, 3, 4, 5… are: 1, 1, 2, 
 * 5, 14, 42, 132, 429, 1430, 4862, ...  so on.
 */

function findCatalanNumber(n) {
    if (n <= 1) return 1
    return factorial(2 * n) / (factorial(n + 1) * factorial(n))
}

function factorial(n) {
    if (n <= 1) return 1
    return n * factorial(n - 1)
}
const n = Number(process.argv[2]) || 100

console.time("Execution time")
console.log(findCatalanNumber(n))
console.timeEnd("Execution time")

/**
 * This solution will not work for larger numbers, or it would work but
 * extremely slow. The better approach would be to solve this with
 * dynamic programming. See the two different approaches in dynamic
 * programming folder.
 */