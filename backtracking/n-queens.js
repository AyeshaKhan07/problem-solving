/**
 * The N Queen is the problem of placing N chess queens on an N×N chessboard 
 * so that no two queens attack each other. If we have a 4 x 4 chessboard, the
 * solution would be:
 * 
 *  . Q . .
 *  . . . Q 
 *  Q . . .
 *  . . Q .
 * 
 */

function mapMoves(n) {
    const moves = [];
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            moves.push([y, x])
        }
    }
    return moves
}

function safeBlock(x, y, queenBlocks, n) {
    if (!queenBlocks.length)
        return true

    if (queenBlocks.toString().includes(`${x},${y}`))
        return false

    let diagX=1, diagY=1
    for (let i = 0; i < n; i++) {
        if(x==2&&y==3){
            console.log("for:", i)
            console.log(x-diagX, y-diagY)
            console.log(x+diagX, y+diagY)
            console.log(x-diagX, y+diagY)
            console.log(x+diagX, y-diagY)
        }
        for (let j = 0; j < n; j++) {
            if (queenBlocks.toString().includes(`${i},${j}`) && (i == x || j == y))
                return false

            
            if(queenBlocks.toString().includes(`${i},${j}`) && ((i == x-diagX && j==y-diagY) || (i==x-diagX&&j==y+diagY)||(i==x+diagX&&j==y-diagY)||(i==x+diagX&&j==y+diagY)))
                return false

        }
        diagX++
        diagY++
    }

    // const queenOnAxis = queenBlocks.filter(block => block[0] == x || block[1] == y).length
    // if (queenOnAxis)
    //     return false

    // const queenOnDiagonal = queenBlocks.filter(block => ((block[0] < x && block[1] < y) || (block[0] < x && block[1] > y) || (block[0] > x && block[1] > y) || (block[0] > x && block[1] < y))).length
    // if (queenOnDiagonal)
    //     return false

    return true
}

function solutionExist(moves, n, x = 0, y = 0, queenBlocks = []) {
    console.error("queenBlocks", queenBlocks)
    if (x == n && y == n) {
        return false
    }

    if (queenBlocks.length >= n) {
        return queenBlocks
    }

    for (const move of moves) {
        const newX = move[0]
        const newY = move[1]
        console.log("new moves", newX, newY)

        if (safeBlock(newX, newY, queenBlocks, n)) {
            queenBlocks.push([newX, newY])
            if (!solutionExist(moves, n, newX, newY, queenBlocks))
                queenBlocks.pop()
        }
    }
    return false
}

function findQueensPositions(n) {
    const moves = mapMoves(n)
    console.log("moves", moves)
    const queenBlocks = solutionExist(moves, n)
    if (queenBlocks?.length) console.log("Solution: ", queenBlocks)
    else console.log("No solution exists")
}

findQueensPositions(4)