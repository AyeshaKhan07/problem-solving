const graph = {
    T:['B', 'E'],
    E: ['A', 'N', 'T'],
    N: ['E', 'D', 'S'],
    S: ['N', 'O'],
    B: ['T', 'A', 'F'],
    A: ['E', 'B', 'C', 'D'],
    D: ['N', 'A', 'G', 'O'],
    O: ['S', 'D', 'P'],
    F: ['B', 'C', 'I'],
    C: ['A', 'F', 'G', 'H'],
    G: ['D', 'C', 'J', 'P'],
    P: ['O', 'G', 'Q'],
    I: ['F', 'H', 'L'],
    H: ['C', 'I', 'J', 'K'],
    J: ['G', 'H', 'Q', 'M'],
    Q: ['P', 'J', 'R'],
    L: ['I', 'K'],
    K: ['H', 'L', 'M'],
    M: ['J', 'K', 'R'],
    R: ['M', 'Q']
}

const obstacles = ["G", "O", "H", "B"]

function bfs(start, goal, graph, obstacles) {
    const queue = [start]
    const visited = { [start]: "None" }

    while (queue.length) {
        const currentNode = queue.shift()
        if (currentNode == goal)
            break

        const adjacentNodes = graph[currentNode]
        for (const node of adjacentNodes) {
            if (!(Object.keys(visited).includes(node)) && !obstacles.includes(node)) {
                queue.push(node)
                visited[node] = currentNode
            }
        }
    }

    let currentNode = goal;
    const shortestPath = [currentNode];
    while(currentNode !== start)
        {
            currentNode = visited[currentNode]
            shortestPath.push(currentNode)
        }

    shortestPath.reverse();
    return shortestPath.join(" --> ")
}

console.log(bfs("D", "M", graph, obstacles))