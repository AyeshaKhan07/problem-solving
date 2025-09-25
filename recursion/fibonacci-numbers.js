function getFibonacciNumberAtIndex(n) {
    if(!n) return 0
    if(n==1 || n==2) return 1

    return getFibonacciNumberAtIndex(n-1) + getFibonacciNumberAtIndex(n-2)
}

console.log(getFibonacciNumberAtIndex(8))