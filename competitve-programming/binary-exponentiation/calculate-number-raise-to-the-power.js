/* 
 * You can pass the n while running the code. If you wanna find the
 * fibonacci sequence at index 100, use command: 
 * "node calculate-number-raise-to-the-power.js 100"
 */

function calculatePowerByRecursion(number, exponent) {
    if (exponent == 0)
        return 1
    if (exponent == 1)
        return number
    if (exponent % 2 == 0)
        return calculatePowerByRecursion(number * number, exponent / 2)

    else return number * calculatePowerByRecursion(number * number, (exponent - 1) / 2)
}

function calculatePowerByIteration(number, exponent) {
    if (exponent == 0)
        return 1
    if (exponent == 1)
        return number

    let n = number, e = exponent

    while (e > 1) {
        console.log(n, e)
        n = n * n
        if (e % 2 == 0)
            e = e / 2

        else e = (e - 1) / 2
    }

    return n

}

const number = Number(process.argv[2]) || 10
const exponent = Number(process.argv[3]) || 3

console.log("By Recusion:", calculatePowerByRecursion(number, exponent))
console.log("By Iteration:", calculatePowerByIteration(number, exponent))
