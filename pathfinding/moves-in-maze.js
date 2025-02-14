/**
 * You are in a maze. You have to find the minimum number of moves to reach each cell from the starting point,
 * and output those numbers in the initial maze.
 * The number of moves is represented using a character: 0-9 then A-Z (A=10, B=11, ... Z=35).
 * You may move from a cell to a neighbouring cell which is not a wall in any one of the four directions: left, 
 * right, up or down. The maze is periodic: if you go left you appear on the right if there is no wall, and 
 * vice versa, similarly with up/down.
 * There may be unreachable points.
 * The input maze is made of # for walls, . for free spaces and S for the starting position.
 * The output must be made of # for walls, . for unreachable points, and numbers 0-9, A-Z.
 */

const { readFileAsStream } = require("../file-manager.cjs");
const { spawn } = require("child_process");
const child = spawn('ls', ['./moves-in-maze-testcases']);

child.stdout.on('data', (data) => {
    const testFiles = data.toString().trimEnd().split("\n")
    for (const testFile of testFiles) {

        readFileAsStream(`./moves-in-maze-testcases/${testFile}`)
            .then(content => { console.log("\nExecuting testcase:", testFile, "\n"); movesInMaze(content) })
            .catch(err => console.error('Error reading file:', err));
    }
});
function movesInMaze(input) {
    const data = input.split("\n")
    const [h, w] = data[0].split(" ").map(Number)
    let startingPosition = []
    const maze = []
    const hexatrigesimalNumbers = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 1; i <= h; i++) {
        const ROW = data[i];
        const startingIndex = ROW.indexOf("S")
        if (startingIndex >= 0)
            startingPosition = [i-1, startingIndex];
        maze.push(ROW.split(""))
    }
    const shortestPaths = bfs(startingPosition, h, w, maze)

    for (const goal in shortestPaths) {
        const [x, y] = goal.split(",")
        if (shortestPaths[goal] == "None")
            maze[x][y] = 0

        else {
            const [prevX, prevY] = shortestPaths[goal].split(",")
            maze[x][y] = hexatrigesimalNumbers[hexatrigesimalNumbers.indexOf(maze[prevX][prevY]) + 1]
        }
    }
    maze.map(row => console.log(row.join("")))
}

function bfs(start, h, w, maze) {
    const queue = [start]
    const visited = { [start.join(",")]: "None" }

    while (queue.length) {
        const currentNode = queue.shift()

        const adjacentNodes = getAdjacentNodes(currentNode[0], currentNode[1], h, w)
        for (const node of adjacentNodes) {
            if (!(Object.keys(visited).includes(node.join(","))) && maze[node[0]][node[1]] !== "#") {
                queue.push(node)
                visited[node.join(",")] = currentNode.join(",")
            }
        }
    }
    return visited
}

function getAdjacentNodes(x, y, h, w) {
    const nodes = []

    if (x - 1 >= 0)
        nodes.push([x - 1, y])
    else nodes.push([h - 1, y])

    if (x + 1 < h)
        nodes.push([Number(x + 1), y])
    else nodes.push([0, y])

    if (y - 1 >= 0)
        nodes.push([x, y - 1])
    else nodes.push([x, w - 1])

    if (y + 1 < w)
        nodes.push([x, Number(y) + 1])
    else nodes.push([x, 0])

    return nodes
}
