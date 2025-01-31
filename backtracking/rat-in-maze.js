/**
 * Consider a rat placed at (0, 0) in a square matrix of order N * N. 
 * It has to reach the destination at (N – 1, N – 1). Find all possible 
 * paths that the rat can take to reach from source to destination. 
 * The directions in which the rat can move are ‘U'(up), ‘D'(down), 
 * ‘L’ (left), ‘R’ (right). Value 0 at a cell in the matrix represents 
 * that it is blocked and rat cannot move to it while value 1 at a cell 
 * in the matrix represents that rat can be travel through it. Return 
 * the list of paths in lexicographically increasing order.
 * Note: In a path, no cell can be visited more than one time. If the 
 * source cell is 0, the rat cannot move to any other cell.
 */

/**
 * BACKTRACKING AND RECURSION
 * ==========================
 */

function isValidMove(x, y, length) {
    return x < length && y < length && x >= 0 && y >= 0 && Boolean(maze[x][y])
}

function getAllPossiblePaths(maze, x = 0, y = 0, path = "", visited = [], possiblePaths = []) {
    if (x == maze.length - 1 && y == maze.length - 1) {
        possiblePaths.push(path)
        return
    }

    const moves = {
        R: [0, 1],
        D: [1, 0],
        L: [0, -1],
        U: [-1, 0]
    }
    for (const move in moves) {
        const newMoveX = x + moves[move][0]
        const newMoveY = y + moves[move][1]

        if (isValidMove(newMoveX, newMoveY, maze.length) && !visited.includes(`${newMoveX},${newMoveY}`)) {
            getAllPossiblePaths(maze, newMoveX, newMoveY, path + move, [...visited, `${newMoveX},${newMoveY}`], possiblePaths)
        }
    }
    return possiblePaths
}

// const maze = [
//     [1, 0, 0, 0],
//     [1, 1, 0, 1],
//     [1, 1, 0, 0],
//     [0, 1, 1, 1]
// ]

// const maze = [
//     [1, 0, 0, 0],
//     [1, 1, 0, 1],
//     [1, 1, 0, 0],
//     [1, 1, 1, 1]
// ]

// const maze = [
//     [1, 0, 0, 0],
//     [1, 1, 0, 1],
//     [1, 1, 1, 1],
//     [0, 1, 1, 0]
// ]

const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
]

const possiblePaths = getAllPossiblePaths(maze)
if (possiblePaths.length)
    console.log(possiblePaths.join(", "))
else console.log("No path exists")

