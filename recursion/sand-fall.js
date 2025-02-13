/**
 * n grains of sand are being dropped one at a time inside a box of dimensions w x h. 
 * Display the resulting box content after the last grain stopped falling.
 * Each grain of sand is represented by an alphabetical character (a-z or A-Z) and by its initial position p above the box.
 * Sand behavior:
 * 1. If there is an empty space below it, it drops down.
 * 2. If there is not an empty space directly below it, but there is space at either diagonally adjacent position below 
 * (left or right, see the next two rules), then it will move horizontally in that direction before falling down again.
 * 3. If it is a lowercase character, it first tries to fall down, then towards the right, and then towards the left.
 * 4. If it is an uppercase character, it first tries to fall down, then towards the left, and then towards the right.
 * 5. If it can't fall down (below, to the right, or to the left) it has reached its final position.
 */

const { readFileAsStream } = require("../file-manager.cjs");

const testFileName = "big-box"

readFileAsStream(`./sand-fall-tests/${testFileName}.txt`)
    .then(content => sandFall(content))
    .catch(err => console.error('Error reading file:', err));


function sandFall(input) {
    const data = input.split("\n")
    const [H, W] = data[0].split(" ").map(Number)
    const N = data.length - 1;

    const box = Array.from({ length: H }, () => Array(W).fill(" "));
    for (let i = 1; i <= N; i++) {
        const [S, P] = data[i].split(" ")

        const boxCoordinates = canFallFurther(S, Number(P))
        if (boxCoordinates?.length) box[boxCoordinates[0]][boxCoordinates[1]] = S
    }
    for (const row of box) {
        console.log(`|${row.join("")}|`)
    }
    console.log(`+${Array(W).fill("-").join("")}+`)

    function canFallFurther(character, position, row = 0) {
        if (row + 1 < H) {
            if (box[row][position] == " " && box[row + 1][position] == " ")
                return canFallFurther(character, position, row + 1)

            else {
                if (character.charCodeAt(0) >= 97) {

                    if (position + 1 < W && box[row + 1][position + 1] == " ")
                        return canFallFurther(character, position + 1, row + 1)

                    else if (position - 1 >= 0 && box[row + 1][position - 1] == " ")
                        return canFallFurther(character, position - 1, row + 1)

                    else if (box[row][position] == " ")
                        return [row, position]

                    else if (position + 1 < W && box[row][position + 1] == " ")
                        return canFallFurther(character, position + 1, row)

                    else if (position - 1 >= 0 && box[row][position - 1] == " ") return canFallFurther(character, position - 1, row)

                    else return null
                }

                else {
                    if (position - 1 >= 0 && box[row + 1][position - 1] == " ")
                        return canFallFurther(character, position - 1, row + 1)

                    else if (position + 1 < W && box[row + 1][position + 1] == " ")
                        return canFallFurther(character, position + 1, row + 1)

                    else if (box[row][position] == " ")
                        return [row, position]

                    else if (position - 1 >= 0 && box[row][position - 1] == " ")
                        return canFallFurther(character, position - 1, row)

                    else if (position + 1 < W && box[row][position + 1] == " ") return canFallFurther(character, position + 1, row)

                    else return null
                }
            }
        }
        else return [row, position]
    }
}