function getFibonacciNumberAtIndex(n, memo) {
    if(n <= 1) return n
    if(memo[n] !== -1) return memo[n]
    memo[n] = getFibonacciNumberAtIndex(n-1, memo) + getFibonacciNumberAtIndex(n-2, memo)
    return memo[n]
}
const n = 6
console.log(getFibonacciNumberAtIndex(n, new Array(n + 1).fill(-1)))

