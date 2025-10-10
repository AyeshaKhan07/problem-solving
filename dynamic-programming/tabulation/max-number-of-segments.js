/**
 * Given a rod of length n, the task is to cut the rod in such a way that the total
 * number of segments of length x, y, and z is maximized. The segments can only be
 * of length x, y, and z. Note: If no segment can be cut then return 0.
 * @param {*} n 
 * @param {*} x 
 * @param {*} y 
 * @param {*} z 
 * @returns 
 */

function maximizeTheCuts(n, x, y, z) {
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        if (i >= x && dp[i - x] !== -1)
            dp[i] = Math.max(dp[i], dp[i - x] + 1)

        if (i >= y && dp[i - y] !== -1)
            dp[i] = Math.max(dp[i], dp[i - y] + 1)

        if (i >= z && dp[i - z] !== -1)
            dp[i] = Math.max(dp[i], dp[i - z] + 1)

        if (dp[i] == 0)
            dp[i] = -1
    }

    return dp[n]
}

let n = 1000;
let x = 2;
let y = 3;
let z = 5;

console.time("Execution time")
console.log(maximizeTheCuts(n, x, y, z))
console.timeEnd("Execution time")