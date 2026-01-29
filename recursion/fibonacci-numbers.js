/**
 * You can pass the n while running the code. If you wanna find the
 * fibonacci sequence at index 100, use command: 
 * "node fibonacci-numbers.js 100"
 */
function getFibonacciNumberAtIndex(n) {
    if(!n) return 0
    if(n==1 || n==2) return 1

    return getFibonacciNumberAtIndex(n-1) + getFibonacciNumberAtIndex(n-2)
}
const n = Number(process.argv[2]) || 10

console.log(getFibonacciNumberAtIndex(n))

/**
 * This solution will not work for larger numbers, or it would work but
 * extremely slow. The better approach would be to solve this with
 * dynamic programming. See the two different approaches in dynamic
 * programming folder.
 */